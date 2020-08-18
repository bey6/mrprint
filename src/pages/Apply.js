import React from 'react'
import {
    Button,
    View,
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import Styles from '../styles/style'

import ImagePicker from 'react-native-image-picker'

export default function ApplyScreen({navigation}) {
    const [value, onChangeText] = React.useState('')
    const [face, onChangeFaceImg] = React.useState(
        require('../assets/身份证正面.png')
    )
    const [emblem, onChangeEmblemImg] = React.useState(
        require('../assets/身份证国徽面.png')
    )
    const [person, onChangePersonImg] = React.useState(
        require('../assets/手持身份证.png')
    )

    return (
        <View style={localStyles.page}>
            <View style={localStyles.inlineTextImage}>
                <Text style={Styles.Text}>姓名</Text>
                <TextInput
                    style={Styles.TextInput}
                    value={value}
                    onChangeText={(t) => onChangeText(t)}
                />
            </View>
            <View style={localStyles.inlineTextImage}>
                <Text style={Styles.Text}>身份证号</Text>
                <TextInput style={Styles.TextInput} keyboardType="numeric" />
            </View>
            <View style={localStyles.inlineTextImage}>
                <Text style={Styles.Text}>身份证人像面</Text>
                <TouchableOpacity onPress={() => getPicture(onChangeFaceImg)}>
                    <Image
                        style={localStyles.photo}
                        resizeMode="contain"
                        source={face}
                    />
                </TouchableOpacity>
            </View>
            <View style={localStyles.inlineTextImage}>
                <Text style={Styles.Text}>身份证国徽面</Text>
                <TouchableOpacity onPress={() => getPicture(onChangeEmblemImg)}>
                    <Image
                        style={localStyles.photo}
                        resizeMode="contain"
                        source={emblem}
                    />
                </TouchableOpacity>
            </View>
            <View style={localStyles.inlineTextImage}>
                <Text style={Styles.Text}>手持身份证人像面</Text>
                <TouchableOpacity onPress={() => getPicture(onChangePersonImg)}>
                    <Image
                        style={localStyles.photo}
                        resizeMode="contain"
                        source={person}
                    />
                </TouchableOpacity>
            </View>
            <View style={localStyles.buttonView}>
                <Button title="下一步" onPress={() => onPress(navigation)} />
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: '#fafafa',
        position: 'relative',
    },
    buttonView: {
        padding: 12,
        // borderRadius: 3,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#369',
        // shadowColor: '#ddd',
    },
    button: {
        margin: 12,
        height: 30,
    },
    photo: {
        borderRadius: 5,
        width: 256,
        height: 128,
    },
    inlineTextImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 12,
    },
})

function onPress(navigation) {
    navigation.navigate('Select')
}

function getPicture(setState) {
    ImagePicker.showImagePicker(
        {
            title: '选择图片',
            customButtons: [],
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '从相册选择',
            cancelButtonTitle: '取消',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        },
        (response) => {
            console.log('Response = ', response)
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log(
                    'User tapped custom button: ',
                    response.customButton
                )
            } else {
                const source = {uri: response.uri}
                setState(source)
            }
        }
    )
}
