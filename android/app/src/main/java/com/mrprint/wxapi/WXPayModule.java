package com.mrprint.wxapi;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.tencent.mm.opensdk.modelpay.PayReq;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.math.BigInteger;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

public class WxPayModule extends ReactContextBaseJavaModule {
    private IWXAPI api;
    static String APP_ID = "wxa107cc3f0dc90742";
    static Promise promise = null;
    static String MCH_ID = "1602203076";

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
    public void registerApp(String APP_ID) {
        // WxPayModule.APP_ID = APP_ID;
        api.registerApp(APP_ID);
    }

    private String MD5(String plainText) {
        byte[] secretBytes = null;
        try {
            secretBytes = MessageDigest.getInstance("MD5").digest(plainText.getBytes());
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("没有这个md5算法！");
        }
        String md5code = new BigInteger(1, secretBytes).toString(16);
        for (int i = 0; i < 32 - md5code.length(); i++) {
            md5code = "0" + md5code;
        }
        return md5code;
    }

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

    private String genNonce() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    // private String pickupOrderPayload(Stirng tradeType) {
    // Map<String, String> map = new LinkedHashMap<>();
    // map.put("appid", "wx2c3865766f57ccb0");// 微信支付分配的公众账号ID（企业号corpid即为此appId）
    // map.put("attach", "支付测试");// 附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用。
    // map.put("body", "JSAPI支付测试");// 商品简单描述，该字段请按照规范传递
    // map.put("mch_id", "1344819501");// 微信支付分配的商户号
    // map.put("nonce_str", genNonce());// 随机字符串，长度要求在32位以内。推荐随机数生成算法
    // // 1add1a30ac87aa2db72f57a2375d8fec
    // map.put("notify_url", "http://wxpay.wxutil.com/pub_v2/pay/notify.v2.php");//
    // 异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。
    // // map.put("openid", "oUpF8uMuAJO_M2pxb1Q9zNjWeS6o");//
    // //
    // trade_type=JSAPI时（即公众号支付），此参数必传，此参数为微信用户在商户对应appid下的唯一标识https://pay.weixin.qq.com/wiki/doc/api/wap.php?chapter=4_4
    // // 获取的地址
    // map.put("out_trade_no", genNonce());// 商户系统内部订单号，要求32个字符内、且在同一个商户号下唯一
    // map.put("spbill_create_ip", "127.0.0.1");//
    // APP和网页支付提交用户端ip，Native支付填调用微信支付API的机器IP
    // map.put("total_fee", "100");// 订单总金额，单位为分
    // map.put("trade_type", tradeType);// 取值如下：JSAPI，NATIVE，APP，MWEB等

    // String sign = getSign(map);
    // map.put("sign", sign);// 通过签名算法计算得出的签名值

    // String xmlstring = toXml(map);
    // return xmlstring;
    // }

    private String getPayload() {
        String nonce_str = genNonce();
        String trade_no = genNonce();
        // 拼接字段，顺序不能变
        String A = "appid=" + APP_ID + "&body=bey" + "&mch_id=" + MCH_ID + "&nonce_str=" + nonce_str
                + "&notify_url=http://www.szgsip.com/" + "&out_trade_no=" + trade_no + "&spbill_create_ip=192.168.1.1"
                + "&total_fee=1" + "&trade_type=APP";
        String key = "123456"; // 这个可能是交易密码
        String temp = A + "&key=" + key;
        // 生成sign
        String sign = MD5(temp).toUpperCase();
        StringBuffer xml = new StringBuffer();

        xml.append("<xml>\n");
        xml.append("<appid>" + APP_ID /* APP_ID */ + "</appid>\n");
        xml.append("<body>病案邮寄打印费用</body>\n");
        xml.append("<mch_id>" + MCH_ID /* 商户ID */ + "</mch_id>\n");
        xml.append("<nonce_str>" + nonce_str + "</nonce_str>\n");
        // 异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。
        // xml.append("<notify_url>http://www.szgsip.com/</notify_url>\n");
        xml.append("<out_trade_no>" + trade_no + "</out_trade_no>\n"); // 商户系统内部订单号，要求32个字符内、且在同一个商户号下唯一
        xml.append("<spbill_create_ip>192.168.1.1</spbill_create_ip>\n");
        xml.append("<total_fee>1</total_fee>\n");
        xml.append("<trade_type>APP</trade_type>\n"); // 取值如下：JSAPI，NATIVE，APP，MWEB等
        xml.append("<sign>" + sign + "</sign>\n"); // 通过签名算法计算得出的签名值
        xml.append("</xml>");
        return xml.toString();
    }

    @ReactMethod
    public Integer order(Promise promise) {
        String payload = getPayload();
        try {
            URL url = new URL("https://api.mch.weixin.qq.com/pay/unifiedorder");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            // 设置允许输出
            conn.setDoOutput(true);
            conn.setDoInput(true);
            // 设置不用缓存
            conn.setUseCaches(false);
            // 设置传递方式
            conn.setRequestMethod("POST");
            // 设置维持长连接
            conn.setRequestProperty("Connection", "Keep-Alive");
            // 设置文件字符集:
            conn.setRequestProperty("Charset", "UTF-8");
            // 转换为字节数组
            byte[] data = payload.toString().getBytes("UTF-8");
            // 设置文件长度
            conn.setRequestProperty("Content-Length", String.valueOf(data.length));
            // 设置文件类型:
            conn.setRequestProperty("contentType", "text/xml");
            // 开始连接请求
            conn.connect();
            OutputStream out = conn.getOutputStream();
            // 写入请求的字符串
            out.write(data);
            out.flush();
            out.close();
            Android.Log.d()
            System.out.println(conn.getResponseCode());
            // 请求返回的状态
            if (conn.getResponseCode() == 200) {
                System.out.println(">>>>>>>>连接成功");
                // 请求返回的数据
                InputStream in = conn.getInputStream();
                String a = null;
                try {
                    byte[] data1 = new byte[in.available()];
                    in.read(data1);
                    // 转成字符串
                    a = new String(data1);
                    System.out.println(">>>>a>" + a);
                    return 186;
                    // return decodeXml(a);// 把返回的xml字符串转化成map对象
                } catch (Exception e1) {
                    e1.printStackTrace();
                    return 190;
                }
            } else {
                System.out.println("no++");
                return 195;
            }
        } catch (Exception e) {
            System.out.println(e);
            return 198;
        }
    }
}
