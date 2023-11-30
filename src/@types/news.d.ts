import { IMediaBase } from "./global";

export interface INews {
  readonly maTinTuc: string;
  tieuDe: string;
  noiDung: string;
  noiDungNgan: string;
  maNguoiDang: string;
  readonly maLoaiTinTuc: string;
  createAt: string;
  updateAt: string;
  hinhAnh:IMediaBase[]
}
