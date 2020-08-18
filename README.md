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
