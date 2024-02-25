export interface IProvinceType {
  // name: string;
  // code: number;
  // division_type: string;
  // codename: string;
  // district_code: number;
  province_id: string;
  province_name: string;
  province_type: string;
}

export interface IDistrictType {
  // name: string;
  // code: number;
  // division_type: string;
  // codename: string;
  // province_code: number;

  district_id: number;
  district_name: string;
  district_type: string;
}

export interface IWardType {
  // name: string;
  // code: number;
  // division_type: string;
  // codename: string;
  // district_code: number;

  district_id: string;
  ward_id: string;
  ward_name: string;
  ward_type: string;
}
