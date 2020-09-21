import React from 'react'
import {
    View,
    StyleSheet,
    FlatList,
    TouchableNativeFeedback,
    Dimensions,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import {Container, Content, ListItem, Text, Body, Button} from 'native-base'
import style from '../styles/style'
import store from '../store/store'

const Item = ({item, onPress}) => (
    <TouchableNativeFeedback onPress={() => onPress(item)}>
        <View style={styles.view__list__item}>
            <View style={styles.view__list__item__idx}>
                <Text style={styles.view__list__item__idx__text}>
                    {item.id}
                </Text>
            </View>
            <View style={[styles.column, styles.pdl_20]}>
                <View style={styles.row}>
                    <Text
                        style={[
                            styles.view__list__item__label,
                            styles.fontSize,
                        ]}>
                        病案号
                    </Text>
                    <Text
                        style={[
                            styles.view__list__item__content,
                            styles.fontSize,
                        ]}>
                        {item.mrid}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text
                        style={[
                            styles.view__list__item__label,
                            styles.fontSize,
                        ]}>
                        姓名
                    </Text>
                    <Text
                        style={[
                            styles.view__list__item__content,
                            styles.fontSize,
                        ]}>
                        {item.name}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text
                        style={[
                            styles.view__list__item__label,
                            styles.fontSize,
                        ]}>
                        住院时间
                    </Text>
                    <Text
                        style={[
                            styles.view__list__item__content,
                            styles.fontSize,
                        ]}>
                        {item.indate}
                    </Text>
                </View>
            </View>
            <View style={{justifyContent: 'center'}}>
                <CheckBox checked={item.checked} />
            </View>
        </View>
    </TouchableNativeFeedback>
)

const Separator = () => <View style={styles.separator} />

class SelectScreen extends React.Component {
    render() {
        const {navigation} = this.props
        const height = Math.ceil(Dimensions.get('window').height) - 230
        const view__list = {
            margin: 12,
            height: height,
        }

        function onPress(e) {
            let list = JSON.parse(JSON.stringify(store.appStore.mrlist))
            let obj = list.find((d) => d.id === e.id)
            obj.checked = !obj.checked
        }

        return (
            <Container>
                <Content>
                    {store.appStore.mrlist
                        .sort((x, y) => x.indate.localeCompare(y.indate))
                        .map((item, idx) => (
                            <ListItem>
                                <Body>
                                    <Text>
                                        {idx + 1}. {item.indate} -{' '}
                                        {item.diagnosis}
                                    </Text>
                                </Body>
                                <CheckBox checked={true} />
                            </ListItem>
                        ))}
                    <Button
                        full
                        style={style.button}
                        onPress={() => navigation.navigate('Purchase')}>
                        <Text style={style.button__text}>下一步</Text>
                    </Button>
                </Content>
            </Container>
            // <View style={styles.pdt_20}>
            //     <View style={style.row_center}>
            //         <Text style={styles.fontSize}>
            //             为您找到以下可以打印病案：
            //         </Text>
            //     </View>
            //     <View style={view__list}>
            //         <FlatList
            //             data={store.appStore.mrlist}
            //             renderItem={({item}) =>
            //                 Item({item: item, onPress: onPress})
            //             }
            //             ItemSeparatorComponent={Separator}
            //         />
            //     </View>
            //     <View style={style.button_container}>
            //         <Button
            //             onPress={() => navigation.navigate('Purchase')}
            //             full>
            //             <Text style={style.button__text}>下一步</Text>
            //         </Button>
            //     </View>
            // </View>
        )
    }
}

export default SelectScreen

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },

    fontSize: {
        fontSize: 20,
    },

    view__list__item: {
        flexDirection: 'row',
    },
    view__list__item__idx: {
        backgroundColor: '#3F51B5',
        width: 80,
        height: 80,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view__list__item__idx__text: {
        fontSize: 40,
        color: '#fff',
    },
    view__list__item__label: {
        width: 100,
        fontWeight: '700',
    },
    view__list__item__content: {
        width: 100,
    },
    separator: {
        margin: 20,
        borderBottomWidth: 1,
        borderColor: '#a2a2a2',
    },
    pdt_20: {
        paddingTop: 20,
    },
    pdb_20: {
        paddingBottom: 20,
    },
    pdl_20: {
        paddingLeft: 20,
    },
})
