// Transição do cache do site anterior. Sem cache ou integrações novas.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async () => {
 for (const key of await caches.keys()) if (key.startsWith('tinight-')) await caches.delete(key);
 await self.clients.claim();
 await self.registration.unregister();
})()));
