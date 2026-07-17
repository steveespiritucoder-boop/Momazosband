// Service Worker requerido para la instalación PWA
const CACHE_NAME = 'momazos-band-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Configuración básica para cumplir requisitos de Chrome
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
