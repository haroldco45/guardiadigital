// Guardia Digital v4.0 - Service Worker
const CACHE_NAME = 'guardia-digital-v4.0';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instalar service worker
self.addEventListener('install', event => {
  console.log('[SW] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Cache abierto');
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.log('[SW] Error al cachear:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activar service worker
self.addEventListener('activate', event => {
  console.log('[SW] Activando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia: Network First, Fall back to Cache
self.addEventListener('fetch', event => {
  // Solo cachear requests GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si viene del servidor, cachearlo
        if (response && response.status === 200 && response.type !== 'error') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Si falla, intentar desde cache
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            console.log('[SW] Sirviendo desde cache:', event.request.url);
            return cachedResponse;
          }
          // Si tampoco está en cache, retornar página offline
          return new Response(
            '<h1>⚠️ Sin conexión</h1><p>Guardia Digital necesita internet para cargar. Por favor revisa tu conexión.</p>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        });
      })
  );
});

// Mensajes desde el cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('[SW] Service Worker cargado - Guardia Digital v4.0');
