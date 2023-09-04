import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login';
import AdminRoutes from './AdminRoutes';
import {enableScreens} from 'react-native-screens';
import ManagerRoutes from './ManagerRoutes';
import StaffRoutes from './StaffRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';

enableScreens();
const Stack = createStackNavigator();
function LoginRoutes() {
  const [userRole, setUserRole] = React.useState(null);

  React.useEffect(() => {
    const fetchUserRole = async () => {
      const storedRole = await AsyncStorage.getItem('userRole');
      setUserRole(storedRole);
    };
    fetchUserRole();
  }, []);


  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
          name="AdminRoutes"
          component={AdminRoutes}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="ManagerRoutes"
          component={ManagerRoutes}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="StaffRoutes"
          component={StaffRoutes}
          options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
}

export default LoginRoutes;
