// ============================================================
// SERVICE WORKER - SUPER COMPRESS v2.0.0
// ============================================================

const CACHE_NAME = 'super-compress-v2.0.0';
const APP_VERSION = '2.0.0';

// File yang perlu di-cache
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// ============================================================
// INSTALL
// ============================================================
self.addEventListener('install', event => {
  console.log('[SW] Installing version', APP_VERSION);
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] Skip waiting');
        return self.skipWaiting();
      })
  );
});

// ============================================================
// ACTIVATE
// ============================================================
self.addEventListener('activate', event => {
  console.log('[SW] Activating version', APP_VERSION);
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Claiming clients');
      return self.clients.claim();
    })
  );
});

// ============================================================
// FETCH - Network first, fallback to cache
// ============================================================
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const responseToCache = response.clone();
        if (response && response.status === 200 && response.type === 'basic') {
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseToCache))
            .catch(() => {});
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request)
          .then(cachedResponse => {
            if (cachedResponse) return cachedResponse;
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/');
            }
            return new Response('Network error', { status: 408 });
          });
      })
  );
});

// ============================================================
// MESSAGE
// ============================================================
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('[SW] Service Worker v' + APP_VERSION + ' initialized');
