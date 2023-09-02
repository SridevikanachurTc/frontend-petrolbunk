import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import AttendanceLog from '../StaffComponents/AttendanceLog';

const AttendanceLogModal = ({ isVisible, onDismiss, staffId }) => {
  return (
    <Modal
    isVisible={isVisible}
    onBackdropPress={onDismiss}
    animationIn="slideInUp"
    animationOut="slideOutDown"
    backdropTransitionInTiming={1000}
    backdropTransitionOutTiming={500}
    style={styles.modal}
  >
      <View style={styles.container}>
        <AttendanceLog staffId={staffId}/>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgb(238, 242, 251)',
        height: '60%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
    },
      text: {
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
        color:'#001F3F',
      }
});

export default AttendanceLogModal;
