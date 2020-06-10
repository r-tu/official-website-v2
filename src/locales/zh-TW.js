import json from '@/locales/lang/zh-TW.json'
export default () => {
  return new Promise((resolve) => {
    // 未來這裡可透過Promise讀取外部的json檔案
    resolve({
      ...json
    })
  })
}
