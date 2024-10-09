import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationRef} from './NavigationService';
import Home from '../screens/home/Home';
import Details from '../screens/details/Details';
import Wishlist from '../screens/wishlist/Wishlist';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="movieDetails" component={Details} screenOptions={{headerShown: false}}/>
        <Stack.Screen name="wishlist" component={Wishlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
