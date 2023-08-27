import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({employee}) => {

  const avatars = [
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar1.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar2.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar3.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar4.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar5.jpg'),
  ];
  
  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
  

  return (
    <View>
      <Image
        source={require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/petrolbunk.jpg')}
        style={styles.image}
      />

      <Image
        source={randomAvatar}
        style={styles.avatarImage}
      />
      <View style={styles.container}>
        <ScrollView style={styles.textContainer}>
          <View style={styles.row}>
            <Icon style={styles.icon} name="user" size={23} color="#000" />
            <Text style={styles.text}>{employee.name}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="child" size={26} color="#000" />
            <Text style={styles.text}>{employee.age}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="briefcase" size={22} color="#000" />
            <Text style={styles.text}>{employee.position}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="envelope" size={22} color="#000" />
            <Text style={styles.text}>{employee.email}</Text>
          </View>
          <View style={styles.row}>
            <Icon
              style={styles.icon}
              name="phone-square"
              size={22}
              color="#000"
            />
            <Text style={styles.text}>{employee.phoneNumber}</Text>
          </View>
          <View style={styles.row}>
            <Icon
              style={styles.icon}
              name="map-marker"
              size={28}
              color="#000"
            />
            <Text style={styles.text}>{employee.address}</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.row}>
              <Icon
                style={styles.icon}
                name="unlock-alt"
                size={24}
                color="#000"
              />
              <Text style={styles.text}>Reset Password</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.row}>
              <Icon
                style={styles.icon}
                name="sign-out"
                size={24}
                color="#000"
              />
              <Text style={styles.text}>Logout</Text>
            </View>
          </TouchableOpacity>
          </ScrollView>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    paddingLeft: 15,
  },
  text: {
    color: '#000',
    padding: 10,
    paddingBottom: 5,
    margin: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  textContainer: {
    position: 'relative',
    top: '15%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: '100%',
    height: '60%',
    opacity: 0.5,
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 70,
    position: 'absolute',
    top: '35%',
    left: '33%',
    zIndex: 1,
  },
});

export default Profile;
