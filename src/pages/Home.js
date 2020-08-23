import React from 'react'
import {Text, TouchableNativeFeedback} from 'react-native'
import {Container, Right, List, Left, Icon, ListItem} from 'native-base'

export default function HomeScreen({navigation}) {
    return (
        <Container>
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
