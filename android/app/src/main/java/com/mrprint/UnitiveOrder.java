package com.mrprint;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class UnitiveOrder {

    // /**
    // *
    // 这里说一下为什么用LinkedHashMap，没有用HashMap。因为HashMap存储兼*键值对是无序的，LinkedHashMap输出的顺序和输入的相同，在签名的时候，需要map中储存的顺序。
    // */
    // private String pickupOrderPayload() {
    // Map<String, String> map = new LinkedHashMap<>();
    // map.put("appid", "wxa107cc3f0dc90742");// 微信支付分配的公众账号ID（企业号corpid即为此appId）
    // map.put("attach", "支付测试");// 附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用。
    // map.put("body", "APP支付测试");// 商品简单描述，该字段请按照规范传递
    // map.put("mch_id", "1602203076");// 微信支付分配的商户号
    // map.put("nonce_str", genNonceStr());// 随机字符串，长度要求在32位以内。推荐随机数生成算法
    // map.put("out_trade_no", genOutTradNo());// 商户系统内部订单号，要求32个字符内、且在同一个商户号下唯一
    // map.put("spbill_create_ip", "127.0.0.1");//
    // APP和网页支付提交用户端ip，Native支付填调用微信支付API的机器IP
    // map.put("total_fee", "1");// 订单总金额，单位为分
    // map.put("trade_type", "APP");// 取值如下：JSAPI，NATIVE，APP，MWEB等

    // String sign = sign(map);
    // map.put("sign", sign);// 通过签名算法计算得出的签名值

    // String xmlstring = toXml(map);
    // return xmlstring;
    // }

    // /**
    // * 对 map 签名
    // *
    // * @param map
    // * @return md5 后的订单参数
    // */
    // private String sign(Map<String, String> map) {
    // StringBuilder sb = new StringBuilder();
    // for (Map.Entry<String, String> entry : map.entrySet()) {
    // sb.append(entry.getKey());
    // sb.append('=');
    // sb.append(entry.getValue());
    // sb.append('&');
    // }
    // // 拼接API密钥
    // sb.append("key=");
    // sb.append("UrS7zXfUTf5Pq7s8l0WpP7MvQyQRIhPN"); // API 密钥
    // System.out.println(">>>>>>signsb>" + sb.toString());
    // String packageSign =
    // MD5.getMessageDigest(sb.toString().getBytes()).toUpperCase(Locale.CHINA);
    // System.out.println(">>>>>>sign>" + packageSign);
    // return packageSign;
    // }

    // /**
    // * map to xml
    // */
    // private String map2XML(Map<String, String> map) {
    // StringBuilder sb = new StringBuilder();
    // sb.append("<xml>");
    // for (Map.Entry<String, String> entry : map.entrySet()) {
    // sb.append("<" + entry.getKey() + ">");
    // sb.append(entry.getValue());
    // sb.append("</" + entry.getKey() + ">");
    // }
    // sb.append("</xml>");
    // System.out.println(">>>>>>xml>" + sb.toString());
    // return sb.toString();
    // }

    // /**
    // * 统一下单接口
    // *
    // * @return
    // */
    // private Map<String, String> order() {
    // try {
    // // 创建url资源
    // URL url = new URL("https://api.mch.weixin.qq.com/pay/unifiedorder");// 统一下单接口
    // // 建立http连接
    // HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    // // 设置允许输出
    // conn.setDoOutput(true);
    // conn.setDoInput(true);
    // // 设置不用缓存
    // conn.setUseCaches(false);
    // // 设置传递方式
    // conn.setRequestMethod("POST");
    // // 设置维持长连接
    // conn.setRequestProperty("Connection", "Keep-Alive");
    // // 设置文件字符集:
    // conn.setRequestProperty("Charset", "UTF-8");
    // // 转换为字节数组
    // byte[] data = pickupOrderPayload().getBytes();
    // // 设置文件长度
    // conn.setRequestProperty("Content-Length", String.valueOf(data.length));
    // // 设置文件类型:
    // conn.setRequestProperty("contentType", "text/xml");
    // // 开始连接请求
    // conn.connect();
    // OutputStream out = conn.getOutputStream();
    // // 写入请求的字符串
    // out.write(data);
    // out.flush();
    // out.close();
    // System.out.println(conn.getResponseCode());
    // // 请求返回的状态
    // if (conn.getResponseCode() == 200) {
    // System.out.println(">>>>>>>>连接成功");
    // // 请求返回的数据
    // InputStream in = conn.getInputStream();
    // String a = null;
    // try {
    // byte[] data1 = new byte[in.available()];
    // in.read(data1);
    // // 转成字符串
    // a = new String(data1);
    // System.out.println(">>>>a>" + a);
    // return decodeXml(a);// 把返回的xml字符串转化成map对象
    // } catch (Exception e1) {
    // e1.printStackTrace();
    // return null;
    // }
    // } else {
    // System.out.println("no++");
    // return null;
    // }

    // } catch (Exception e) {
    // return null;
    // }
    // }

    // /**
    // * xml to map
    // *
    // * @param content
    // * @return
    // */
    // public Map<String, String> xml2Map(String content) {
    // try {
    // Map<String, String> xml = new HashMap<String, String>();
    // XmlPullParser parser = Xml.newPullParser();
    // parser.setInput(new StringReader(content));
    // int event = parser.getEventType();
    // while (event != XmlPullParser.END_DOCUMENT) {
    // String nodeName = parser.getName();
    // switch (event) {
    // case XmlPullParser.START_DOCUMENT:

    // break;
    // case XmlPullParser.START_TAG:

    // if ("xml".equals(nodeName) == false) {
    // // 实例化student对象
    // xml.put(nodeName, parser.nextText());
    // }
    // break;
    // case XmlPullParser.END_TAG:
    // break;
    // }
    // event = parser.next();
    // }
    // return xml;
    // } catch (Exception e) {
    // Log.e("orion-e--->", e.toString());
    // }
    // return null;
    // }

}
