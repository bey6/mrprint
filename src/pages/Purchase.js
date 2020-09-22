import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {Button, List, ListItem, Left, Body} from 'native-base'
import style from '../styles/style'
import wxpay from '../sdk/wxpay'

export default function Purchase({navigation}) {
    const alipay = require('../assets/alipay.png')
    const wechat = require('../assets/wechat.png')
    // const height = Math.ceil(Dimensions.get('window').height) - 600 //183

    let styles = StyleSheet.create({
        label: {
            width: 150,
        },
        label_font: {
            fontSize: 20,
            fontWeight: '700',
        },
        content_font: {
            fontSize: 20,
        },
        row: {
            flexDirection: 'row',
            height: 40,
        },
    })
    const [checked, onChecked] = React.useState(
        require('../assets/checked.png')
    )

    return (
        <View>
            <List>
                <ListItem noIndent>
                    <Left>
                        <Text style={styles.label_font}>病案号</Text>
                    </Left>
                    <Body>
                        <Text style={styles.content_font}>2020091</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Left>
                        <Text style={styles.label_font}>姓名</Text>
                    </Left>
                    <Body>
                        <Text style={styles.content_font}>张珊</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Left>
                        <Text style={styles.label_font}>住院时间</Text>
                    </Left>
                    <Body>
                        <Text style={styles.content_font}>2020-01-01</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Left>
                        <Text style={styles.label_font}>打印页数</Text>
                    </Left>
                    <Body>
                        <Text style={styles.content_font}>23</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Left>
                        <Text style={styles.label_font}>打印费用</Text>
                    </Left>
                    <Body>
                        <Text style={styles.content_font}>22.1</Text>
                    </Body>
                </ListItem>
            </List>

            <View style={pageStyle.horizontal_line}>
                <Text style={pageStyle.horizontal_text}>选择付款方式</Text>
            </View>

            <View style={pageStyle.purchase_list}>
                <View style={pageStyle.purchase_list__icon}>
                    <Image source={wechat} />
                </View>
                <View style={pageStyle.purchase_list__content}>
                    <Text>微信支付</Text>
                </View>
                <View style={pageStyle.purchase_list__checked}>
                    <Image source={checked} />
                </View>
            </View>
            <View style={pageStyle.purchase_list}>
                <View style={pageStyle.purchase_list__icon}>
                    <Image source={alipay} />
                </View>
                <View style={pageStyle.purchase_list__content}>
                    <Text>支付宝支付</Text>
                </View>
                <View style={pageStyle.purchase_list__checked}>
                    <Image source={require('../assets/unchecked.png')} />
                </View>
            </View>

            <View style={style.button_container}>
                <Button onPress={() => doPurchase(navigation)} full>
                    <Text style={style.button__text}>确认支付</Text>
                </Button>
            </View>
        </View>
    )
}

function doPurchase(navigation) {
    console.log(wxpay)
    wxpay.isSupported().then((isSupported) => {
        if (isSupported) {
            console.log('??')
            // wxpay.pay()
        }
    })
    // navigation.navigate('Result')
}

const pageStyle = StyleSheet.create({
    horizontal_line: {
        borderBottomColor: '#e4e4e4',
        borderBottomWidth: 1,
        alignItems: 'center',
        margin: 30,
    },
    horizontal_text: {
        position: 'relative',
        bottom: -10,
        backgroundColor: '#f1f1f1',
    },
    purchase_list: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    purchase_list__icon: {
        width: 80,
        alignItems: 'flex-end',
        marginRight: 20,
    },
    purchase_list__content: {
        flex: 1,
    },
    purchase_list__checked: {
        width: 50,
    },
})
