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
    resetCart: state => state,
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
    inscreaseProduct: (
      state,
      { payload }: { type: string; payload: { id: string } },
    ) => {
      const prod = state.cartList.map((ele: IProductCart) =>
        ele.product.maSanPham === payload.id
          ? { ...ele, quantity: ele.quantity + 1 }
          : ele,
      );
      state.cartList = prod;
    },
    decreaseProduct: (
      state,
      { payload }: { type: string; payload: { id: string } },
    ) => {
      const findProduct = state.cartList.find(
        (item: IProductCart) => item.product.maSanPham === payload.id,
      );
      if (findProduct && findProduct.quantity <= 1) {
        state.cartList = state.cartList.filter(
          (ele: IProductCart) =>
            ele.product.maSanPham !== findProduct.product.maSanPham,
        );
      } else {
        state.cartList = state.cartList.map((ele: IProductCart) =>
          ele.product.maSanPham === payload.id
            ? { ...ele, quantity: ele.quantity - 1 }
            : ele,
        );
      }
    },
    deleteProductFormCart: (
      state,
      { payload }: { type: string; payload: { id: string } },
    ) => {
      state.cartList = state.cartList.filter(
        (item: IProductCart) => item.product.maSanPham !== payload.id,
      );
    },
  },
});

export const {
  addToCart,
  inscreaseProduct,
  decreaseProduct,
  resetCart,
  deleteProductFormCart,
} = cartSlice.actions;

export default cartSlice.reducer;
