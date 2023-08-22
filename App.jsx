// import React from 'react';
// import { enableScreens } from 'react-native-screens';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './src/pages/Login';
// import AdminHome from './src/pages/AdminHome';
// import PetrolBunkA from './src/components/Admin/PetrolBunkA';


// enableScreens();
// const Stack = createStackNavigator();


// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
//       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//       <Stack.Screen name="AdminHome" component={AdminHome} />
//       <Stack.Screen name="PetrolBunkA" component={PetrolBunkA} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
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
