import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ClockInOutApi from '../../services/ClockInOutApi';

const CARD_WIDTH = Dimensions.get('window').width / 1.05;

const ClockIn = ({ staffId, shift, image }) => {
  const [isClockInVisible, setIsClockInVisible] = useState(true);
 console.log('bunkId from ClockIn component',staffId); 
 const formatShiftText = (text) => {
    return text
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleToggle = async () => {
    try {
      if (isClockInVisible) {
        await ClockInOutApi.punchIn(staffId);
        Alert.alert("Success", "Punched In Successfully!");
      } else {
        await ClockInOutApi.punchOut(staffId);
        Alert.alert("Success", "Punched Out Successfully!");
      }
      setIsClockInVisible(!isClockInVisible);
    } catch (error) {
      Alert.alert("ClockIn", "An  occurred while performing the action.");
    }
  };

  return (
    <View style={styles.card}>
        <View style={styles.column}>
            <Text style={{ color: "#001F3F", fontWeight: 'bold' }}>{formatShiftText(shift.workTime)}</Text>
      {isClockInVisible ? (
        <View style={styles.clockHeader}>
          <Text style={{ color: "#001F3F", fontWeight: 'bold' }}>Your shift starts at {shift.start}</Text>
        </View>
      ) : (
        <View style={styles.clockHeader}>
          <Text style={{ color: "#001F3F", fontWeight: 'bold' }}>Your shift ends at {shift.end}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.textContainer} onPress={handleToggle}>
        <Icon style={styles.icon} name="clock-o" size={27} color="#fff" />
        {isClockInVisible ? (
          <Text style={styles.toggleText}>Clock-In</Text>
        ) : (
          <Text style={styles.toggleText}>Clock-Out</Text>
        )}
      </TouchableOpacity>
      </View>
      <View>
      <Image source={image} style={styles.image} />
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        padding: 15,
        backgroundColor: 'rgb(238, 242, 251)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // elevation: 5,
        margin: 10,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      column:{
        flexDirection: 'column',
      },
  toggleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001F3F',
    padding: 10,
    width: 160,
    borderRadius: 15,
    // position: 'absolute',
    // top: '8%',
    // left: '5%',
  },
  clockHeader: {
    // position: 'absolute',
    // top: '4%',
    // left: '6%',
    marginBottom: 20
  },
  icon: {
    marginRight: 5,
  },
  image:{
    width:120,
    height: 120,
    resizeMode: 'contain',
    // position: 'absolute',
    // top: '2%',
    // right: '5%',
    borderRadius: 60
  }
});

export default ClockIn;
