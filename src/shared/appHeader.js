import { useNavigation } from '@react-navigation/native';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as fp,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';

const AppHeader = props => {
  const navigation = useNavigation();
  const {cartItems} = useSelector(state => state?.dashBoardSlice);
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.innerConatiner}>
        <View style={styles?.cartImageStyle} />
        <Text style={styles.headertext}>{props.title}</Text>
        <View style={styles?.cartImageStyle}>
         { props?.navFrom == "productList" &&
         <TouchableOpacity
         onPress={()=>{
          navigation?.navigate("cart")
         }}
         >
            <Image
              style={styles?.cartImageStyle}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYdpYN3JJDWbcyPhWzReW0rVHo1VdG6bVXcCWcLJJBQ&s',
              }}
            />
            <TouchableOpacity
               onPress={()=>{
                navigation?.navigate("cart")
               }}
              activeOpacity={1}
              style={{
                width: 25,
                height: 25,
                borderRadius: 25,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: -8,
                top: -5,
              }}>
              <Text
                style={{
                  color: fp(1.6),
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                {cartItems?.length}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS == 'ios' ? hp(14) : hp(12),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  innerConatiner: {
    width: '91%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartImageStyle: {
    width: hp(4),
    height: hp(4),
    marginRight: 5,
  },
  headertext: {
    fontSize: fp(2),
    color: 'black',
    fontWeight: 'bold',
  },
});

export default AppHeader;
