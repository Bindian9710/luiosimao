
let CryptoJS = require("C:\\Users\\mayn\\node_modules\\crypto-js\\crypto-js.js");

function AES(raw_bg,encrybt_key) {
    let iv = '2801003954373300';
    let key = CryptoJS.enc.Utf8.parse(encrybt_key);
    let iv_utf8 = CryptoJS.enc.Utf8.parse(iv);
    return CryptoJS.AES.encrypt(raw_bg, key, {
        iv:iv_utf8,
        mode:CryptoJS.mode.CBC,
        padding:CryptoJS.pad.ZeroPadding
    }).toString()
}

console.log(CryptoJS.enc.Utf8.parse("0880076B18D7EE81"));