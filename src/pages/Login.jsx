// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   Alert,
//   TouchableOpacity,
//   Text,
//   ImageBackground,
//   Image,
// } from 'react-native';
// import { login } from '../services/loginApi';

// const Login = ({ navigation }) => {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {

//       const { token, user } = await login(username, password);

//     localStorage.setItem('userData', JSON.stringify(user));
//     localStorage.setItem('token', token);

//     navigation.navigate('LoginRoutes', { userData: user });

//     } catch (error) {
//       Alert.alert('Error', error.message || 'Something went wrong');
//     }
//   };

//   return (
//     <ImageBackground
//       style={styles.background}
//       source={{
//         uri: 'https://images.unsplash.com/photo-1601805877164-165d7b78889f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldHJvbCUyMHB1bXB8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
//       }}>
//       <View style={styles.container}>
//         {/* <Image
//                 style={styles.logo}
//                 source={{ uri: 'https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456' }}
//             /> */}

//         <View style={styles.loginContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Username"
//             value={username}
//             onChangeText={setUsername}
//             placeholderTextColor={'#fff'}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={true}
//             placeholderTextColor={'#fff'}
//           />
//           {/* <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('StaffRoutes', {screen: 'StaffHome'})}> */}
//           {/* <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ManagerRoutes', {screen: 'ManagerHome'})}> */}
//           <TouchableOpacity style={styles.button}  onPress={handleLogin}>
//             <Text style={styles.buttonText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     opacity: 0.5,
//   },
//   container: {
//     justifyContent: 'center',
//     padding: 20,
//     margin: 30,
//     backgroundColor: '#000',
//     height: 300,
//   },
//   loginContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     width: 250,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 8,
//   },
//   button: {
//     backgroundColor: '#001F3F',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     width: 250,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default Login;

import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginApi from '../services/loginApi';
import {useNavigation} from '@react-navigation/native';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const logo = require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/appLogo.jpg')

  const background = require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/petrol_edited.jpg');

  const handleLogin = async () => {
    try {
      const {token, user} = await loginApi.login(username, password);

      // Storing the user data and token in AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(user));
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('userRole', user.role);
      if(user.bunk?.id){
      await AsyncStorage.setItem('bunkId', user.bunk.id.toString());
      }
//       const bunkIdString = await AsyncStorage.getItem('bunkId');
// const bunkId = Number(bunkIdString);


      setUsername('');
        setPassword('');

    //  navigation.navigate('LoginRoutes');
     
      if (user.role === 'ADMIN') {
        navigation.navigate('AdminRoutes', { screen: 'AdminHome' });
    } else if (user.role === 'BRANCH_MANAGER') {
      navigation.navigate('ManagerRoutes', { screen: 'ManagerHome' });
    } else if (user.role === 'STAFF') {
        navigation.navigate('StaffRoutes', { screen: 'StaffHome' });
    } else {
        // Handle other cases or default case
        Alert.alert('Error', 'User role not recognized');
    }
    
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message || 'Something went wrong');
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={background}>
        <View>
        <Image source={logo} style={styles.logo} />
      <View style={styles.container}>
        
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={'#001F3F'}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholderTextColor={'#001F3F'}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    width: 600,
    height: '100%'
    // height: 800
  },
  container: {
    justifyContent: 'center',
    padding: 20,
    margin: 30,
    backgroundColor: '#fff',
    height: 250,
    position: 'absolute',
    top: 60,
    opacity: 0.5,
    borderRadius : 20
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 60,
    position: 'absolute',
    zIndex: 1,
    top: 38,
    left: 120
    // left: '20%'
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#001F3F',
    height: 40,
    width: 250,
    borderColor: '#001F3F',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#001F3F',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: 250,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Login;
