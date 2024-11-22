/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from './LogInScreen';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import DishDetailsScreen from './DishDetailsScreen';
import EditMenuScreen from './EditMenuScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="DishDetail" component={DishDetailsScreen} />    
        <Stack.Screen name="EditMenue" component={EditMenuScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>   
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
