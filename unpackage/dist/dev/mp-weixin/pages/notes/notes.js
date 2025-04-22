"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_request = require("../../utils/request.js");
if (!Array) {
  const _easycom_SearchBar2 = common_vendor.resolveComponent("SearchBar");
  const _easycom_NoteCard2 = common_vendor.resolveComponent("NoteCard");
  (_easycom_SearchBar2 + _easycom_NoteCard2)();
}
const _easycom_SearchBar = () => "../../components/SearchBar/SearchBar.js";
const _easycom_NoteCard = () => "../../components/NoteCard/NoteCard.js";
if (!Math) {
  (_easycom_SearchBar + _easycom_NoteCard)();
}
const _sfc_main = {
  __name: "notes",
  setup(__props) {
    const notes = common_vendor.ref([]);
    const id = common_vendor.index.getStorageSync("id");
    function toNotePosting() {
      common_vendor.index.navigateTo({
        url: `/pages/notePosting/notePosting`
      });
    }
    function to_note_info(id2) {
      common_vendor.index.navigateTo({
        url: `/pages/note_info/note_info?id=${id2}`
      });
    }
    const getNotes = async () => {
      let res = await utils_request.request({
        url: "/note/get_all",
        data: {
          id
        }
      });
      if (res.code == 200) {
        notes.value = res.data;
      }
    };
    common_vendor.onLoad((options) => {
      getNotes();
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_vendor.o(toNotePosting),
        c: common_vendor.f(notes.value, (note, k0, i0) => {
          return {
            a: common_vendor.o(($event) => to_note_info(note.id)),
            b: "cc7fb8d7-1-" + i0,
            c: common_vendor.p({
              imageUrl: note.images[0],
              title: note.title,
              content: note.content,
              author: note.username,
              avatarUrl: note.avatarUrl,
              like: note.isliked,
              likes: note.likes
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cc7fb8d7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/notes/notes.js.map
