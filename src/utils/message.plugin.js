export default {
  install(Vue) {
    // eslint-disable-next-line
    Vue.prototype.$message = function (html) {
      window.M.toast({ html });
    };

    // eslint-disable-next-line
    Vue.prototype.$error = function (html) {
      window.M.toast({ html: `[Ошибка]: ${html}` });
    };
  },
};
