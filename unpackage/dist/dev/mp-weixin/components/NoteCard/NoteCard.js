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
  __name: "NoteCard",
  props: {
    imageUrl: { type: String, default: "/common/images/test.jpg" },
    title: { type: String, default: "标题标题" },
    content: { type: String, default: "内容内容内容内容内容内容内容内容..." },
    author: { type: String, default: "作者" },
    avatarUrl: { type: String, default: "/common/images/avatar.png" },
    like: { type: Boolean, default: false },
    likes: { type: Number, default: 10 }
  },
  setup(__props) {
    function handleImgError(e) {
      common_vendor.index.__f__("log", "at components/NoteCard/NoteCard.vue:41", "图片加载失败:", e);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.imageUrl,
        b: common_vendor.o(handleImgError),
        c: common_vendor.t(__props.title),
        d: common_vendor.t(__props.content),
        e: __props.avatarUrl,
        f: common_vendor.t(__props.author),
        g: __props.like
      }, __props.like ? {
        h: common_vendor.p({
          type: "hand-up-filled",
          color: "#91bf6f"
        })
      } : {}, {
        i: !__props.like
      }, !__props.like ? {
        j: common_vendor.p({
          type: "hand-up"
        })
      } : {}, {
        k: common_vendor.t(__props.likes)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0c1c42e9"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/NoteCard/NoteCard.js.map
