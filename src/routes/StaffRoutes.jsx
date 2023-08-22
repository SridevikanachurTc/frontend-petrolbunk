import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StaffHome from '../pages/Staff/StaffHome';
import FuelInventory from '../pages/Staff/FuelInventory';
import StaffProfile from '../pages/Staff/StaffProfile';

const Tab = createBottomTabNavigator();

function StaffRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // <-- This hides the header
      })}
      tabBar={() => null} // This hides the default tab bar

    >
      <Tab.Screen name="StaffHome" component={StaffHome} />
      <Tab.Screen name="FuelInventory" component={FuelInventory} />
      <Tab.Screen name="StaffProfile" component={StaffProfile} />
    </Tab.Navigator>
  );
}

export default StaffRoutes;
