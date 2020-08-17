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
