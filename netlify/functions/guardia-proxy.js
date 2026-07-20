// netlify/functions/guardia-proxy.js
// Proxy para todas las llamadas a la API de Guardia Digital
// Redirige desde Netlify Functions → API Local (3001) via Tailscale Funnel

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
};

exports.handler = async (event) => {
    // Manejar OPTIONS request (CORS preflight)
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: ''
        };
    }

    try {
        // Configuración de la API local - TAILSCALE FUNNEL
        const API_LOCAL = 'https://desktop-9vhqq3p.tailscale.net/api/guardia';
        const TIMEOUT = 8000; // 8 segundos
        
        // Obtener acción y parámetros
        const queryParams = event.queryStringParameters || {};
        const action = queryParams.action;
        
        if (!action) {
            return {
                statusCode: 400,
                headers: CORS_HEADERS,
                body: JSON.stringify({ error: 'Acción requerida (parámetro: action)' })
            };
        }

        // Validar acción (prevenir inyección)
        if (!/^[a-zA-Z0-9_-]+$/.test(action)) {
            return {
                statusCode: 400,
                headers: CORS_HEADERS,
                body: JSON.stringify({ error: 'Acción inválida' })
            };
        }
        
        // Construir URL de la API local
        let url = `${API_LOCAL}/${action}`;
        const urlParams = new URLSearchParams();
        
        // Agregar parámetros de query (excepto action)
        for (const [key, value] of Object.entries(queryParams)) {
            if (key !== 'action' && value) {
                urlParams.append(key, value);
            }
        }
        
        if (urlParams.toString()) {
            url += `?${urlParams.toString()}`;
        }

        console.log(`[Guardia Proxy] ${event.httpMethod} ${url}`);
        
        // Crear AbortController para timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
        
        // Configurar opciones de fetch
        const fetchOptions = {
            method: event.httpMethod || 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: controller.signal
        };
        
        // Si es POST/PUT, agregar body
        if (event.body && (event.httpMethod === 'POST' || event.httpMethod === 'PUT')) {
            try {
                fetchOptions.body = JSON.stringify(JSON.parse(event.body));
            } catch {
                return {
                    statusCode: 400,
                    headers: CORS_HEADERS,
                    body: JSON.stringify({ error: 'Body JSON inválido' })
                };
            }
        }
        
        // Hacer la llamada a la API local
        const response = await fetch(url, fetchOptions);
        clearTimeout(timeoutId);

        // Leer respuesta
        let data;
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        } else {
            data = await response.text();
        }
        
        return {
            statusCode: response.status,
            headers: {
                'Content-Type': 'application/json',
                ...CORS_HEADERS
            },
            body: typeof data === 'string' ? data : JSON.stringify(data)
        };
        
    } catch (error) {
        console.error('[Guardia Proxy Error]', error.name, error.message);
        
        // Diferenciar tipos de error
        let statusCode = 500;
        let errorMsg = 'Error en proxy';
        
        if (error.name === 'AbortError') {
            statusCode = 504;
            errorMsg = 'Timeout: API local no responde';
        } else if (error.message.includes('ECONNREFUSED')) {
            statusCode = 503;
            errorMsg = 'API local no disponible';
        }
        
        return {
            statusCode,
            headers: {
                'Content-Type': 'application/json',
                ...CORS_HEADERS
            },
            body: JSON.stringify({ 
                error: errorMsg,
                detalle: error.message 
            })
        };
    }
};
