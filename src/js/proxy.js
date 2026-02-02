// SUB v1 Proxy Logic
// For now: simple redirect to a proxy backend
// In production → point to your Node.js / Cloudflare Worker / etc.

const PROXY_BASE = "https://your-proxy-backend.workers.dev/proxy?url=";
// const PROXY_BASE = "http://localhost:8080/proxy?url="; // for local dev

function goToProxy(url) {
  if (!url) return;
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }
  window.open(PROXY_BASE + encodeURIComponent(url), "_blank");
}
