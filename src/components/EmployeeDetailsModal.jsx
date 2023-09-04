import React, { useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import UserApi from '../services/UserApi';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';

const EmployeeDetailsModal = ({ isVisible, employee, onClose, onShowAttendanceLog }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [workTime, setWorkTime] = useState('');
  const [editedShift, setEditedShift] = useState('');

  const formatTime = time => {
    return moment(time).format('HH:mm');
  };

  const handleDelete = () => {
    if (employee && employee.id) {
        Alert.alert(
            'Confirmation',
            'Do you surely want to remove this staff?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Delete operation cancelled.'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        UserApi.deleteUser(employee.id)
                            .then(() => {
                                alert('User deleted successfully');
                                onClose(); // Close the modal after successful deletion
                            })
                            .catch(error => {
                                console.error('Failed to delete user:', error);
                                alert('Failed to delete user.');
                            });
                    },
                },
            ],
            { cancelable: true },
        );
    }
};


  const onChangeStart = (event, selectedTime) => {
    setShowStartPicker(false);
    const newTime = selectedTime || startTime;
    setStartTime(newTime);
    updateEditedShift(newTime, endTime);
  };

  const onChangeEnd = (event, selectedTime) => {
    setShowEndPicker(false);
    const newTime = selectedTime || endTime;
    if (moment(newTime).isAfter(startTime)) {
      setEndTime(newTime);
      updateEditedShift(startTime, newTime);
    } else {
      alert('End time should be greater than start time');
    }
  };

  const updateEditedShift = (start, end) => {
    setEditedShift(`${formatTime(start)} - ${formatTime(end)}`);
  };

  useFocusEffect(
    useCallback(() => {
      if (isVisible) {
    if (employee && employee.shift) {
      setEditedShift(employee.shift.workTime);
    }
  }
}, [isVisible])
);

  const handleSave = () => {
    const shiftDetails = {
      start: formatTime(startTime),
      end: formatTime(endTime),
    };

    UserApi.assignShift(employee.id, shiftDetails)
      .then(data => {
        console.log('Shift updated:', data);
        setWorkTime(data.workTime);
        // Do other stuff with the returned data if necessary
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Failed to update shift:', error);
        // Handle error appropriately, e.g., show an error message to the user
      });
  };

  const toCamelCase = str => {
    if (!str) return '';
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (!employee) return null;
  // console.log(employee.shift.workTime);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.heading}>Employee Details</Text>
        <View style={styles.row}>
          <Icon style={styles.icon} name="user" size={26} color="#001F3F" />
          <Text style={styles.text}>{employee.name}</Text>
        </View>
        {['BRANCH_MANAGER', 'STAFF'].includes(employee.role) && (
      <View style={styles.row}>
        <Icon style={styles.icon} name="building" size={24} color="#001F3F" />
        <Text style={styles.text}>{employee.bunk.name}</Text>
      </View>
    )}
        <View style={styles.row}>
          <Icon
            style={styles.icon}
            name="briefcase"
            size={24}
            color="#001F3F"
          />
          <Text style={styles.text}>{toCamelCase(employee.role)}</Text>
        </View>
        <View style={styles.row}>
          <Icon style={styles.icon} name="envelope" size={24} color="#001F3F" />
          <Text style={styles.text}>{employee.email}</Text>
        </View>
        <View style={styles.row}>
          <Icon style={styles.icon} name="phone" size={24} color="#001F3F" />
          <Text style={styles.text}>{employee.phoneNumber}</Text>
        </View>
        <View style={styles.row}>
          <Icon
            style={styles.icon}
            name="map-marker"
            size={24}
            color="#001F3F"
          />
          <Text style={styles.text}>{employee.address}</Text>
        </View>

        {(employee.role === 'STAFF' || employee.role === 'Staff') && (
          <View>
            <View style={styles.rowShift}>
              {isEditing ? (
                <View style={{width: '80%'}}>
                  <TouchableOpacity onPress={() => setShowStartPicker(true)}>
                    <Text>{formatTime(startTime)}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShowEndPicker(true)}>
                    <Text>{formatTime(endTime)}</Text>
                  </TouchableOpacity>

                  {showStartPicker && (
                    <DateTimePicker
                      value={startTime}
                      mode="time"
                      is24Hour={true}
                      onChange={onChangeStart}
                    />
                  )}
                  {showEndPicker && (
                    <DateTimePicker
                      value={endTime}
                      mode="time"
                      is24Hour={true}
                      onChange={onChangeEnd}
                    />
                  )}
                </View>
              ) : (
                <React.Fragment>
                  <View style={styles.row}>
                    <Icon
                      style={styles.icon}
                      name="clock-o"
                      size={27}
                      color="#001F3F"
                    />
                    {employee.shift && employee.shift.workTime && 
    <Text style={styles.text}>{toCamelCase(employee.shift.workTime)}</Text>
}

                  </View>
                </React.Fragment>
              )}
              <TouchableOpacity
                onPress={isEditing ? handleSave : () => setIsEditing(true)}>
                <Icon
                  style={styles.icon}
                  name={isEditing ? 'save' : 'pencil'}
                  size={26}
                  color="#001F3F"
                />
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.row} onPress={onShowAttendanceLog}>
                <Icon
                  style={styles.icon}
                  name="calendar-check-o"
                  size={24}
                  color="#001F3F"
                />
                <Text style={styles.text}>Attendance Log</Text>
              </TouchableOpacity>
              <View style={styles.deleteIcon}>
              <TouchableOpacity onPress={handleDelete}>
                <Icon
                  
                  name="trash"
                  size={30}
                  color="#001F3F"
                />
              </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    backgroundColor: 'white',
    height: '70%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    color: '#001F3F',
    textAlign: 'center',
    padding: 5,
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowShift: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowShifts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingLeft: 15,
  },
  text: {
    fontSize: 18,
    padding: 10,
    fontWeight: '500',
    color: '#001F3F',
  },
  deleteIcon: {
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default EmployeeDetailsModal;
