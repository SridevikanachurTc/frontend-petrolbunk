import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddEmployeeModal from './AddEmployeeModal';

const AddEmployeeHeader = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalSubmit = (details) => {
        console.log(details);
        // Do your submit logic here (API call etc.)
    };

    return (
        <>
            <View style={styles.header}>
                <Icon style={styles.icon} name="user-plus" size={35} onPress={() => setModalVisible(true)} />
            </View>
            
            <AddEmployeeModal 
                isVisible={modalVisible} 
                closeModal={() => setModalVisible(false)} 
                onSubmit={handleModalSubmit}
            />
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
    },
    icon: {
        color: '#000'
    }
});

export default AddEmployeeHeader;
