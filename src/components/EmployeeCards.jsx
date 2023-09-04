import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';

const EmployeeCards = ({employee, onPress}) => {
  const avatars = [
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar1.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar2.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar3..jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar4.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar5.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar6.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar7.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar8.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar9.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar10.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar11.jpg'),
  ];
// console.log(employee.profilePic);
  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(employee)}>
      <View style={styles.avatarName}>
      <Image source={employee && employee.profilePic ? { uri: employee.profilePic } : randomAvatar} style={styles.avatarImage} />
        <Text style={styles.cardName}>{employee.name}</Text>
      </View>
      <View>
        <Text style={styles.cardText}>{employee.address}</Text>
      </View>
    </TouchableOpacity> 
  );
};

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 4,
    padding: 16,
    // marginLeft: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: 370,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardName: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 10,
    paddingRight: 5,
    fontWeight: 'bold',
    fontSize: 18
  },
  cardText: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 10,
    paddingRight: 5,
    fontWeight: '600',
    fontSize: 18,
    flexShrink: 1,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 70,
    zIndex: 1,
  },
  avatarName: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
});

export default EmployeeCards;
