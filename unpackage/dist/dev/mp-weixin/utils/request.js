"use strict";
const common_vendor = require("../common/vendor.js");
const baseurl = "http://localhost:8000";
function request(config = {}) {
  let {
    url,
    method = "GET",
    data,
    header = {
      "Content-Type": "application/json"
      // 默认 JSON 请求头
    }
  } = config;
  url = baseurl + url;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      data,
      header,
      method,
      success: (res) => {
        if (res.data.code == 200) {
          resolve(res.data);
        } else if (res.data.code === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.msg
          });
          reject(res.data);
        } else {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.request = request;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/request.js.map
