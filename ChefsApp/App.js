/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-native/navigaton';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from './LogInScreen';
import MenuScreen from './MenuScreen';
import DishDetailsScreen from './DishDetailsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="DishDetail" component={DishDetailsScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
