"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "person-filled",
          size: "60rpx",
          color: "#fff"
        }),
        b: common_vendor.p({
          type: "star-filled",
          size: "44rpx"
        }),
        c: common_vendor.p({
          type: "arrowright",
          size: "40rpx",
          color: "#888"
        }),
        d: common_vendor.p({
          type: "chatboxes-filled",
          size: "44rpx"
        }),
        e: common_vendor.p({
          type: "arrowright",
          size: "40rpx",
          color: "#888"
        }),
        f: common_vendor.p({
          type: "locked-filled",
          size: "44rpx"
        }),
        g: common_vendor.p({
          type: "arrowright",
          size: "40rpx",
          color: "#888"
        }),
        h: common_vendor.p({
          type: "settings-filled",
          size: "44rpx"
        }),
        i: common_vendor.p({
          type: "arrowright",
          size: "40rpx",
          color: "#888"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c2ebfa5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/mine.js.map
