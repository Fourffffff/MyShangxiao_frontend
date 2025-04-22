"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_request = require("../../utils/request.js");
if (!Array) {
  const _easycom_SearchBar2 = common_vendor.resolveComponent("SearchBar");
  const _easycom_JudgeObj2 = common_vendor.resolveComponent("JudgeObj");
  (_easycom_SearchBar2 + _easycom_JudgeObj2)();
}
const _easycom_SearchBar = () => "../../components/SearchBar/SearchBar.js";
const _easycom_JudgeObj = () => "../../components/JudgeObj/JudgeObj.js";
if (!Math) {
  (_easycom_SearchBar + uniIcons + uniPopup + _easycom_JudgeObj)();
}
const uniPopup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
const uniIcons = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
const _sfc_main = {
  __name: "school_discussion",
  setup(__props) {
    const categories = common_vendor.ref([
      { id: 1, name: "教学楼" },
      { id: 2, name: "图书馆" },
      { id: 3, name: "食堂" },
      { id: 4, name: "宿舍" }
    ]);
    const categoryPopup = common_vendor.ref(null);
    const currentType = common_vendor.ref("教学楼");
    const judges = common_vendor.ref([]);
    const get_all = async () => {
      let res = await utils_request.request({
        url: "/judge/get_all",
        data: {
          type: currentType.value
        }
      });
      common_vendor.index.__f__("log", "at pages/school_discussion/school_discussion.vue:78", res);
      judges.value = res.data;
    };
    const openCategoryPopup = () => {
      categoryPopup.value.open();
    };
    const closeCategoryPopup = () => {
      categoryPopup.value.close();
    };
    const selectCategory = (item) => {
      common_vendor.index.__f__("log", "at pages/school_discussion/school_discussion.vue:90", "选择了:", item.name);
      closeCategoryPopup();
      currentType.value = item.name;
    };
    function goto_school_judge_info(judgeId) {
      common_vendor.index.navigateTo({
        url: `/pages/school_judge_info/school_judge_info?judgeId=${judgeId}`
      });
    }
    common_vendor.onMounted(() => {
      get_all();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(openCategoryPopup),
        b: common_vendor.o(closeCategoryPopup),
        c: common_vendor.p({
          type: "closeempty",
          size: "24"
        }),
        d: common_vendor.f(categories.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index,
            c: common_vendor.o(($event) => selectCategory(item), index),
            d: `${index * 0.05}s`
          };
        }),
        e: common_vendor.sr(categoryPopup, "103eb5ea-1", {
          "k": "categoryPopup"
        }),
        f: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        }),
        g: common_assets._imports_0$3,
        h: common_vendor.t(currentType.value),
        i: common_assets._imports_1,
        j: common_vendor.f(judges.value, (judge, k0, i0) => {
          return {
            a: common_vendor.o(($event) => goto_school_judge_info(judge.id)),
            b: "103eb5ea-3-" + i0,
            c: common_vendor.p({
              rank: judge.rank,
              name: judge.name,
              description: judge.description,
              score: judge.score
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-103eb5ea"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/school_discussion/school_discussion.js.map
