import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
// // import { fadeIn } from 'react-navigation-transitions';

import LoginScreen from "../screens/Login";
import MainScreen from "../screens/Main";
import AuthLoadingScreen from "../screens/AuthLoading";

// Auth Stack
const AuthStack = createStackNavigator(
  {
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    // transitionConfig: () => fadeIn(),
  }
);

// Main App Stack
const AppStack = createStackNavigator(
  {
    Main: MainScreen
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
    // transitionConfig: () => fadeIn(),
  }
);

export default AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none',
    // transitionConfig: () => fadeIn(),
  }
));