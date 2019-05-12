import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './screens/Main';
import Favorites from './screens/Favorites';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    Favorites,
  }),
);

export default Routes;
