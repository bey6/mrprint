import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {Card, CardItem, Button, List, ListItem, Left, Body} from 'native-base'
import style from '../styles/style'

export default function Result({navigation}) {
    return (
        <View>
            <List>
                <ListItem noIndent>
                    <Left>
                        <Image source={require('../assets/success.png')} />
                        <Text
                            style={{
                                marginLeft: 30,
                                fontSize: 20,
                                color: '#2aa515',
                                fontWeight: '700',
                            }}>
                            支付成功
                        </Text>
                    </Left>
                </ListItem>
            </List>
            <Card>
                <CardItem style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: 50}}>￥23.00</Text>
                </CardItem>
            </Card>
            <Card>
                <List>
                    <ListItem noIndent>
                        <Left>
                            <Text>商品</Text>
                        </Left>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Text>支付测试</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>交易时间</Text>
                        </Left>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Text>2020-08-25 01:35:29</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>支付方式</Text>
                        </Left>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Text>零钱</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>交易单号</Text>
                        </Left>
                        <Body style={{alignItems: 'flex-end'}}>
                            <Text>40000812001201612051812884973</Text>
                        </Body>
                    </ListItem>
                </List>
            </Card>
            <View style={style.button_container}>
                <Button onPress={() => navigation.navigate('Home')} full>
                    <Text style={style.button__text}>回到首页</Text>
                </Button>
            </View>
        </View>
    )
}
