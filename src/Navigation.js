import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack'
import HomeScreen from './pages/Home'
import ApplyScreen from './pages/Apply'
import SelectScreen from './pages/Select'
import FaceScreen from './pages/Face'
import OcrScreen from './pages/Ocr'
import PurchaseScreen from './pages/Purchase'
import ResultScreen from './pages/Result'
import MobxScreen from './pages/Mobx'
import MobxModifierScreen from './pages/MobxModifier'

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: '选择功能',
                    }}
                />
                <Stack.Screen
                    name="Apply"
                    component={ApplyScreen}
                    options={{
                        title: '申请',
                    }}
                />
                <Stack.Screen
                    name="Select"
                    component={SelectScreen}
                    options={{
                        title: '打印病案选择',
                    }}
                />
                <Stack.Screen
                    name="Purchase"
                    component={PurchaseScreen}
                    options={{
                        title: '费用结算',
                    }}
                />
                <Stack.Screen
                    name="Result"
                    component={ResultScreen}
                    options={{
                        title: '支付成功',
                    }}
                />
                <Stack.Screen
                    name="Face"
                    component={FaceScreen}
                    options={{
                        title: '人脸比对',
                    }}
                />
                <Stack.Screen
                    name="Ocr"
                    component={OcrScreen}
                    options={{
                        title: 'OCR 识别',
                    }}
                />
                <Stack.Screen
                    name="Mobx"
                    component={MobxScreen}
                    options={{
                        title: 'Mobx 测试',
                    }}
                />
                <Stack.Screen
                    name="MobxModifier"
                    component={MobxModifierScreen}
                    options={{
                        title: 'MobxModifier',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
