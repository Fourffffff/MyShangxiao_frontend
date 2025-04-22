"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_request = require("../../utils/request.js");
const _sfc_main = {
  __name: "notePosting",
  setup(__props) {
    const images = common_vendor.ref([]);
    const title = common_vendor.ref("");
    const content = common_vendor.ref("");
    const id = common_vendor.index.getStorageSync("id");
    function chooseImage() {
      common_vendor.index.chooseImage({
        count: 9,
        success: (res) => {
          images.value.push(...res.tempFilePaths);
        }
      });
    }
    const submit = async () => {
      if (!title.value || !content.value) {
        common_vendor.index.showToast({ title: "标题或内容不能为空", icon: "none" });
        return;
      }
      let uploadedImageUrls = [];
      for (const path of images.value) {
        try {
          const uploadRes = await new Promise((resolve, reject) => {
            common_vendor.index.uploadFile({
              url: "http://localhost:8000/note/upload_img",
              filePath: path,
              name: "file",
              success: resolve,
              fail: reject
            });
          });
          const result = JSON.parse(uploadRes.data);
          if (result.code === 200) {
            uploadedImageUrls.push(result.data);
          } else {
            common_vendor.index.showToast({ title: "图片上传失败", icon: "none" });
            return;
          }
        } catch (err) {
          common_vendor.index.__f__("error", "at pages/notePosting/notePosting.vue:71", "上传失败", err);
          common_vendor.index.showToast({ title: "网络错误", icon: "none" });
          return;
        }
      }
      let res = await utils_request.request({
        url: "/note/note_post",
        method: "POST",
        data: {
          title: title.value,
          content: content.value,
          id,
          images: uploadedImageUrls
          // 上传后的服务器图片URL
        }
      });
      if (res.code === 200) {
        common_vendor.index.showToast({ title: "发布成功", icon: "success" });
        title.value = "";
        content.value = "";
        images.value = [];
        common_vendor.index.switchTab({
          url: "/pages/notes/notes"
        });
      } else {
        common_vendor.index.showToast({ title: "发布失败", icon: "none" });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(images.value, (img, index, i0) => {
          return {
            a: img,
            b: index
          };
        }),
        b: common_vendor.o(chooseImage),
        c: title.value,
        d: common_vendor.o(($event) => title.value = $event.detail.value),
        e: content.value,
        f: common_vendor.o(($event) => content.value = $event.detail.value),
        g: common_vendor.o(submit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-248f1cda"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/notePosting/notePosting.js.map
