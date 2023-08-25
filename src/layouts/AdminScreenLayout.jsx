import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavbarFooter from '../components/AdminComponents/NavbarFooter';

const AdminScreenLayout = ({ navigation, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <NavbarFooter navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
  },
});

export default AdminScreenLayout;
