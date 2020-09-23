import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    TouchableNativeFeedback,
    Dimensions,
} from 'react-native'
import {
    Button,
    Container,
    Text,
    Content,
    Item,
    Form,
    Input,
    Label,
} from 'native-base'
import styles from '../styles/style'
import ImagePicker from 'react-native-image-picker'
import store from '../store/store.js'
import {observer} from 'mobx-react'

@observer
class ApplyScreen extends React.Component {
    onPress(navigation) {
        navigation.navigate('Select')
    }
    getPicture(fields) {
        ImagePicker.showImagePicker(
            {
                title: '选择图片',
                customButtons: [],
                takePhotoButtonTitle: '拍照',
                chooseFromLibraryButtonTitle: '从相册选择',
                cancelButtonTitle: '取消',
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
            },
            (response) => {
                console.log('Response = ', response)
                if (response.didCancel) {
                    console.log('User cancelled image picker')
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error)
                } else if (response.customButton) {
                    console.log(
                        'User tapped custom button: ',
                        response.customButton
                    )
                } else {
                    const source = {uri: response.uri}
                    console.log('++++', fields)
                    this.setState({
                        [fields]: source,
                    })
                }
            }
        )
    }
    setValue(f, v) {
        console.log(f, v)
    }
    render() {
        const {navigation} = this.props
        this.state = {
            face: require('../assets/身份证正面.png'),
            emblem: require('../assets/身份证国徽面.png'),
            person: require('../assets/手持身份证.png'),
        }
        const height = Math.ceil(Dimensions.get('window').height) - 160
        const page_height = height
        const localStyles = StyleSheet.create({
            buttonView: {
                padding: 12,
            },
            button: {
                margin: 12,
                height: 30,
            },
            photo: {
                borderRadius: 5,
                width: '100%',
            },
            inlineTextImage: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 12,
            },
        })

        return (
            <Container
                style={{
                    height: page_height,
                }}>
                <Content>
                    <Form>
                        <Item floatingLabel style={{marginTop: 12}}>
                            <Label>姓名</Label>
                            <Input
                                value={store.appStore.name}
                                onChange={
                                    (text) => console.log(text)
                                    // store.appStore.setValue('name', text)
                                }
                            />
                        </Item>
                        <Item floatingLabel style={{marginTop: 12}}>
                            <Label>身份证号码</Label>
                            <Input
                                value={store.appStore.idno}
                                onChangeText={
                                    (text) => this.setValue('idno', text)
                                    // store.appStore.setValue('idno', text)
                                }
                            />
                        </Item>

                        <View style={localStyles.inlineTextImage}>
                            <TouchableNativeFeedback
                                onPress={() => this.getPicture('face')}>
                                <Image
                                    style={localStyles.photo}
                                    resizeMode="contain"
                                    source={this.state.face}
                                />
                            </TouchableNativeFeedback>
                        </View>
                        <View style={localStyles.inlineTextImage}>
                            <TouchableNativeFeedback
                                onPress={() => this.getPicture('emblem')}>
                                <Image
                                    style={localStyles.photo}
                                    resizeMode="contain"
                                    source={this.state.emblem}
                                />
                            </TouchableNativeFeedback>
                        </View>
                        <View style={localStyles.inlineTextImage}>
                            <TouchableNativeFeedback
                                onPress={() => this.getPicture('person')}>
                                <Image
                                    style={localStyles.photo}
                                    resizeMode="contain"
                                    source={this.state.person}
                                />
                            </TouchableNativeFeedback>
                        </View>
                    </Form>
                    <Button
                        full
                        onPress={() => this.onPress(navigation)}
                        style={styles.button}>
                        <Text style={styles.button__text}>下一步</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
export default ApplyScreen
