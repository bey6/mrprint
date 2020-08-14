import React from 'react'
import {Image, View, Text, Button, TextInput, StyleSheet} from 'react-native'
import Styles from './src/styles/style'
import ImagePicker from 'react-native-image-picker'

const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
}

ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response)

    if (response.didCancel) {
        console.log('User cancelled image picker')
    } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
    } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
    } else {
        const source = {uri: response.uri}

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
            avatarSource: source,
        })
    }
})

const App = () => {
    const [value, onChangeText] = React.useState('')
    return (
        <View style={localStyles.page}>
            <TextInput
                placeholder="姓名"
                style={Styles.TextInput}
                value={value}
                onChangeText={(t) => onChangeText(t)}
            />
            <TextInput style={Styles.TextInput} placeholder="身份证号" />
            <Text style={Styles.Text}>身份证人像面</Text>
            <Image src />
            <Text style={Styles.Text}>身份证国徽面</Text>
            <Text style={Styles.Text}>手持身份证人像面</Text>
            <Button
                style={localStyles.btnNext}
                title="下一步"
                onPress={onPress}
            />
            {/* <Image
                style={localStyles.avatar}
                source={{
                    uri:
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597257540139&di=70876025eed64c4ff327c46f55f460a7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F24%2F20170124185729_XKjME.thumb.700_0.jpeg',
                }}
            /> */}
        </View>
    )
}

function onPress() {
    alert('abc')
}

const localStyles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: '#fafafa',
        position: 'relative',
    },
    btnNext: {
        position: 'absolute',
        width: 100,
        height: 100,
        bottom: 10,
    },
    avatar: {
        borderRadius: 50,
        width: 100,
        height: 100,
    },
})

export default App
