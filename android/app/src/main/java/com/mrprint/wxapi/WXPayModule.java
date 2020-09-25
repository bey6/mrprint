package com.mrprint.wxapi;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.tencent.mm.opensdk.modelpay.PayReq;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;

public class WxPayModule extends ReactContextBaseJavaModule {
    private IWXAPI api;
    static String APP_ID = "wxa107cc3f0dc90742";
    static Promise promise = null;

    WxPayModule(ReactApplicationContext reactContext) {
        super(reactContext);
        api = WXAPIFactory.createWXAPI(reactContext, null);
    }

    @Override
    public String getName() {
        return "WxPay";
    }

    @ReactMethod
    // public void registerApp(String APP_ID) { // 向微信注册
    public void registerApp() {
        WxPayModule.APP_ID = APP_ID;
        api.registerApp(APP_ID);
    }

    // @RequestMapping(value = "dop", method = RequestMethod.POST)
    // public JsonBack order(HttpServletRequest request, JsonBack jsonBack,
    // HttpServletResponse response,
    // String membertoken, int num, String id) throws Exception {

    // Member mem = MemberServiceImp.loginMemberMap.get("token");
    // if (mem.getMemberToken().equals(membertoken)) {
    // MemberLevel level = memberLevelService.getMemberLevelById(id);
    // int x = Integer.parseInt(level.getLevelMoney());
    // int cc = x * num * 100;// 微信以分为单位，如果数据库里面的价格没扩大100的话这里要乘以100
    // String total_fee = cc + "";
    // String body = ConstantUtil.BODY;
    // String mch_id = ConstantUtil.MCH_ID;
    // String currTime = PayCommonUtil.getCurrTime();
    // String strTime = currTime.substring(8, currTime.length());
    // String strRandom = PayCommonUtil.buildRandom(4) + "";
    // String nonce_str = strTime + strRandom;
    // String notify_url = ConstantUtil.NOTIFY_URL;// 回调地址 必须能直接访问 不是二级域名也可以
    // String out_trade_no = String.valueOf(UUID.next()); // 订单号
    // String timestamp = WXUtil.getTimeStamp();
    // SortedMap<Object, Object> packageParams = new TreeMap<Object, Object>();
    // packageParams.put("appid", ConstantUtil.APP_ID);
    // packageParams.put("mch_id", mch_id);
    // packageParams.put("nonce_str", nonce_str);
    // packageParams.put("body", body);// 商品描述
    // packageParams.put("out_trade_no", out_trade_no);// 商户订单号
    // packageParams.put("total_fee", total_fee);// 总金额
    // String addr = AddressUtils.getIpAddr(request);
    // packageParams.put("spbill_create_ip", addr);// 发起人IP地址
    // packageParams.put("notify_url", notify_url);// 回调地址
    // packageParams.put("trade_type", "APP");// 交易类型
    // packageParams.put("time_start", timestamp);
    // String sign = PayCommonUtil.createSign("UTF-8", packageParams,
    // ConstantUtil.APP_KEY);
    // packageParams.put("sign", sign);// 签名
    // String requestXML = PayCommonUtil.getRequestXml(packageParams);
    // String resXml = HttpUtil.postData(ConstantUtil.NOTIFY_URL, requestXML);
    // Map map = XMLUtil.doXMLParse(resXml);
    // String returnCode = (String) map.get("return_code");
    // String returnMsg = (String) map.get("return_msg");
    // logger.info("result:" + returnMsg);
    // if ("SUCCESS".equals(returnCode)) {
    // String resultCode = (String) map.get("result_code");
    // String prepay_id = (String) map.get("prepay_id");
    // String noncestr = (String) map.get("nonce_str");
    // if ("SUCCESS".equals(resultCode)) {
    // System.out.println("获取prepay_id成功" + prepay_id);//
    // 必须获取到这个prepay_id才算微信认可了你的第一次签名
    // // 这里写预下单业务逻辑
    // SortedMap<Object, Object> packageParam = new TreeMap<Object, Object>();
    // // ConfigUtil.commonParams(packageParams);
    // packageParam.put("appid", ConstantUtil.APP_ID);
    // packageParam.put("partnerid", mch_id);
    // packageParam.put("noncestr", noncestr);
    // packageParam.put("prepayid", prepay_id);// 商品描述
    // packageParam.put("package", "Sign=WXPay");// 商户订单号
    // packageParam.put("timestamp", timestamp);
    // String sign1 = PayCommonUtil.createSign("UTF-8", packageParam,
    // ConstantUtil.APP_KEY);// 这里是二次签名
    // // 前台要拿到去调起微信支付，如果这个错了的话会在前台报签名错误
    // map.put("partnerid", mch_id);
    // map.put("timestamp", timestamp);
    // map.put("package", "Sign=WXPay");
    // map.put("retcode", "0");
    // map.put("sign", sign1);
    // jsonBack = new JsonBack(true, "success", map);
    // }
    // }
    // } else {
    // jsonBack = new JsonBack(false, "token不一致", null);
    // }
    // return jsonBack;
    // }

    @ReactMethod
    public void pay(final ReadableMap order, Promise promise) {
        WxPayModule.promise = promise;
        PayReq request = new PayReq();
        // 注意此处order.getString中的key对应自己服务器返回的支付参数key
        request.appId = order.getString("appid");
        request.partnerId = order.getString("partnerId");
        request.prepayId = order.getString("prepayid");
        request.packageValue = "Sign=WXPay";
        request.nonceStr = order.getString("nonceStr");
        request.timeStamp = order.getInt("timestamp") + "";
        request.sign = order.getString("sign");
        api.sendReq(request);
    }

    @ReactMethod
    public void isSupported(Promise promise) { // 判断是否支持调用微信SDK
        boolean isSupported = api.isWXAppInstalled();
        // boolean isSupported = api.isWXAppInstalled()&& api.isWXAppSupportAPI();
        promise.resolve(isSupported);
    }

    public void order() {
        // 拼接字段，顺序不能变
        String A = "appid=你的appID" + "&body=jinshi" + "&mch_id=你的商户号" + "&nonce_str=" + nonce_str
                + "&notify_url=http://www.szgsip.com/" + "&out_trade_no=" + trade_no + "&spbill_create_ip=192.168.1.1"
                + "&total_fee=1" + "&trade_type=APP";
        String key = "你的密钥";
        String temp = A + "&key=" + key;
        // 生成sign
        String sign = MD5.getMessageDigest(temp.getBytes()).toUpperCase();

        xml.append("<xml>\n");
        xml.append("<appid>你的appID</appid>\n");
        xml.append("<body>jinshi</body>\n");
        xml.append("<mch_id>你的商户号</mch_id>\n");
        xml.append("<nonce_str>" + nonce_str + "</nonce_str>\n");
        xml.append("<notify_url>http://www.szgsip.com/</notify_url>\n");
        xml.append("<out_trade_no>" + trade_no + "</out_trade_no>\n");
        xml.append("<spbill_create_ip>192.168.1.1</spbill_create_ip>\n");
        xml.append("<total_fee>1</total_fee>\n");
        xml.append("<trade_type>APP</trade_type>\n");
        xml.append("<sign>" + sign + "</sign>\n");
        xml.append("</xml>");

        try {
            final byte[] xmlbyte = xml.toString().getBytes("UTF-8");
            System.out.println(xml);
            URL url = new URL("https://api.mch.weixin.qq.com/pay/unifiedorder");
            final HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setConnectTimeout(5000);
            conn.setDoOutput(true);// 允许输出
            conn.setDoInput(true);
            conn.setUseCaches(false);// 不使用缓存
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Connection", "Keep-Alive");// 维持长连接
            conn.setRequestProperty("Charset", "UTF-8");
            conn.setRequestProperty("Content-Length", String.valueOf(xmlbyte.length));
            conn.setRequestProperty("Content-Type", "text/xml; charset=UTF-8");
            conn.setRequestProperty("X-ClientType", "2");// 发送自定义的头信息
            conn.getOutputStream().write(xmlbyte);
            conn.getOutputStream().flush();
            conn.getOutputStream().close();

            if (conn.getResponseCode() != 200)
                throw new RuntimeException("请求url失败");

            InputStream is = conn.getInputStream();// 获取返回数据

            // 使用输出流来输出字符(可选)
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buf = new byte[1024];
            int len;
            while ((len = is.read(buf)) != -1) {
                out.write(buf, 0, len);
            }
            String string = out.toString("UTF-8");
            System.out.println(string);
            Log.e("  微信返回数据 ", " --- " + string);
            out.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
