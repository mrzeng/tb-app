global.my = {
  onMessage() {},
  postMessage() {},
  createWebViewContext(webViewId) {
    return {
      postMessage() {},
    };
  },
};

global.console.error = () => {};
