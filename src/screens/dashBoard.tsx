import {useNavigation} from '@react-navigation/native';
import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMenu,
  getProductList,
} from '../redux/features/dashBoardSlice';
import AppHeader from '../shared/appHeader';
import MenuBox from '../shared/menuBox';


interface Category {
  name: string;
  categories: string[];
}

interface Child {
  name: string;
  categories: Category[];
}

interface MenuApiResponse {
  name: string;
  img: string;
  children: Child[];
}

const DashBoard = () => {
  const dispatch = useDispatch();
  const menu: MenuApiResponse = useSelector(
    (state: any) => state?.dashBoardSlice.menu,
  );

  useEffect(() => {
    dispatch<any>(getMenu());
  }, []);
  return (
    <>
      <AppHeader title="DashBoard" />
      <View style={styles.container}>
        <View style={styles.row}>
          <MenuBox
            routeName="plist"
            title={menu?.length > 0 ? menu[0]?.children[0]?.name : ""}
          />
          <MenuBox
            routeName="plist"
            title={menu?.length > 0 && menu[0]?.children[1]?.name}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  row: {
    flexDirection: 'row',
  },
});

export default DashBoard;
