self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app').then(function(cache) {
      return cache.addAll([
          '/index.html',
		  '/ww.js',
		  '/offline.html',
          '/src/js/app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // Fall back to network
      return response || fetch(event.request);
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
    })
  );
});

// self.addEventListener('fetch', function(event) {
  // event.respondWith(
    // // Try the network
   // fetch(event.request).then(function(response) {
      // // Fall back to cache
      // return response || caches.match(event.request);
    // })
  // );
// });