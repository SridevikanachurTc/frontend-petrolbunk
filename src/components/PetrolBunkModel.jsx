import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Modal from 'react-native-modal';
import PetrolLevelIndicator from './PetrolLevelIndicator';
import Icon from 'react-native-vector-icons/FontAwesome';
import BranchApi from '../services/BranchApi';
import UserApi from '../services/UserApi';

const PetrolBunkModal = ({ isVisible, onDismiss, data }) => {

  const [manager, setManager] = useState(null);

  useEffect(() => {
    if (isVisible && data) {
      fetchManager(data.id);
    }
  }, [isVisible, data]);

  const fetchManager = async (branchId) => {
    try {
      const managerData = await BranchApi.getManagerForBranch(branchId);
      setManager(managerData);
    } catch (error) {
      console.error("Failed to fetch manager details:", error);
    }
  };

  const handleDeleteManager = () => {
    Alert.alert(
      "Delete Manager", // title
      "Are you sure you want to delete this manager?", // message
      [
        {
          text: "Cancel",
          onPress: () => console.log("Delete Cancelled"),
          style: "cancel"
        },
        { text: "OK", onPress: async () => {
            try {
              console.log(data.id);
              await UserApi.deleteManager(data.id);
              setManager(null); // reset the manager state
            } catch (error) {
              console.error("Failed to delete manager:", error);
            }
          } 
        }
      ],
      { cancelable: false }
    );
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
      <PetrolLevelIndicator level={data.fuelInventory.percentage} fuelLevel={data.fuelInventory.inventoryLevel} maxCapacity={data.fuelInventory.inventoryCapacity} />
      {/* <PetrolLevelIndicator /> */}
          <View style={styles.rowShift}>
            <View style={styles.rowShifts}>
            <Icon style={styles.icon} name="user" size={23} color="#001F3F" />
            <Text style={styles.text}>{manager ? manager.name : ''}</Text>
          </View>
          {manager && manager.name && (
            <Icon
              style={styles.icon}
              name="trash"
              size={26}
              color="#001F3F"
              onPress={handleDeleteManager}
            />
          )}
        </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="building" size={23} color="#001F3F" />
            <Text style={styles.text}>{data.name}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="map-marker" size={23} color="#001F3F" />
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
        backgroundColor: 'rgb(238, 242, 251)',
        height: '50%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      rowShift: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      rowShifts: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      icon: {
        padding: 10,
        paddingLeft: 15,
      },
      text: {
        color: '#001F3F',
        padding: 10,
        paddingBottom: 5,
        margin: 5,
        fontWeight: 'bold',
        fontSize: 18,
      },
});

export default PetrolBunkModal;
