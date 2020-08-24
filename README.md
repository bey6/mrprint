# MRPRINT

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
npm i mobx --save
npm i mobx-react --save
# 装饰器需要用到 babel
npm i @babel/plugin-proposal-decorators --save-dev
```

## Android 打包 APK

(RN 中文网)[https://reactnative.cn/docs/signed-apk-android]
