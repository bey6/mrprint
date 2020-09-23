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
    public void registerApp(String APP_ID) { // 向微信注册
        WxPayModule.APP_ID = APP_ID;
        api.registerApp(APP_ID);
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
}
