"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
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
  __name: "note_info",
  setup(__props) {
    const imageUrls = common_vendor.ref(["/common/images/test.jpg", "/common/images/test.jpg"]);
    const title = common_vendor.ref("title");
    const content = common_vendor.ref("contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent");
    const time = common_vendor.ref(/* @__PURE__ */ new Date());
    const likeCount = common_vendor.ref(10);
    const favCount = common_vendor.ref(10);
    const isliked = common_vendor.ref(false);
    isliked.value = true;
    const isFav = common_vendor.ref(false);
    isFav.value = true;
    const id = common_vendor.index.getStorageSync("id");
    const comments = common_vendor.ref([]);
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
    function preview() {
      common_vendor.index.previewImage({
        current: imageUrls.value[0],
        urls: imageUrls.value
      });
    }
    const get_note = async (noteId) => {
      let res = await utils_request.request({
        url: "/note/get_one",
        data: {
          userId: id,
          noteId
        }
      });
      common_vendor.index.__f__("log", "at pages/note_info/note_info.vue:116", res.data.comments);
      title.value = res.data.note.title || "默认标题";
      content.value = res.data.note.content || "默认内容";
      likeCount.value = res.data.note.likeCount || 0;
      favCount.value = res.data.note.favCount || 0;
      isliked.value = res.data.isliked;
      isFav.value = res.data.isfav;
      comments.value = res.data.comments || [];
    };
    common_vendor.onLoad((options) => {
      const noteId = options.id;
      get_note(noteId);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(imageUrls.value, (imageUrl, k0, i0) => {
          return {
            a: imageUrl
          };
        }),
        b: common_vendor.o(preview),
        c: common_vendor.t(title.value),
        d: common_vendor.t(content.value),
        e: common_vendor.t(time.value),
        f: common_vendor.p({
          type: isliked.value ? "hand-up-filled" : "hand-up",
          color: "#91bf6f"
        }),
        g: common_vendor.t(likeCount.value),
        h: common_vendor.p({
          type: isFav.value ? "star-filled" : "star",
          color: "#91bf6f"
        }),
        i: common_vendor.t(favCount.value),
        j: common_vendor.f(comments.value, (comment, k0, i0) => {
          return {
            a: "f60b877d-2-" + i0,
            b: common_vendor.p({
              username: comment.username,
              avatarUrl: comment.avatarUrl,
              time: comment.time,
              comment: comment.comment,
              likeCount: comment.likeCount,
              islike: comment.islike
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f60b877d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/note_info/note_info.js.map
