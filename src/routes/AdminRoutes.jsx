// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import Login from '../pages/Login';
// import AdminHome from '../pages/Admin/AdminHome';
// import PetrolBunkA from '../pages/Admin/PetrolBunkA';
// import AddBranch from '../pages/Admin/AddBranch';
// import EmployeeList from '../pages/Admin/EmployeeList';
// import ProfileAdmin from '../pages/Admin/ProfileAdmin';

// const Stack = createStackNavigator();

// function AdminRoutes() {
//   return (
//     <Stack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName="Login">
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="AdminHome" component={AdminHome} />
//       <Stack.Screen name="PetrolBunkA" component={PetrolBunkA} />
//       <Stack.Screen name="AddBranch" component={AddBranch} />
//       <Stack.Screen name="EmployeeList" component={EmployeeList} />
//       <Stack.Screen name="ProfileAdmin" component={ProfileAdmin} />
//     </Stack.Navigator>
//   );
// }

// export default AdminRoutes;



import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AdminHome from '../pages/Admin/AdminHome';
import PetrolBunkA from '../pages/Admin/PetrolBunkA';
import AddBranch from '../pages/Admin/AddBranch';
import EmployeeList from '../pages/Admin/EmployeeList';
import ProfileAdmin from '../pages/Admin/ProfileAdmin';

const Tab = createBottomTabNavigator();

function AdminRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // <-- This hides the header
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;

        //   if (route.name === 'AdminHome') {
        //     iconName = 'home';
        //   } else if (route.name === 'PetrolBunkA') {
        //     iconName = 'local-gas-station';
        //   } else if (route.name === 'AddBranch') {
        //     iconName = 'add-circle';
        //   } else if (route.name === 'EmployeeList') {
        //     iconName = 'list';
        //   } else if (route.name === 'ProfileAdmin') {
        //     iconName = 'account-circle';
        //   }

        //   return <Icon name={iconName} size={size} color={color} />;
        // },
      })}
      tabBar={() => null} // This hides the default tab bar


      // tabBarOptions is debrecated
      // tabBarOptions={{
      //   activeTintColor: 'white',
      //   inactiveTintColor: 'gray',
      //   style: {
      //     backgroundColor: '#000',
      //   },
      //   visible: false,
      // }}
    >
      <Tab.Screen name="AdminHome" component={AdminHome} />
      <Tab.Screen name="PetrolBunkA" component={PetrolBunkA} />
      <Tab.Screen name="AddBranch" component={AddBranch} />
      <Tab.Screen name="EmployeeList" component={EmployeeList} />
      <Tab.Screen name="ProfileAdmin" component={ProfileAdmin} />
    </Tab.Navigator>
  );
}

export default AdminRoutes;
