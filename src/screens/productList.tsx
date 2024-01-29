import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, getProductList, removeFromCart} from '../redux/features/dashBoardSlice';
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

const ProductList = () => {
  const dispatch = useDispatch();
  const productList : Products = useSelector((state:any) => state?.dashBoardSlice?.productList);
 console.log("productList>>>",productList)

  useEffect(() => {
    dispatch<any>(getProductList());
  }, []);

  return (
    <>
      <AppHeader title="Products" navFrom="productList" />
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, paddingTop: 18}}
          initialNumToRender={productList?.length}
          data={productList}
          keyExtractor={(item, index) => item?.id?.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity activeOpacity={0.8} style={[styles.itemStyle]}>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: item?.colour,
                        fontWeight: 'bold',
                        color: 'green',
                        fontSize: fp(1.8),
                      }}>
                      Add to Cart
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '30%',
                      }}>
                      <TouchableOpacity
                        onPress={() => dispatch(removeFromCart(item))}
                        style={{
                          width: 25,
                          height: 25,
                          borderRadius: 25,
                          backgroundColor: 'green',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: item?.colour,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          -
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => dispatch(addToCart(item))}
                        style={{
                          width: 25,
                          height: 25,
                          borderRadius: 25,
                          backgroundColor: 'green',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: item?.colour,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
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

export default ProductList;
