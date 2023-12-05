import { IMainCategory, ISubCategory } from './global';

export interface IProductSubCategories extends ISubCategory {
  maincategories: IMainCategory;
}

export interface IProductMedia {
  readonly id: string;
  readonly maSanPham: string;
  hinhAnh: string;
  hinhChinh: boolean;
}

export interface IProduct {
  readonly maSanPham: string;
  tenSanPham: string;
  moTa: string;
  readonly giaGoc: number;
  readonly giaGiam: number;
  readonly tongSoLuong: number;
  readonly maDanhMucNho: string;
  createAt: string;
  updateAt: string;
  hot: boolean;
  seo: boolean;
  seoDetail: string;
  seoTitle: string;
  moTaNgan: string;
  youtubeVideo: string;
  hinhAnh: IProductMedia[];
  danhMucNho: IProductSubCategories;
}
