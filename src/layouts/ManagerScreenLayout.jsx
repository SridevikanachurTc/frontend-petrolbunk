import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavbarFooterManager from '../components/ManagerComponents/NavbarFooterManager';

const ManagerScreenLayout = ({ navigation, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <NavbarFooterManager navigation={navigation} />
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

export default ManagerScreenLayout;
