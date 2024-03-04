export interface IFixPost {
  readonly maBaiViet: string;
  tieuDe: string;
  noiDung: string;
  tenKySu: string;
  createAt: string;
  updateAt: string;
  hinhAnh: {id: string, hinhAnh: string}[];
}
