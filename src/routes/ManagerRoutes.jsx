import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManagerHome from '../pages/Manager/ManagerHome';
import FuelOrder from '../pages/Manager/FuelOrder';
import AddStaff from '../pages/Manager/AddStaff';
import StaffEmployeeList from '../pages/Manager/StaffEmployeeList';
import ManagerProfile from '../pages/Manager/ManagerProfile';

const Tab = createBottomTabNavigator();

function ManagerRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // <-- This hides the header
      })}
      tabBar={() => null} // This hides the default tab bar

    >
      <Tab.Screen name="ManagerHome" component={ManagerHome} />
      <Tab.Screen name="FuelOrder" component={FuelOrder} />
      <Tab.Screen name="AddStaff" component={AddStaff} />
      <Tab.Screen name="StaffEmployeeList" component={StaffEmployeeList} />
      <Tab.Screen name="ManagerProfile" component={ManagerProfile} />
    </Tab.Navigator>
  );
}

export default ManagerRoutes;
