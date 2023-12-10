import { IProduct } from './product';

export interface IOrderPayload {
  tenKhachHang: string;
  diaChi: string;
  soDT: string;
  loiNhan: string;
  phuongThucThanhToan: string;
  sanPham: {
    maSanPham: string;
    soLuong: number;
  }[];
}

export interface IStatus {
  readonly maTrangThai: string;
  trangThai: string;
  role: number;
}

export interface IPriority {
  readonly id: string;
  doUuTien: string;
  role: number;
}

export interface IPaid {
  readonly maDonHang: string;
  tenKhachHang: string;
  diaChi: string;
  soDT: string;
  tongTien: number;
  loiNhan: string;
  readonly maTrangThai: string;
  createAt: string;
  updateAt: string;
  readonly maDoUuTien: string;
  keyIndex: number;
  phuongThucThanhToan: string;
  sanPham: IProduct[];
  trangThai: IStatus;
  doUuTien: IPriority;
}
