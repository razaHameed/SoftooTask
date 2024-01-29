import {createSlice, createAsyncThunk, combineReducers} from '@reduxjs/toolkit';
import axios from 'axios';
import Api from '../../constants/api';

const initialState = {
  menu: {},
  productList: {},
  cartItems: [],
  loading: false,
};

const dashBoardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      let object = state?.cartItems?.find(
        item => item?.id == action?.payload?.id,
      );
      let indexofItem = state?.cartItems?.indexOf(object);
      console.log('indexofItem', indexofItem);
      if (indexofItem !== -1) {
        state?.cartItems?.splice(indexofItem, 1);
      } else {
        console.log("not exist");
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getMenu.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMenu.fulfilled, (state, action) => {
      state.loading = false;
      state.menu = action.payload;
    });
    builder.addCase(getMenu.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getProductList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const getMenu = createAsyncThunk('menuApi', async data => {
  try {
    let res = await Api.get('benirvingplt/products/menu');
    return res?.data;
  } catch (error) {
    console.log('error>>>>', error);
  }
});

export const getProductList = createAsyncThunk('productListApi', async data => {
  try {
    let res = await Api.get(
      'https://my-json-server.typicode.com/benirvingplt/products/products',
    );
    return res?.data;
  } catch (error) {
    console.log('error>>>>', error);
  }
});

export const {addToCart, removeFromCart} = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
