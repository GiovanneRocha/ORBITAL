/* ORBITAL v7.3 — service worker */
const CACHE_NAME='orbital-v7-3-cache-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-256.png','./assets/icon-384.png','./assets/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(CACHE_NAME);await c.addAll(ASSETS);self.skipWaiting();})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{const ks=await caches.keys();await Promise.all(ks.map(k=>k===CACHE_NAME?null:caches.delete(k)));self.clients.claim();})())});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET') return; e.respondWith((async()=>{const c=await caches.match(r);if(c) return c;try{const f=await fetch(r);const cache=await caches.open(CACHE_NAME);cache.put(r,f.clone());return f;}catch(err){return caches.match('./');}})())});
