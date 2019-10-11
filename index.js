var WQCLOUD = require('wqcloud');

var options = {
    /* 密钥,请进行替换,密钥申请地址 https://console.qcloud.com/capi  */
    SecretId: '',
    SecretKey: '',
    // 不填，每次请求都会自动重新生成
    // Signature: '',
    Nonce: parseInt(Math.random() * 999999, 10),
    Timestamp: parseInt(new Date() / 1000, 10)
};

var csec = WQCLOUD.V2.CSEC(options);

csec.ActivityAntiRush({
    accountType: '5',
    uid: 'D692D87319F2098C3877C3904B304706',
    associateAccount: '373909726',
    nickName: 'helloword',
    phoneNumber: '086+15166666666',
    emailAddress: 'hellword@qq.com',
    registerTime: '1440416972',
    registerIp: '121.14.96.121',
    passwordHash: 'f158abb2a762f7919846ee9bf8445c7f22a244c5',

    /* 行为信息 */
    userIp: '14.17.22.32',
    postTime: '1436664316',
    loginSource: '4',
    loginType: '3',
    rootId: 'sdsds234sd',
    referer: 'https://ui.ptlogin2.qq.com/cgi-bin/login',
    jumpUrl: 'https://ui.ptlogin2.qq.com/cgi-bin/hello',
    cookieHash: 'D692D87319F2098C3877C3904B304706',
    userAgent: 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36',
    xForwardedFor: '121.14.96.121',
    mouseClickCount: '10',
    keyboardClickCount: '34',

    /* 设备信息 */
    macAddress: '00-05-9A-3C-7A-00',
    vendorId: 'tencent.com',
    imei: '54654654646',
    appVersion: '10.0.1',

    /* 其他信息 */
    businessId: '1'
}).then((data) => {
    console.log(data);
});