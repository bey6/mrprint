import React from 'react'
import {
    View,
    StyleSheet,
    FlatList,
    TouchableNativeFeedback,
    Dimensions,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import {Button, Text} from 'native-base'
import style from '../styles/style'

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

export default function SelectScreen({navigation}) {
    const height = Math.ceil(Dimensions.get('window').height) - 230
    const view__list = {
        margin: 12,
        height: height,
    }
    const [DATA, onDataChange] = React.useState([
        {
            id: '1',
            mrid: '2020082',
            name: '马斯',
            indate: '2020-01-30',
            checked: false,
        },
        {
            id: '2',
            mrid: '2020832',
            name: '关协',
            indate: '2020-05-01',
            checked: false,
        },
        {
            id: '3',
            mrid: '2020103',
            name: '康熙',
            indate: '2020-08-14',
            checked: false,
        },
        {
            id: '4',
            mrid: '2020138',
            name: '庚含文',
            indate: '2020-01-30',
            checked: false,
        },
        {
            id: '5',
            mrid: '2020831',
            name: '永清婉',
            indate: '2020-07-10',
            checked: false,
        },
        {
            id: '6',
            mrid: '2020981',
            name: '荤兰娜',
            indate: '2020-03-24',
            checked: false,
        },
        {
            id: '7',
            mrid: '2020582',
            name: '巧欣笑',
            indate: '2020-08-24',
            checked: false,
        },
    ])

    function onPress(e) {
        let list = JSON.parse(JSON.stringify(DATA))
        let obj = list.find((d) => d.id === e.id)
        obj.checked = !obj.checked
        onDataChange(list)
    }

    return (
        <View style={styles.pdt_20}>
            <View style={style.row_center}>
                <Text style={styles.fontSize}>为您找到以下可以打印病案：</Text>
            </View>
            <View style={view__list}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) =>
                        Item({item: item, onPress: onPress})
                    }
                    ItemSeparatorComponent={Separator}
                />
            </View>
            <View style={style.button_container}>
                <Button onPress={() => navigation.navigate('Purchase')} full>
                    <Text style={style.button__text}>下一步</Text>
                </Button>
            </View>
        </View>
    )
}

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
