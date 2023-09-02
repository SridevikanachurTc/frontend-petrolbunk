import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import moment from 'moment';
import ClockInOutApi from '../../services/ClockInOutApi';
import { useFocusEffect } from '@react-navigation/native';


const AttendanceLog = ({ staffId }) => {
    const [logs, setLogs] = useState([]);
  
    useFocusEffect(
        useCallback(() => {
            const fetchLogs = async () => {
                try {
                    const data = await ClockInOutApi.getAttendanceLogs(staffId);
                    setLogs(data.reverse()); 
                    console.log('attendance logs', logs);
                } catch (error) {
                    console.error("Failed fetching attendance logs:", error);
                }
            };

            fetchLogs();
            return () => setLogs([]); // This cleans up the data when the screen goes out of focus
        }, [staffId])
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Attendance Log</Text>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Date</Text>
            <Text style={styles.headerText}>Start Time</Text>
            <Text style={styles.headerText}>End Time</Text>
          </View>
          <FlatList
            data={logs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>
                  {moment(item.clockIn).format("DD/MM/YYYY")}
                </Text>
                <Text style={styles.cell}>
                  {moment(item.clockIn).format("HH:mm:ss")}
                </Text>
                <Text style={styles.cell}>
                  {(item.clockOut === null ) ?'-' : moment(item.clockOut).format("HH:mm:ss")}
                </Text>
              </View>
            )}
            ListFooterComponent={<View style={{height: 70}} />}
          />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    opacity: 0.7,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#808F9F',
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#001F3F',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#001F3F',
  },
  heading: {
    fontSize: 18,
    textAlign: 'center',
    color: '#001F3F',
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default AttendanceLog;
