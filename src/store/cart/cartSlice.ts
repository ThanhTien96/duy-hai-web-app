import { IProduct } from '@/@types/product';
import { createSlice } from '@reduxjs/toolkit';

export interface IProductCart {
  product: IProduct;
  quantity: number;
}

export interface ICartSlice {
  cartList: IProductCart[];
  cartLoading: boolean;
}

const initialState: ICartSlice = {
  cartList: [],
  cartLoading: false,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const findOnCart = state.cartList.find(
        (ele) => ele.product.maSanPham === payload.product.maSanPham,
      );

      if (findOnCart) {
        const updatedCartList = state.cartList.map((item) =>
          item.product.maSanPham === payload.product.maSanPham
            ? { ...item, quantity: item.quantity + payload.quantity }
            : item,
        );

        return { ...state, cartList: updatedCartList };
      } else {
        return { ...state, cartList: [...state.cartList, payload] };
      }
    },
  },
});

export const {
  addToCart
} = cartSlice.actions; 

export default cartSlice.reducer;
