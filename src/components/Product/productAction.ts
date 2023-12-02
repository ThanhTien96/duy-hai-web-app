import { IProduct } from "@/@types/product";
import { EProdReducerType } from "./ProductSection";
import { IPagination } from "@/@types/global";

export const setLoading = (payload: boolean) => ({type: EProdReducerType.SET_LOADING, payload})
export const setProduct = (payload: IProduct[]) => ({type: EProdReducerType.SET_PRODUCT, payload})
export const setPagination = (payload: IPagination) => ({type: EProdReducerType.SET_PAGINATION, payload})