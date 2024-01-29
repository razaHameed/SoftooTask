// React Native Rotate Image View Using Animation
// https://aboutreact.com/react-native-rotate-image-view-using-animation/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Animated,
    Easing,
    TouchableHighlight,
    Text,
} from 'react-native';

import LoaderImg from '../../assets/LoaderImg.svg';

const LogoLoader = () => {
    let outerRotatingView = new Animated.Value(0);
    let internalRotatingView = new Animated.Value(0);

    const startImageRotateFunction1 = () => {
        outerRotatingView.setValue(0);
        Animated.timing(outerRotatingView, {
            toValue: 1,
            duration: 6000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => startImageRotateFunction1());
    };

    startImageRotateFunction1();

    const startImageRotateFunction2 = () => {
        internalRotatingView.setValue(0);
        Animated.timing(internalRotatingView, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => startImageRotateFunction2());
    };

    startImageRotateFunction2();

    const RotateData1 = outerRotatingView.interpolate({
        inputRange: [0, 2],
        outputRange: ['0deg', '360deg'],
    });

    const RotateData2 = internalRotatingView.interpolate({
        inputRange: [0, 1.5],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

            <Animated.View
             style={{
                width: 90, height: 90,
                borderStartWidth: 3,
                borderEndWidth: 3,
                borderColor: '#fff',
                borderRadius: 100,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{ rotate: RotateData1 }],
             }}>
                <Animated.Image
                    style={{
                        transform: [{ rotate: RotateData2 }],
                        width: 70, height: 70, tintColor: '#fff',
                        position: 'absolute'
                        
                    }}

                    source={require('../../assets/LoaderImg.png')}
                />

</Animated.View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LogoLoader;
