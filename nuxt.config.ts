export default {
  env: {},
  head: {
    title: "nuxt-typescript",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js TypeScript project"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:8080"
        : "https://api.xyz.com"
  },
  plugins: ["~/plugins/axios"],
  serverMiddleware: ["~/server/index"]
};
