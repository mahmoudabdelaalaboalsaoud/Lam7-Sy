export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/__/auth/")) {
      const target = new URL(url.pathname + url.search, "https://flosy-rahet-fen.firebaseapp.com");
      return fetch(target.toString(), {
        method: request.method,
        headers: request.headers,
        body: (request.method === "GET" || request.method === "HEAD") ? undefined : request.body,
        redirect: "manual"
      });
    }
    return env.ASSETS.fetch(request);
  }
};
