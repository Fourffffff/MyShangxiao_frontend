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
  __name: "SearchBar",
  props: {
    pageType: { type: String, default: "" },
    placeholder: { type: String, default: "点击搜索..." }
  },
  emits: ["search"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const keyword = common_vendor.ref("");
    function handleSearch() {
      emit("search", {
        keyword: keyword.value.trim(),
        pageType: props.pageType
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search"
        }),
        b: __props.placeholder,
        c: common_vendor.o(handleSearch),
        d: keyword.value,
        e: common_vendor.o(($event) => keyword.value = $event.detail.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6602f27d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/SearchBar/SearchBar.js.map
