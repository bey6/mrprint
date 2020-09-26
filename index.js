import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import wxpay from './src/sdk/wxpay'

wxpay.registerApp('wxa107cc3f0dc90742')
AppRegistry.registerComponent(appName, () => App)
