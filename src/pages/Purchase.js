import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {
    Container,
    Content,
    Button,
    List,
    ListItem,
    Left,
    Body,
} from 'native-base'
import style from '../styles/style'
import wxpay from '../sdk/wxpay'
import store from '../store/store'

const alipay = require('../assets/alipay.png')
const wechat = require('../assets/wechat.png')
// const height = Math.ceil(Dimensions.get('window').height) - 600 //183

const pageStyle = StyleSheet.create({
    section_name: {
        fontSize: 16,
    },
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

export default class Purchase extends React.Component {
    constructor() {
        super()
    }

    doPurchase() {
        wxpay
            .isSupported()
            .then((isSupported) => {
                if (isSupported) {
                    console.log('supported wechat pay.')
                    wxpay
                        .order()
                        .then((res) => {
                            this.props.navigation.navigate('Result')
                        })
                        .catch(() => console.log('err'))
                    // .pay()
                    // .then((res) => console.log(res))
                    // .catch((err) => console.log(err))
                }

                // {
                // appid: 'wxa107cc3f0dc90742',
                // partnerId: '1602203076', //
                // prepayid: '',
                // nonceStr: 'bey',
                // timestamp: new Date().getTime(),
                // sign: '20f46148b72d8e5e5ca23d37a4f41490',
                // }
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemHeader first>
                            <Text style={pageStyle.section_name}>
                                选择的信息
                            </Text>
                        </ListItem>
                        <ListItem noIndent>
                            <Left>
                                <Text>病案号</Text>
                            </Left>
                            <Body>
                                <Text>2020091</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>姓名</Text>
                            </Left>
                            <Body>
                                <Text>{store.appStore.name}</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>打印页数</Text>
                            </Left>
                            <Body>
                                <Text>
                                    {10 * store.appStore.selectedMr.length}
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>打印费用</Text>
                            </Left>
                            <Body>
                                <Text>
                                    {10 *
                                        store.appStore.selectedMr.length *
                                        0.5}
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem itemHeader>
                            <Text style={pageStyle.section_name}>付款方式</Text>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Image
                                    style={{
                                        paddingTop: 12,
                                    }}
                                    source={require('../assets/wxpaylogo.png')}
                                />
                                <Image
                                    style={{
                                        marginTop: 8,
                                    }}
                                    source={require('../assets/recommend.png')}
                                />
                            </Left>
                            <Body
                                style={{
                                    alignItems: 'flex-end',
                                }}>
                                <Image
                                    source={require('../assets/checked.png')}
                                />
                            </Body>
                        </ListItem>
                    </List>
                    <Button
                        full
                        style={style.button}
                        onPress={() => this.doPurchase()}>
                        <Text style={style.button__text}>确认支付</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
