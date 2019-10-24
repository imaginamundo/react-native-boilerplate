import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import routes from './routes.js';

const AppNavigator = createStackNavigator(routes, {
    initialRouteName: 'home'
});

export default createAppContainer(AppNavigator);