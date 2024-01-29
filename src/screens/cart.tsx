import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductList} from '../redux/features/dashBoardSlice';
import AppHeader from '../shared/appHeader';
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as fp,
} from 'react-native-responsive-dimensions';

interface Products {
  colour: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

const Cart = () => {
  const cartItems: Products = useSelector(
    (state: any) => state?.dashBoardSlice?.cartItems,
  );

  return (
    <>
      <AppHeader title="Cart" />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, paddingTop: 18}}
          initialNumToRender={cartItems?.length}
          data={cartItems}
          keyExtractor={(item, index) => item?.id?.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={[styles.itemStyle]}>
                <Image
                  style={{
                    width: hp(10),
                    height: hp(10),
                    borderRadius: hp(5),
                  }}
                  source={{uri: item?.img}}
                />
                <View style={{width: '70%', marginLeft: 10}}>
                  <Text
                    style={{
                      color: item?.colour,
                      fontWeight: '600',
                      fontSize: fp(1.8),
                    }}>
                    {item?.name}
                  </Text>
                  <Text
                    style={{
                      color: item?.colour,
                      fontWeight: 'bold',
                      color: 'green',
                      fontSize: fp(1.8),
                    }}>
                    Price : {item?.price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity style={styles?.checkoutButton}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: fp(1.8),
            }}>
            Check Out
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{flex: 0}} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  checkoutButton: {
    width: '91%',
    alignSelf: 'center',
    borderRadius: 30,
    height: hp(6),
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
  },
  itemStyle: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(14),
    width: '91%',
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
    borderRadius: 10,
  },
});

export default Cart;
