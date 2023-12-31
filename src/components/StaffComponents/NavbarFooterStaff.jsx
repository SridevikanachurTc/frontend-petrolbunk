import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing Material Icons

const NavbarFooterStaff = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('StaffHome')}>
        <Icon name="home" size={30} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FuelInventory')}>
        <Icon name="local-gas-station" size={30} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('StaffProfile')}>
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
  },
});

export default NavbarFooterStaff;
