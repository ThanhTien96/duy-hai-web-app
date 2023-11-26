import { IProduct } from "./product";

export interface ISubCategory {
  readonly maDanhMucNho: string;
  tenDanhMucNho: string;
  icon: string;
  readonly maDanhMucChinh: string;
  danhSachSanPham?: IProduct[]

}

export interface IMainCategory {
  readonly maDanhMucChinh: string;
  tenDanhMuc: string;
  role: number;
  icon: string;
  subcategories: ISubCategory[];
}


export interface ISubNavLink {
    id: string;
    url: string;
    tenSubLink: string;
    maNavLink: string;
  }

export interface IMainNavLink {
    readonly maNavLink: string;
    tenNavLink: string;
    url: string;
    readonly maMenu: string;
    role: number;
    subLink: ISubNavLink[];
  }

export interface IMenu {
  readonly maMenu: string;
  active: boolean;
  logo: string;
  navlink: IMainNavLink[];
}
