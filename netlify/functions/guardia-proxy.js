// netlify/functions/guardia-proxy.js
// Proxy para todas las llamadas a la API de Guardia Digital
// Redirige desde Netlify Functions → API Local (3001)

exports.handler = async (event) => {
    try {
        // Configuración de la API local - TAILSCALE FUNNEL
        const API_LOCAL = 'https://desktop-9vhqq3p.tailscale.net/api/guardia';
        
        // Obtener acción y parámetros
        const { action, ...params } = event.queryStringParameters || {};
        
        if (!action) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Acción requerida' })
            };
        }
        
        // Construir URL de la API local
        let url = `${API_LOCAL}/${action}`;
        const queryParams = new URLSearchParams();
        
        // Agregar parámetros de query
        for (const [key, value] of Object.entries(params || {})) {
            if (value) queryParams.append(key, value);
        }
        
        if (queryParams.toString()) {
            url += `?${queryParams.toString()}`;
        }
        
        // Configurar opciones de fetch
        const fetchOptions = {
            method: event.httpMethod || 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000
        };
        
        // Si es POST, agregar body
        if (event.body && (event.httpMethod === 'POST' || event.httpMethod === 'PUT')) {
            fetchOptions.body = event.body;
        }
        
        // Hacer la llamada a la API local
        const response = await fetch(url, fetchOptions);
        const data = await response.json();
        
        return {
            statusCode: response.status,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        };
        
    } catch (error) {
        console.error('Error en proxy:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                error: 'Error en proxy',
                detalle: error.message 
            })
        };
    }
};
