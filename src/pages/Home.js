import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.home}>
            <View style={styles.button}>
                <Button
                    title="病案打印"
                    onPress={() => navigation.navigate('Apply')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="人脸比对"
                    onPress={() => navigation.navigate('Face')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="图文识别"
                    onPress={() => navigation.navigate('P1')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingBottom: 16,
        height: 80,
        width: 80,
    },
})
