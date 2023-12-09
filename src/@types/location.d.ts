export interface IProvinceType {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  district_code: number;
}

export interface IDistrictType {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  province_code: number;
}

export interface IWardType {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  district_code: number;
}
