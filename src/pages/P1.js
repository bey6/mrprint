import React from 'react'
import {View, Image, Text, Button, TextInput, StyleSheet} from 'react-native'
import Styles from '../styles/style'

export default function StepTwo({navigation}) {
    const [value, onChangeText] = React.useState('')
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
                <TextInput style={Styles.TextInput} />
            </View>
            <View style={localStyles.inlineTextImage}>
                <Text style={Styles.Text}>身份证人像面</Text>
                <Image
                    style={localStyles.photo}
                    source={{
                        uri:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597257540139&di=70876025eed64c4ff327c46f55f460a7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F24%2F20170124185729_XKjME.thumb.700_0.jpeg',
                    }}
                />
            </View>
            <View style={localStyles.inlineTextImage}>
                <Text style={Styles.Text}>身份证国徽面</Text>
                <Image
                    style={localStyles.photo}
                    source={{
                        uri:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597257540139&di=70876025eed64c4ff327c46f55f460a7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F24%2F20170124185729_XKjME.thumb.700_0.jpeg',
                    }}
                />
            </View>
            <View style={localStyles.inlineTextImage}>
                <Text style={Styles.Text}>手持身份证人像面</Text>
                <Image
                    style={localStyles.photo}
                    source={{
                        uri:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597257540139&di=70876025eed64c4ff327c46f55f460a7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F24%2F20170124185729_XKjME.thumb.700_0.jpeg',
                    }}
                />
            </View>
            <View style={localStyles.button}>
                <Button title="下一步" onPress={() => onPress(navigation)} />
            </View>
        </View>
    )
}

function onPress(navigation) {
    navigation.navigate('P2')
}

const localStyles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: '#fafafa',
        position: 'relative',
    },
    button: {
        margin: 12,
    },
    photo: {
        borderRadius: 5,
        width: 200,
        height: 100,
    },
    inlineTextImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 12,
    },
})
