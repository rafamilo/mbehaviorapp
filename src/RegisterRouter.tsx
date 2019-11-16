import RegisterOne from './RegisterOne';
import RegisterTwo from './RegisterTwo';
import RegisterThree from './RegisterThree';
import RegisterFour from './RegisterFour';
import RegisterFive from './RegisterFive';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    RegisterOne,
    RegisterTwo,
    RegisterThree,
    RegisterFour,
    RegisterFive
  }, {
    defaultNavigationOptions: {
      header: null,
    },
  })
);

export default Routes;