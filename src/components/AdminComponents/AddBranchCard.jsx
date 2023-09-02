// AddBranchCard.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddBranchCard = ({ name, locationName, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
        <View>
            <Text style={styles.branchName}>{name}</Text>
            <View style={styles.locationContainer}>
                <Icon style={styles.icon} name="map-marker" size={23} />
                <Text style={styles.locationName}>{locationName}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '47%',
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        margin: 5,
    },
    branchName: {
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#001F3F'
    },
    locationName: {
        fontWeight: 'bold',
        color: '#001F3F'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'  
    },
    icon: {
        paddingLeft: 5,
        paddingRight: 5,
        color: '#001F3F'
    }
});

export default AddBranchCard;
