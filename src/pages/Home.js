import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableNativeFeedback,
} from 'react-native'
import style from '../styles/style'
export default function HomeScreen({navigation}) {
    const title = {
        fontSize: 50,
        margin: 30,
    }
    return (
        <View style={styles.home}>
            <Text style={title}>DEMO LIST</Text>
            <View style={style.button}>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Apply')}>
                    <Image
                        source={require('../assets/Printer.png')}
                        resizeMode="contain"
                    />
                </TouchableNativeFeedback>
            </View>
            <Text>PRINT</Text>
            <View style={style.button}>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Face')}>
                    <Image
                        source={require('../assets/Face.png')}
                        resizeMode="contain"
                    />
                </TouchableNativeFeedback>
            </View>
            <Text>FACE</Text>
            <View style={style.button}>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Ocr')}>
                    <Image
                        source={require('../assets/Ocr.png')}
                        resizeMode="contain"
                    />
                </TouchableNativeFeedback>
            </View>
            <Text>OCR</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        paddingBottom: 16,
        height: 80,
        width: 80,
    },
    row: {
        flexDirection: 'row',
        margin: 12,
    },
})
