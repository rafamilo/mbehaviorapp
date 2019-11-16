import Login from './src/Login';
import RegisterRouter from './src/RegisterRouter';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        headerBackTitle: 'Login'
      },
    },
    RegisterRouter
  })
);

export default Routes;