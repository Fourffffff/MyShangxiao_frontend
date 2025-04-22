"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_request = require("../../utils/request.js");
if (!Array) {
  const _easycom_NoteCard2 = common_vendor.resolveComponent("NoteCard");
  _easycom_NoteCard2();
}
const _easycom_NoteCard = () => "../../components/NoteCard/NoteCard.js";
if (!Math) {
  _easycom_NoteCard();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let id = common_vendor.index.getStorageSync("id");
    const notes = common_vendor.ref([]);
    if (id == "")
      id = 1;
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
      if (id == "")
        id = 1;
      getNotes();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(4, (item, index, i0) => {
          return {
            a: index
          };
        }),
        b: common_assets._imports_0,
        c: common_vendor.f(8, (i, k0, i0) => {
          return {};
        }),
        d: common_assets._imports_0,
        e: common_vendor.f(notes.value, (note, k0, i0) => {
          return {
            a: common_vendor.o(($event) => to_note_info(note.id)),
            b: "1cf27b2a-0-" + i0,
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
