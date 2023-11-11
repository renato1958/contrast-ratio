const VERSION = "v1";
const CACHE_NAME = `contrast-ratio-${VERSION}`;
const APP_STATIC_RESOURCES = [
    "./",
    "./index.html",
    "./css/style.css",
    "./js/main.js",
    "./js/functions.js",
    "./assets/favicons/android-chrome-192x192.png",
    "./assets/favicons/android-chrome-512x512.png",
    "./assets/favicons/apple-touch-icon.png",
    "./assets/favicons/favicon-16x16.png",
    "./assets/favicons/favicon-32x32.png",
    "./assets/favicons/favicon.ico",
    "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css",
    "./assets/fontawesome/solid.min.js",
    "./assets/fontawesome/fontawesome.min.js"
];

self.addEventListener("install", e => {
    e.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            cache.addAll(APP_STATIC_RESOURCES);
        })(),
    );
});

self.addEventListener("activate", e => {
    e.waitUntil(
        (async () => {
            const names = await caches.keys();
            await Promise.all(
                names.map(name => {
                    if(name !== CACHE_NAME) {
                        return caches.delete(name);
                    }
                })
            );
            await clients.claim();
        })(),
    );
});

self.addEventListener("fetch", e => {
    if(e.request.mode === "navigate") {
        e.respondWith(caches.match("./"));
        return;
    }

    e.respondWith(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            const cachedResponse = await cache.match(e.request.url);
            if(cachedResponse) {
                return cachedResponse;
            }

            return new Response(null, { status: 404 });
        })(),
    );
});