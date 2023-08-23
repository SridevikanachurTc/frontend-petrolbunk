import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import LoginRoutes from './src/routes/LoginRoutes';

enableScreens();

function App() {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  );
}

export default App;
