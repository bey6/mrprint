import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
    },
    item__label: {
        flex: 100,
    },
    item__content: {
        flex: 1,
    },
})

export default function Purchase() {
    return (
        <View>
            <View>
                <View style={styles.item__label}>
                    <Text>病案号</Text>
                </View>
                <View style={styles.item__content}>
                    <Text>xxx</Text>
                </View>
            </View>
            <View>
                <View style={styles.item__label}>
                    <Text>姓名</Text>
                </View>
                <View style={styles.item__content}>
                    <Text>xxx</Text>
                </View>
            </View>
        </View>
    )
}
