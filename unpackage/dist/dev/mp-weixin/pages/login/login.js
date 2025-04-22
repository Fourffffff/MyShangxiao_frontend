"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_request = require("../../utils/request.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const formData = common_vendor.ref({
      email: "",
      password: ""
    });
    const gotoRegister = () => {
      common_vendor.index.redirectTo({
        url: "/pages/register/register"
      });
    };
    const handleLogin = async () => {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!formData.value.email) {
        common_vendor.index.showToast({
          title: "请输入邮箱",
          icon: "none"
        });
        return;
      }
      if (!regex.test(formData.value.email)) {
        common_vendor.index.showToast({
          title: "邮箱格式不正确",
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
      let res = await utils_request.request({
        url: "/user/login",
        method: "Post",
        data: {
          email: formData.value.email,
          password: formData.value.password
        }
      });
      if (res.code == 200) {
        common_vendor.index.setStorageSync("id", res.data);
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      }
    };
    common_vendor.onLoad(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: formData.value.email,
        b: common_vendor.o(($event) => formData.value.email = $event.detail.value),
        c: formData.value.password,
        d: common_vendor.o(($event) => formData.value.password = $event.detail.value),
        e: common_vendor.o(handleLogin),
        f: common_vendor.o(gotoRegister),
        g: common_assets._imports_0$1
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
