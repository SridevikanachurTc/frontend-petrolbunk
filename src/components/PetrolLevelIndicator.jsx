// import React, { useRef, useEffect } from 'react';
// import { View, Text, Animated, StyleSheet } from 'react-native';

// const PetrolLevelIndicator = ({ level }) => {
//   const MAX_LEVEL = 100;
//   const anim = useRef(new Animated.Value(0)).current;
//   const waveAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(anim, {
//       toValue: level / MAX_LEVEL,
//       duration: 1500,
//       useNativeDriver: false,
//     }).start(() => {
//       // Once the fill animation completes, start the wave animation
//       animateWave();
//     });
//   }, [level]);

//   const animateWave = () => {
//     Animated.sequence([
//       Animated.timing(waveAnim, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: false,
//       }),
//       Animated.timing(waveAnim, {
//         toValue: 0,
//         duration: 500,
//         useNativeDriver: false,
//       })
//     ]).start(() => {
//       animateWave(); // Loop the wave animation
//     });
//   };

//   const waterHeight = anim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0%', '100%'],
//   });

//   const waveTop = waveAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 10],
//   });

//   return (
//     <View style={styles.container}>
//         <View style={styles.outCircle}>
//       <View style={styles.circle}>
//         <Animated.View style={[styles.water, { height: waterHeight }]}>
//           <Animated.View style={[styles.wave, { top: waveTop, height: level-5 }]} />
//         </Animated.View>
//       </View>
//       </View>
//       <Text>{level} Liters</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   outCircle: {
//     borderRadius: 60,
//     borderWidth: 3,
//     borderColor: '#001F3F',
//   },
//   circle: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 5,
//     borderColor: 'rgba(0, 31, 63,0.3)',
//     overflow: 'hidden',
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//   },
//   water: {
//     backgroundColor: 'rgba(30, 136, 229,0.2)',
//     width: '100%',
//     borderRadius: 15,
//     justifyContent: 'flex-end',
//   },
//   wave: {
//     backgroundColor: '#0A74C0', 
//     width: '100%',
//   },
// });

// export default PetrolLevelIndicator;

import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const PetrolLevelIndicator = ({ level }) => {
  const MAX_LEVEL = 100;
  const anim = useRef(new Animated.Value(0)).current;
  const waveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Simultaneously run fill animation and wave animation
    Animated.parallel([
      Animated.timing(anim, {
        toValue: level / MAX_LEVEL,
        duration: 1000,
        useNativeDriver: false,
      }),
      animateWave()
    ]).start();
  }, [level]);

  const animateWave = () => {
    return Animated.sequence([
      Animated.timing(waveAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(waveAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      })
    ]).start(() => {
      animateWave(); // Loop the wave animation
    });
  };

  const waterHeight = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const waveTop = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  return (
    <View style={styles.container}>
    <View style={styles.outCircle}>
        <View style={styles.circle}>
            <Animated.View style={[styles.water, { height: waterHeight }]}>
                <Animated.View style={[styles.wave, { top: waveTop, height: level-5 }]} />
            </Animated.View>
        </View>
    </View>
    <Text style={{marginBottom: 5}}>{level} Liters</Text>
</View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    outCircle: {
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#001F3F',
        margin: 20,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'rgba(0, 31, 63,0.3)',
        overflow: 'hidden',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    water: {
        backgroundColor: 'rgba(30, 136, 229,0.2)',
        width: '100%',
        borderRadius: 15,
        justifyContent: 'flex-end',
    },
    wave: {
        backgroundColor: '#0A74C0', 
        width: '100%',
    },
});

export default PetrolLevelIndicator;
