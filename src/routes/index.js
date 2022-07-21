import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardsScreen from '../screens/CardsScreen';

const Stack = createNativeStackNavigator();
const initialStackOptions = {
  headerShown: false,
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CardsScreen"
        screenOptions={initialStackOptions}>
        <Stack.Screen name="CardsScreen" component={CardsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
