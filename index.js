/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Global from './src/common/Constants';

AppRegistry.registerComponent(appName, () => App);
