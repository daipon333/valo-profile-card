import proxy from "http-proxy-middleware";
import getAccountApi from "./components/getAccountApi";

module.exports = function (app) {
  const headers = {
    "Content-Type": "application/json",
  };
  app.use(
    proxy(getAccountApi, {
      target: "https://test.com/",
      changeOrigin: true,
      secure: false,
      headers: headers,
    })
  );
};
