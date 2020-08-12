import React from 'react'
import {View, Text, Button, TextInput, Pressable, Alert} from 'react-native'
import Styles from './src/styles/style'

const App = () => {
    const [value, onChangeText] = React.useState('')
    return (
        <View>
            <Text style={Styles.Text}>姓名</Text>
            <TextInput
                style={Styles.TextInput}
                value={value}
                onChangeText={(t) => onChangeText(t)}
            />
            <Text style={Styles.Text}>身份证号</Text>
            <TextInput style={Styles.TextInput} />
            <Text style={Styles.Text}>身份证人像面</Text>
            <Text style={Styles.Text}>身份证国徽面</Text>
            <Text style={Styles.Text}>手持身份证人像面</Text>
            <Pressable onPress={onPress}>
                <Text>下一步</Text>
            </Pressable>
            <Button title="下一步" />
        </View>
    )
}

function onPress() {
    alert('abc')
}

export default App
