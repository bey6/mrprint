import React from 'react'
import {
    View,
    StyleSheet,
    FlatList,
    TouchableNativeFeedback,
    Dimensions,
} from 'react-native'
import {Button, Text, CheckBox} from 'native-base'
import style from '../styles/style'

const DATA = [
    {
        id: '1',
        mrid: '2020082',
        name: '马斯',
        indate: '2020-01-30',
    },
    {
        id: '2',
        mrid: '2020832',
        name: '关协',
        indate: '2020-05-01',
    },
    {
        id: '3',
        mrid: '2020103',
        name: '康熙',
        indate: '2020-08-14',
    },
    {
        id: '4',
        mrid: '2020103',
        name: '康熙',
        indate: '2020-08-14',
    },
    {
        id: '5',
        mrid: '2020103',
        name: '康熙',
        indate: '2020-08-14',
    },
    {
        id: '6',
        mrid: '2020103',
        name: '康熙',
        indate: '2020-08-14',
    },
    {
        id: '7',
        mrid: '2020103',
        name: '康熙',
        indate: '2020-08-14',
    },
]

const Item = ({item, onPress}) => (
    <TouchableNativeFeedback onPress={onPress}>
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
            {/* <View>
                <CheckBox checked={item.checked} />
            </View> */}
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
    return (
        <View style={styles.pdt_20}>
            <View style={style.row_center}>
                <Text style={styles.fontSize}>为您找到以下可以打印病案：</Text>
            </View>
            <View style={view__list}>
                <FlatList
                    data={DATA}
                    renderItem={Item}
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
