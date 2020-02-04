import RegisterOne from './RegisterOne';
import RegisterTwo from './RegisterTwo';
import RegisterThree from './RegisterThree';
import RegisterFour from './RegisterFour';
import RegisterFive from './RegisterFive';
import RegisterSix from './RegisterSix';
import RegisterSeven from './RegisterSeven';
import RegisterEight from './RegisterEight';
import RegisterNine from './RegisterNine';
import RegisterTen from './RegisterTen';
import RegisterEleven from './RegisterEleven';
import RegisterTwelve from './RegisterTwelve';
import RegisterThirteen from './RegisterThirteen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    RegisterOne,
    RegisterTwo,
    RegisterThree,
    RegisterFour,
    RegisterFive,
    RegisterSix,
    RegisterSeven,
    RegisterEight,
    RegisterNine,
    RegisterTen,
    RegisterEleven,
    RegisterTwelve,
    RegisterThirteen,
  }, {
    defaultNavigationOptions: {
      header: null,
    },
  })
);

export default Routes;