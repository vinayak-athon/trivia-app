const devProxy: { [key: string]: {} } = {
  "/api": {
    target: "https://opentdb.com/api.php",
    pathRewrite: { "^/api/question": "" },
    changeOrigin: true,
  },
};

export default devProxy;
