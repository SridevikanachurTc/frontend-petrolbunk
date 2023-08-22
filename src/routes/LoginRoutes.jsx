import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import AdminRoutes from './AdminRoutes';
import { enableScreens } from 'react-native-screens';
import ManagerRoutes from './ManagerRoutes';
import StaffRoutes from './StaffRoutes';

enableScreens();
const Stack = createStackNavigator();

function LoginRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}
      />  
    {/* here conditional rendering can be done based on role */}
      <Stack.Screen 
        name="AdminRoutes" 
        component={AdminRoutes} 
        options={{ headerShown: false }} 
      />
      {/* <Stack.Screen 
        name="ManagerRoutes" 
        component={ManagerRoutes} 
        options={{ headerShown: false }} 
      /> */}
      {/* <Stack.Screen 
        name="StaffRoutes" 
        component={StaffRoutes} 
        options={{ headerShown: false }} 
      /> */}
    </Stack.Navigator>
  );
}

export default LoginRoutes;
