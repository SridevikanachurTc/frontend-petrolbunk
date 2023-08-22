import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavbarFooterStaff from '../components/StaffComponents/NavbarFooterStaff';

const StaffScreenLayout = ({ navigation, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <NavbarFooterStaff navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StaffScreenLayout;
