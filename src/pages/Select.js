import React from 'react'
import {
    Container,
    Content,
    ListItem,
    Text,
    Body,
    Button,
    CheckBox,
} from 'native-base'
import style from '../styles/style'
import store from '../store/store'
import {observer} from 'mobx-react'

@observer
class SelectScreen extends React.Component {
    /**
     * Check box checked change event.
     * @param { object } item The medical record user selected
     */
    onCheckedChange(item) {
        let newArr = store.appStore.mrlist.slice()
        let idx = newArr.findIndex((mr) => mr.key === item.key)
        if (idx !== -1) {
            newArr[idx].checked = !newArr[idx].checked
            newArr.splice(idx, 1)
            store.appStore.setMrlist(newArr)
        }
    }

    onNext(navigation) {
        // navigation.navigate('Purchase')
        console.log(store.appStore.selectedMr)
    }

    render() {
        const {navigation} = this.props
        // const height = Math.ceil(Dimensions.get('window').height) - 230

        return (
            <Container>
                <Content>
                    {store.appStore.sortedMrList.map((item, idx) => (
                        <ListItem key={item.key}>
                            <Body for={`id_${item.key}`}>
                                <Text>
                                    {idx + 1}. {item.indate} - {item.diagnosis}
                                </Text>
                            </Body>
                            <CheckBox
                                id={`id_${item.key}`}
                                checked={item.checked}
                                onPress={() => this.onCheckedChange(item)}
                            />
                        </ListItem>
                    ))}
                    <Button
                        full
                        style={style.button}
                        onPress={() => this.onNext(navigation)}>
                        <Text style={style.button__text}>下一步</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default SelectScreen
