// Serves the game files the player loaded from a release zip. They live in Cache Storage under ./local/<id>/...
// and never leave this browser.
var CACHE = "gb-releases";
var TYPES = { js: "application/javascript", wasm: "application/wasm", json: "application/json", html: "text/html", hash: "text/plain", txt: "text/plain" };

self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener("fetch", function (e) {
  var url = new URL(e.request.url);
  var scope = new URL(self.registration.scope);
  if (url.origin !== scope.origin || url.pathname.indexOf(scope.pathname + "local/") !== 0) return;
  e.respondWith(caches.open(CACHE).then(function (cache) {
    return cache.match(url.origin + url.pathname).then(function (hit) {
      if (!hit) return new Response("Not in the loaded release: " + url.pathname, { status: 404 });
      var ext = url.pathname.split(".").pop().toLowerCase();
      var headers = new Headers(hit.headers);
      headers.set("Content-Type", TYPES[ext] || "application/octet-stream");
      return new Response(hit.body, { status: 200, headers: headers });
    });
  }));
});
