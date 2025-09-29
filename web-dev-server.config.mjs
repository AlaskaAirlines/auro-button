export default {
  rootDir: "./demo",
  middleware: [
    function rewriteIndex(context, next) {
      if (context.url === "/" || context.url === "/index.html") {
        context.url = "/index.html";
      }
      if (!context.url.endsWith("/") && !context.url.includes(".")) {
        context.url += ".html";
      }
      return next();
    },
  ],
  nodeResolve: true,
  watch: true,
};
