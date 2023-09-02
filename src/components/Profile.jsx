import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import loginApi from '../services/loginApi';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import UserApi from '../services/UserApi';


const Profile = ({ employee }) => {
  
  const navigation = useNavigation();
  const [chosenImage, setChosenImage] = useState(employee.profilePic);

  function chooseImage() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        quality: 0.5,
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        alert('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        alert('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } 
      
      else {
        const {assets} = response;
        setChosenImage({
          fileData: assets[0],
          fileUri: assets[0]?.uri,
        });

        let photo = {...assets[0]};
        let formdata = new FormData();
        formdata.append('files', {
          uri: photo.uri,
          name: photo?.fileName ? photo?.fileName : 'image.jpg',
          type: photo.type,
        });
        uploadImage(formdata);
      }
    });
  }
  function uploadImage(formdata) {
    coreService
      .uploadImage(formdata,false)
      .then(res => {
        alert('Image uploaded successfully', JSON.stringify(res));
      })
      .catch(err => {
        console.log('err', err);
        Alert.alert('Error', 'Unable to upload image', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]);
      });
  }

//   const handleImageUpload = async (imageData) => {
//     try {
//         // console.log("Uploading:", uri);
//         console.log(employee.id);
//         const response = await UserApi.uploadProfileImage(employee.id, imageData);
//         console.log('uploaded success',response);
//         alert('Image uploaded successfully');
//     } catch (error) {
//         console.error("Upload Error:", error);
//         alert('Failed to upload image.');
//     }
// };

// const handleImageSelection = (response) => {
//   if (response.didCancel) {
//       console.log('User cancelled image picker');
//   } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//   } else {
//     const {assets} = response;
//     setChosenImage({
//       fileData: assets[0],
//       fileUri: assets[0]?.uri,
//     });

//     let photo = {...assets[0]};
//     let formdata = new FormData();
//     formdata.append('file', {
//       uri: photo.uri,
//       name: photo?.fileName ? photo?.fileName : 'image.jpg',
//       type: photo.type,
//     });
//     handleImageUpload(formdata);
//   }
// };


  

//   const chooseImage = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//         quality: 0.5,
//       },
//     };

//     launchImageLibrary(options, handleImageSelection);
//   };



  const avatars = [
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar1.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar2.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar3..jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar4.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar5.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar6.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar7.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar8.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar9.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar10.jpg'),
    require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/avatar11.jpg'),
  ];

  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

  const toCamelCase = str => {
    if (!str) return '';
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleResetPassword = async () => {
    try {
      console.log(employee.email);
      await loginApi.resetPassword(employee.email);
      alert('Reset password link has been sent to the email.');
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Error: ${error}`);
      } else {
        alert('Failed to reset password.');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await loginApi.logout(navigation);

      navigation.navigate('Login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  

  return (
    <View>
      <Image
        source={require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/petrolbunk.jpg')}
        style={styles.image}
      />
      <View style={styles.avatar}>
      <TouchableOpacity onPress={chooseImage} style={{ alignItems: 'center' }}>
      <Image source={chosenImage ? { fileUri : chosenImage } : randomAvatar} style={styles.avatarImage} />
      <Icon style={styles.editIcon} name="pencil" size={24} color="#001F3F" />
        </TouchableOpacity>

      </View>
      <View style={styles.container}>
        <ScrollView style={styles.textContainer}>
          <View style={styles.row}>
            <Icon style={styles.icon} name="user" size={23} color="#001F3F" />
            <Text style={styles.text}>{employee.name}</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name="child" size={26} color="#001F3F" />
            <Text style={styles.text}>{employee.age}</Text>
          </View>
          <View style={styles.row}>
            <Icon
              style={styles.icon}
              name="briefcase"
              size={22}
              color="#001F3F"
            />
            <Text style={styles.text}>{toCamelCase(employee.role)}</Text>
          </View>
          <View style={styles.row}>
            <Icon
              style={styles.icon}
              name="envelope"
              size={22}
              color="#001F3F"
            />
            <Text style={styles.text}>{employee.email}</Text>
          </View>
          <View style={styles.row}>
            <Icon
              style={styles.icon}
              name="phone-square"
              size={22}
              color="#001F3F"
            />
            <Text style={styles.text}>{employee.phoneNumber}</Text>
          </View>
          <View style={styles.row}>
            <Icon
              style={styles.icon}
              name="map-marker"
              size={28}
              color="#001F3F"
            />
            <Text style={styles.text}>{employee.address}</Text>
          </View>
          <TouchableOpacity onPress={handleResetPassword}>
            <View style={styles.row}>
              <Icon
                style={styles.icon}
                name="unlock-alt"
                size={24}
                color="#001F3F"
              />
              <Text style={styles.text}>Reset Password</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <View style={styles.row}>
              <Icon
                style={styles.icon}
                name="sign-out"
                size={30}
                color="#001F3F"
              />
              <Text style={styles.text}>Logout</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  editIcon:{
    position: 'relative',
    top: -20,
    left: 40,
  },
  icon: {
    paddingLeft: 15,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    color: '#001F3F',
    padding: 10,
    paddingBottom: 5,
    margin: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  textContainer: {
    position: 'relative',
    top: '15%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: '100%',
    height: '60%',
    opacity: 0.5,
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 70,
    zIndex: 1,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#fff',
    position: 'absolute',
    top: '35%',
    left: '30%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
