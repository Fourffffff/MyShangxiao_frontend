"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "register",
  setup(__props) {
    const formData = common_vendor.ref({
      email: "",
      verify: "",
      password: "",
      password2: ""
    });
    const gotoLogin = () => {
      common_vendor.index.redirectTo({
        url: "/pages/login/login"
      });
    };
    const handleLogin = () => {
      if (!formData.value.email) {
        common_vendor.index.showToast({
          title: "请输入邮箱",
          icon: "none"
        });
        return;
      }
      if (!formData.value.password) {
        common_vendor.index.showToast({
          title: "请输入密码",
          icon: "none"
        });
        return;
      }
    };
    function send_verify_code() {
      common_vendor.index.request({
        url: "http://127.0.0.1:8000/user/send_code",
        method: "POST",
        data: {
          email: formData.value.email
        },
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/register/register.vue:107", res.data);
        }
      });
    }
    common_vendor.onLoad(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: formData.value.email,
        b: common_vendor.o(($event) => formData.value.email = $event.detail.value),
        c: formData.value.verify,
        d: common_vendor.o(($event) => formData.value.verify = $event.detail.value),
        e: common_vendor.o(send_verify_code),
        f: formData.value.password,
        g: common_vendor.o(($event) => formData.value.password = $event.detail.value),
        h: formData.value.password2,
        i: common_vendor.o(($event) => formData.value.password2 = $event.detail.value),
        j: common_vendor.o(handleLogin),
        k: common_vendor.o(gotoLogin),
        l: common_assets._imports_0$1
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/register/register.js.map
