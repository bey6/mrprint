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

## Android 打包 APK

(RN 中文网)[https://reactnative.cn/docs/signed-apk-android]
