// In AppStack.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from '../../screens/dashBoard';
import ProductList from '../../screens/productList';
import Cart from '../../screens/cart';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true
        }}>
        <Stack.Screen name="dashboard" component={DashBoard} />
        <Stack.Screen name="plist" component={ProductList} />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
