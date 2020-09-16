import React from 'react'
import {Container, Header, Content, Item, Input, Icon} from 'native-base'

export default class List extends React.Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Item>
                        <Icon active name="home" />
                        <Input placeholder="Icon Textbox" />
                    </Item>
                    <Item>
                        <Input placeholder="Icon Alignment in Textbox" />
                        <Icon active name="swap" />
                    </Item>
                </Content>
            </Container>
        )
    }
}
