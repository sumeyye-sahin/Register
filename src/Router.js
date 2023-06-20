import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberDetailScreen from './pages/MemberDetailScreen';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="MemberSignScreen" component={MemberSign} />
        <Stack.Screen
          name="MemberDetailScreen"
          component={MemberDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
