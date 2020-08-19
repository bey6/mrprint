import React from 'react'
import {
    View,
    Image,
    Button,
    StyleSheet,
    TouchableNativeFeedback,
} from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.home}>
            {/* <View style={styles.button}>
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
                    onPress={() => navigation.navigate('Ocr')}
                />
            </View> */}
            <View style={styles.row}>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Apply')}>
                    <View style={styles.customButton}>
                        <Image
                            source={require('../assets/Printer.png')}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.row}>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Face')}>
                    <View style={styles.customButton}>
                        <Image
                            source={require('../assets/Face.png')}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.row}>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Ocr')}>
                    <View style={styles.customButton}>
                        <Image
                            source={require('../assets/Ocr.png')}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableNativeFeedback>
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
    row: {
        flexDirection: 'row',
        margin: 12,
    },
    customButton: {
        flex: 0.8,
        height: 150,
        padding: 12,
        borderRadius: 3,
        shadowColor: '#000',
        elevation: 5,
        alignItems: 'center',
        backgroundColor: '#369',
    },
})
