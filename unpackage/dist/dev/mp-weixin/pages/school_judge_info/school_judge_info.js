"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_NoteComment2 = common_vendor.resolveComponent("NoteComment");
  const _easycom_CommentPosting2 = common_vendor.resolveComponent("CommentPosting");
  (_easycom_uni_icons2 + _easycom_NoteComment2 + _easycom_CommentPosting2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_NoteComment = () => "../../components/NoteComment/NoteComment.js";
const _easycom_CommentPosting = () => "../../components/CommentPosting/CommentPosting.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_NoteComment + _easycom_CommentPosting)();
}
const _sfc_main = {
  __name: "school_judge_info",
  setup(__props) {
    const name = common_vendor.ref("A教学楼");
    const intro = common_vendor.ref("简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介");
    const type = common_vendor.ref("教学楼评测");
    function getBarWidth(index) {
      const widths = [80, 60, 30, 10, 5];
      return widths[index - 1];
    }
    const time = common_vendor.ref(/* @__PURE__ */ new Date());
    common_vendor.ref(10);
    common_vendor.ref(10);
    const isliked = common_vendor.ref(false);
    isliked.value = true;
    const isFav = common_vendor.ref(false);
    isFav.value = true;
    function formatDate(date) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      const h = String(date.getHours()).padStart(2, "0");
      const min = String(date.getMinutes()).padStart(2, "0");
      const s = String(date.getSeconds()).padStart(2, "0");
      return `${y}-${m}-${d} ${h}:${min}:${s}`;
    }
    const now = /* @__PURE__ */ new Date();
    time.value = formatDate(now);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(name.value),
        c: common_vendor.t(intro.value),
        d: common_vendor.t(type.value),
        e: common_vendor.p({
          type: "star"
        }),
        f: common_vendor.p({
          type: "map"
        }),
        g: common_vendor.f(5, (i, k0, i0) => {
          return {
            a: common_vendor.f(5 - i + 1, (j, k1, i1) => {
              return {
                a: j
              };
            }),
            b: getBarWidth(i) + "%",
            c: i
          };
        }),
        h: common_vendor.f(10, (i, k0, i0) => {
          return {
            a: "dca05841-2-" + i0
          };
        }),
        i: common_vendor.p({
          username: "流星",
          avatarUrl: "/common/images/test.jpg",
          time: time.value,
          comment: "这个产品真的很好用，界面清爽，功能也很实用！",
          likeCount: 100,
          islike: true,
          starNum: 3
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dca05841"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/school_judge_info/school_judge_info.js.map
