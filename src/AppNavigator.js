import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import TagDetailScreen from './Screens/TagDetailScreen';
import WriteNdefScreen from './Screens/WriteNdefScreen';
import DeepLinkingScreen from './Screens/DeepLinkingScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tag" component={TagDetailScreen} />
        <Stack.Screen name="Write" component={WriteNdefScreen} />
        <Stack.Screen name="DeepLinking" component={DeepLinkingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
