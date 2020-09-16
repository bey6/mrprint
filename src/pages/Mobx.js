import React from 'react'
import {View, Text} from 'react-native'
import {observer} from 'mobx-react'
import store from '../store/store'

@observer
export default class List extends React.Component {
    render() {
        return (
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: 'center',
                        fontWeight: '700',
                    }}>
                    {store.appStore.name}
                </Text>
                <Text>
                    上面的文字是存储在 mobx
                    中的，当应用的其他位置修改了该值，回到这里页面的内容也会改变
                </Text>
            </View>
        )
    }
}
