# MRPRINT

## 配置信息

APPID: wxa107cc3f0dc90742
商户号码: 1602203076
支付密码: 883fc22ea84a491fa74756e7ff0c46e7

## 路由

参考 [React Navigation](https://reactnavigation.org/)

navigation.navigate('Details') 不会多次移动到一个页面
navigation.push('Details') 可以多次移动到同一个页面

### Android 左右滑动设置

主要是 screenOptions

```javascript
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack'

// ···

<Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
        cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
    }}>
```

## PERMISSION

给应用添加 Permission 的方法：

`android/app/src/main/AndroidManifest.xml`

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.mrprint">

    <uses-permission android:name="android.permission.INTERNET" />

    <!-- 这里 -->
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

</manifest>
```

添加完了之后需要重新启动项目。

## NativeBase

组件库使用的是 Native Base。

```bash
npm install native-base --save
```

### ICON 无法显示问题

解决办法

1 添加依赖

编辑 `android/app/build.gradle` 在文件的最后添加如下代码:

```bash
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

2 手动 copy

将 `node_modules/react-native-vector-icon/Fonts` 内部的字体全选，复制到 `android/app/src/main/assets/fonts/` 目录下

3 删除编译文件

删除 `android/app/build` 文件。

4 重新编译项目

## app:installDebug 报错问题

通常是手机没有正常连接导致的，可以尝试确保连接正常后，删掉已有的测试应用后再次启动。

## MobX

[官网](https://mobx.js.org/README.html)

MobX 是由 Mendix、Coinbase 和 Facebook 开源的状态管理框架，它通过响应式函数编程来实现状态的存储和管理

MobX 框架的 3 个重要概念：

-   State：状态，即驱动应用的数据，包括服务器端获取的数据以及本地组件状态的数据
-   Derivation：任何源自状态并且不会再有任何进一步的相互作用的东西就是衍生。衍生包括多种类型：用户界面、衍生数据和后端集成。MobX 支持两种类型的衍生，即 Computedvalues 和 Reactions。其中，计算属性是使用纯函数从当前可观察状态中衍生出的值，Reactions 则是根据状态改变触发的结果
-   Action 是一段可以改变状态的代码，可以是用户事件、后端推送数据和预定事件等。MobX 框架支持显式地定义动作，以便使代码的组织结构更加清晰

MobX 4 个装饰器：

-   @observable 标签用于标识要监控的数据
-   @observer 标签用于标识数据变化时要更新的组件类
-   @action 标签用于标识数据改变时的方法
-   @inject 标签则用于在组件类中注入 Store 对象，以便组件从 state 中获取 Store 对象数据

```bash
yarn add mobx --save-dev
yarn add mobx-react --save-dev
# 装饰器需要用到 babel
yarn add @babel/plugin-proposal-decorators --save-dev
```

### 装饰器报错问题

#### Parsing error: Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.

> [babel-eslint/issues#662](https://github.com/babel/babel-eslint/issues/662)

大概就是在 .eslintrc.js 中，添加如下段落：

```js
parserOptions: {
    ecmaFeatures: {
        legacyDecorators: true,
    },
},
```

## Android 打包 APK

(RN 中文网)[https://reactnative.cn/docs/signed-apk-android]

## 微信支付认证

1. 在[微信开发者平台](https://open.weixin.qq.com/) > 管理中心 > 移动应用，创建移动应用
2. 在[微信开发者平台](https://open.weixin.qq.com/) > 账户中心 > 开发者资质认证，申请成为开发者（需要 300 元）
3. 在[微信商户平台](https://pay.weixin.qq.com/index.php/core/home/login?return_url=%2F)注册成为微信商户
4. 在[微信商户平台](https://pay.weixin.qq.com/index.php/core/home/login?return_url=%2F)申请开通支付接口
5. 在[微信商户平台](https://pay.weixin.qq.com/index.php/core/home/login?return_url=%2F) > 产品中心，绑定 APP

## 微信支付集成

1. 添加 gradle 依赖

打开 build.gradle 文件，在 dependencies 中添加依赖：

```bash
dependencies {
    implementation 'com.tencent.mm.opensdk:wechat-sdk-android-without-mta:+'
}
```

应用包名：是在 APP 项目配置文件 AndroidManifest.xml 中声明的 package 值，例如 DEMO 中的 package="net.sourceforge.simcpux"。

本应用包名：`com.mrprint`

应用签名：根据项目的应用包名和编译使用的 keystore，可由签名工具生成一个 32 位的 md5 串，在调试的手机上安装签名工具后，运行可生成应用签名串，如图 8.9 所示，绿色串即应用签名。签名工具下载地址https://open.weixin.qq.com/zh_CN/htmledition/res/dev/download/sdk/Gen_Signature_Android.apk

## Bmob

## > Task :app:installDebug FAILED

```bash
> Task :app:installDebug FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.
Use '--warning-mode all' to show the individual deprecation warnings.
See https://docs.gradle.org/6.2/userguide/command_line_interface.html#sec:command_line_warnings
161 actionable tasks: 2 executed, 159 up-to-date
Unable to install D:\Projects\mrprint\android\app\build\outputs\apk\debug\app-debug.apk
com.android.ddmlib.InstallException: INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.mrprint signatures do not match previously installed version; ignoring!
```

解决方案：`卸载手机上已经安装过的本应用`

一般遇到这种问题都是因为之前手机上安装的版本与目前要运行的版本有冲突导致的。

## ReferenceError: Can't find variable: localStorage

```bash
npm i localStorage
```

## Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state

这个问题其实解决办法非常的令人无奈···就是 render 函数里面不要写多余的代码，应该像下面这样：

```js
render() {
    // 这里不要写额外的代码
    return (
        // jsx
    )
    // 这里也不要写额外的代码
}
```

微信支付之前需要首先调用`统一下单接口`
