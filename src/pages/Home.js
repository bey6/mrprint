import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableNativeFeedback,
    StyleSheet,
} from 'react-native'
import {Container, Right, List, Left, Icon, ListItem} from 'native-base'

export default function HomeScreen({navigation}) {
    return (
        <Container>
            <View style={style.logo_area}>
                <Image source={require('../assets/logo.png')} />
            </View>
            <List>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Apply')}>
                    <ListItem selected>
                        <Left>
                            <Text>病案打印</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Face')}>
                    <ListItem selected>
                        <Left>
                            <Text>人像比对</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Ocr')}>
                    <ListItem selected>
                        <Left>
                            <Text>OCR</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Ocr')}>
                    <ListItem selected>
                        <Left>
                            <Text>OCR</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </TouchableNativeFeedback>
            </List>
        </Container>
    )
}

const style = StyleSheet.create({
    logo_area: {
        backgroundColor: '#3F51B5',
        alignItems: 'center',
        padding: 40,
    },
})
