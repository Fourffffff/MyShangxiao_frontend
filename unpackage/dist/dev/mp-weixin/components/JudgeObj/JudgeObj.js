"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "JudgeObj",
  props: {
    rank: { type: Number, default: 1 },
    name: { type: String, default: "A教学楼" },
    score: { type: Number, default: 9.3 },
    description: { type: String, default: "饮水机水很好喝" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(__props.rank),
        c: common_vendor.t(__props.rank),
        d: common_vendor.t(__props.name),
        e: common_vendor.t(__props.score.toFixed(1)),
        f: common_vendor.f(Math.floor(__props.score / 2), (i, k0, i0) => {
          return {
            a: "10bde99b-0-" + i0
          };
        }),
        g: common_vendor.p({
          type: "star-filled",
          color: "gold"
        }),
        h: common_vendor.f(5 - Math.floor(__props.score / 2), (i, k0, i0) => {
          return {
            a: "10bde99b-1-" + i0
          };
        }),
        i: common_vendor.p({
          type: "star",
          color: "gold"
        }),
        j: common_vendor.t(__props.description)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10bde99b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/JudgeObj/JudgeObj.js.map
