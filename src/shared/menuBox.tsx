import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as fp,
} from 'react-native-responsive-dimensions';

interface Props  {
  routeName: string;
  title: string | undefined; 
}

const MenuBox = (props:Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation?.navigate(props?.routeName);
      }}
      style={styles.container}>
      <Text style={styles.headertext}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(16),
    width: hp(16),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: hp(1.5),
  },
  headertext: {
    fontSize: fp(1.6),
    color: 'black',
    fontWeight: 'bold',
  },
});

export default MenuBox;
