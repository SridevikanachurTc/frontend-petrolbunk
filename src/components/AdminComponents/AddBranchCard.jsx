// AddBranchCard.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddBranchCard = ({ branchName, locationName, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
        <View>
            <Text style={styles.branchName}>{branchName}</Text>
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
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        width: '47%', 
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    branchName: {
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    locationName: {
        fontWeight: 'bold'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'  
    },
    icon: {
        paddingLeft: 5,
        paddingRight: 5
    }
});

export default AddBranchCard;
