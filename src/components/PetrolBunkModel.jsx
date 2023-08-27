import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import PetrolLevelIndicator from './PetrolLevelIndicator';
import Icon from 'react-native-vector-icons/FontAwesome';

const PetrolBunkModal = ({ isVisible, onDismiss, data }) => {

    const employee = {
        id: '1',
        name: 'John A',
        branchName : 'abc',
        age: '22',
        position: 'Manager',
        address: 'abc',
        email: 'john@example.com',
        phoneNumber: '123-456-7890',
      };


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
      <PetrolLevelIndicator level={data.level} />
      <View style={styles.row}>
            <Icon style={styles.icon} name="user" size={23} color="#000" />
            <Text style={styles.text}>{employee.name}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="user" size={23} color="#000" />
            <Text style={styles.text}>{data.branchName}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="map-marker" size={23} color="#000" />
            <Text style={styles.text}>{data.location}</Text>
          </View>
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
        backgroundColor: 'white',
        height: '50%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
    },
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
});

export default PetrolBunkModal;
