// netlify/functions/guardia-proxy.js
// Proxy simplificado para Guardia Digital

exports.handler = async (event, context) => {
    // CORS Headers
    const CORS_HEADERS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Responder a OPTIONS (CORS preflight)
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: ''
        };
    }

    try {
        // API Local via Tailscale
        const API_LOCAL = 'https://desktop-9vhqq3p.tailscale.net/api/guardia';
        
        // Obtener parámetro 'action'
        const queryParams = event.queryStringParameters || {};
        const action = queryParams.action;
        
        if (!action) {
            return {
                statusCode: 400,
                headers: CORS_HEADERS,
                body: JSON.stringify({ error: 'Parámetro "action" requerido' })
            };
        }

        // Construir URL
        const url = `${API_LOCAL}/${action}`;
        console.log(`[Proxy] ${event.httpMethod} ${url}`);
        
        // Opciones de fetch
        const fetchOptions = {
            method: event.httpMethod || 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        // Agregar body si es POST/PUT
        if (event.body && (event.httpMethod === 'POST' || event.httpMethod === 'PUT')) {
            fetchOptions.body = event.body;
        }

        // Llamar a API local
        const response = await fetch(url, fetchOptions);
        const data = await response.json();

        return {
            statusCode: response.status,
            headers: {
                'Content-Type': 'application/json',
                ...CORS_HEADERS
            },
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error('[Proxy Error]', error.message);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                ...CORS_HEADERS
            },
            body: JSON.stringify({
                error: 'Error en proxy',
                detalle: error.message
            })
        };
    }
};
