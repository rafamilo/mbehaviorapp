import RegisterOne from './RegisterOne';
import RegisterTwo from './RegisterTwo';
import RegisterThree from './RegisterThree';
import RegisterFour from './RegisterFour';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    RegisterOne,
    RegisterTwo,
    RegisterThree,
    RegisterFour
  }, {
    defaultNavigationOptions: {
      header: null,
    },
  })
);

export default Routes;