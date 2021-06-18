import React from 'react';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ISSLocationScreen from './screens/ISS';
import MetriorideScreen from './screens/Metrioride';
import UpdateScreen from './screens/Update';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name = 'Home' component={HomeScreen}/>
      <Stack.Screen name = 'ISSLocation' component={ISSLocationScreen}/>
      <Stack.Screen name = 'Metrioride' component={MetriorideScreen}/>
      <Stack.Screen name = 'Update' component={UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

