import React from 'react'
import {View, Text} from 'react-native'
import {observer} from 'mobx-react'
import {Container, Header, Content, Item, Input, Icon} from 'native-base'
import store from '../store/store.js'

@observer
export default class List extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Item>
                        <Icon active name="home" />
                        <Input
                            placeholder="Icon Textbox"
                            value={store.appStore.name}
                            onChangeText={(text) =>
                                store.appStore.setName(text)
                            }
                        />
                    </Item>
                </Content>
                <View>
                    <Text>{store.appStore.name}</Text>
                </View>
            </Container>
        )
    }
}
