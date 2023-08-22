import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
// import { login } from './src/services/loginApi';
const Login = ({ navigation }) => {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
//   const handleLogin = async () => {
    //     try {
    //       const data = await login(username, password);
    //       if (data.success) {
        // Alert.alert('Logged in', 'Successfully logged in!', [
        //     { text: 'OK', onPress={ navigation.navigate('Home');}}
        //   ]);
    //       } else {
    //         Alert.alert('Error', data.message || 'Invalid username or password');
    //       }
    //     } catch (error) {
    // Alert.alert('Error', 'Something went wrong');
    //     }
//   };

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: 'https://images.unsplash.com/photo-1601805877164-165d7b78889f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldHJvbCUyMHB1bXB8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      }}>
      <View style={styles.container}>
        {/* <Image 
                style={styles.logo}
                source={{ uri: 'https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456' }}
            /> */}

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            // value={username}
            // onChangeText={setUsername}
            placeholderTextColor={'#fff'}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            // value={password}
            // onChangeText={setPassword}
            // secureTextEntry={true}
            placeholderTextColor={'#fff'}
          />
          {/* <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('StaffRoutes', {screen: 'StaffHome'})}> */}
          {/* <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ManagerRoutes', {screen: 'ManagerHome'})}> */}
          <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('AdminRoutes', {screen: 'AdminHome'})}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.5,
  },
  container: {
    justifyContent: 'center',
    padding: 20,
    margin: 30,
    backgroundColor: '#fff',
    height: 300,
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: '#007AFF',
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
