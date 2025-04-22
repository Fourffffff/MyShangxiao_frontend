"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "CommentPosting",
  setup(__props) {
    const commentText = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: commentText.value,
        b: common_vendor.o(($event) => commentText.value = $event.detail.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-165fb010"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/CommentPosting/CommentPosting.js.map
