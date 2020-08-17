import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack'
import HomeScreen from './pages/Home'
import P1Screen from './pages/P1'
import P2Screen from './pages/P2'

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
                    name="P1"
                    component={P1Screen}
                    options={{
                        title: '病案打印',
                    }}
                />
                <Stack.Screen
                    name="P2"
                    component={P2Screen}
                    options={{
                        title: '人脸识别',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
