import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing Material Icons

const NavbarFooterManager = ({navigation}) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('ManagerHome')}>
        <Icon name="home" size={30} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FuelOrder')}>
        <Icon name="shopping-cart" size={30} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddStaff')}>
        <Icon name="add-circle" size={30} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('StaffEmployeeList')}>
        <Icon name="list" size={37} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ManagerProfile')}>
        <Icon name="account-circle" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#001F3F',
    borderTopLeftRadius: 20,    // Add this line
    borderTopRightRadius: 20, 
    // position: 'absolute',
    // bottom: 0,
    // width: '100%'
  },
});

export default NavbarFooterManager;
