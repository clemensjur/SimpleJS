var CACHE_NAME = "site-cache";
var urlsToCache = ["/", "/style/default.css", "/script/index.js", "/favicon.ico"];

self.addEventListener("install", event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Opened cache!");
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
