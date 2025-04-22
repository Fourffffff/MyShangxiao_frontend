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
  __name: "NoteComment",
  props: {
    username: String,
    avatarUrl: String,
    time: String,
    comment: String,
    likeCount: Number,
    islike: Boolean,
    starNum: Number
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.avatarUrl,
        b: common_vendor.t(__props.username),
        c: __props.starNum
      }, __props.starNum ? {
        d: common_vendor.f(__props.starNum, (i, k0, i0) => {
          return {
            a: i,
            b: "dc544a89-0-" + i0
          };
        }),
        e: common_vendor.p({
          type: "star-filled",
          size: "18",
          color: "#f8b500"
        }),
        f: common_vendor.f(5 - __props.starNum, (i, k0, i0) => {
          return {
            a: i,
            b: "dc544a89-1-" + i0
          };
        }),
        g: common_vendor.p({
          type: "star",
          size: "18",
          color: "#f8b500"
        }),
        h: common_vendor.t(__props.time)
      } : {
        i: common_vendor.t(__props.time)
      }, {
        j: common_vendor.t(__props.comment)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dc544a89"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/NoteComment/NoteComment.js.map
