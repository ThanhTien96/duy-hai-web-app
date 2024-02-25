'use client';

import { IDistrictType, IProvinceType, IWardType } from '@/@types/location';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  fetchDistrictsThunk,
  fetchWardsThunk,
} from '@/store/location/locationThunk';
import { stringToSlug } from '@/utils/common';
import { ConfigProvider, Form, Input, Select } from 'antd';
import React, { useReducer } from 'react';
import { ButtonShared } from '../global';
import { useFormik } from 'formik';
import * as yup from 'yup';

type TPaymentFormProps = {
  onSubmit: (value: any) => void;
};

export interface IPaymentFormValue {
  tenKhachHang: string;
  soDT: string;
  diaChi: string;
  loiNhan: string;
  tinh: string;
  huyen: string;
  xa: string;
}

const PaymentForm = ({ onSubmit }: TPaymentFormProps) => {
  const { provinces, districts, wards } = useAppSelector(
    (state) => state.location,
  );
  const storeDispatch = useAppDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tenKhachHang: '',
      soDT: '',
      diaChi: '',
      loiNhan: '',
      tinh: '',
      huyen: '',
      xa: '',
    },
    validationSchema: yup.object({
      tenKhachHang: yup.string().required('*họ tên buộc nhập!'),
      soDT: yup.string().required('*số điện thoại buộc nhập!'),
      tinh: yup.string().required('*tỉn/thành phố buộc nhập!'),
      diaChi: yup.string().required("*địa chỉ buộc nhập"),
      huyen: yup.string().required('*quận/huyện buộc nhập!'),
      xa: yup.string().required('*phường/xã buộc nhập!'),
    }),
    onSubmit: (value: IPaymentFormValue) => {
      onSubmit(value);
    },
  });

  const { handleChange, handleSubmit, errors, touched, setFieldValue, values } =
    formik;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff8027',
        },
        components: {
          Form: {
            colorTextLabel: '#0e1c36',
          },
          Input: {
            borderRadius: 2,
          },
          Select: {
            borderRadius: 2,
          },
        },
      }}
      space={{
        size: 'middle',
      }}
    >
      <Form
        onSubmitCapture={handleSubmit}
        wrapperCol={{ span: 24 }}
        layout="vertical"
      >
        {/* name */}
        <Form.Item label="Họ Tên">
          <Input
            name="tenKhachHang"
            onChange={handleChange}
            value={values.tenKhachHang}
            placeholder="Nhập Họ Tên"
          />
          {errors.tenKhachHang && touched.tenKhachHang && (
            <span className="text-red-500">{errors.tenKhachHang}</span>
          )}
        </Form.Item>
        {/* phone number */}
        <Form.Item label="Số Điện Thoại">
          <Input
            name="soDT"
            onChange={handleChange}
            value={values.soDT}
            placeholder="Nhập Số Điện Thoại"
          />
          {errors.soDT && touched.soDT && (
            <span className="text-red-500">{errors.soDT}</span>
          )}
        </Form.Item>
        {/* address choose  */}
        <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item className="inline-block w-full md:w-[calc(50%-4px)]" label="Địa Chỉ">
          <Input
            name="diaChi"
            onChange={handleChange}
            value={values.diaChi}
            placeholder="Nhập địa chỉ"
          />
          {errors.diaChi && touched.diaChi && (
            <span className="text-red-500">{errors.diaChi}</span>
          )}
        </Form.Item>
          <Form.Item
          className="inline-block w-full md:w-[calc(50%-4px)] lg:pl-4"
            rules={[{ required: true, message: errors.tinh }]}
            label="Tỉnh / Thành Phố"
          >
            <Select
            className='max-w-full'
              placeholder="Chọn Tỉnh / Thành Phố"
              showSearch
              value={values.tinh ? values.tinh : undefined}
              filterOption={(input, option) =>
                stringToSlug((option?.label ?? '').toLowerCase()).includes(
                  stringToSlug(input.toLowerCase()),
                )
              }
              onChange={(value, option: any) => {
                storeDispatch(fetchDistrictsThunk(value));
                setFieldValue('tinh', option.label);
              }}
              options={
                provinces && 
                provinces?.map((province: IProvinceType) => ({
                  value: province.province_id,
                  label: province.province_name,
                }))
              }
            />
            {errors.tinh && touched.tinh && (
              <span className="text-red-500">{errors.tinh}</span>
            )}
          </Form.Item>
        </Form.Item>
        {/* address */}
        <Form.Item style={{ marginBottom: 0 }}>
          {/* district */}
          <Form.Item
            rules={[
              {
                required: errors.huyen && touched.huyen ? true : false,
                message: errors.huyen,
              },
            ]}
            className="inline-block w-full md:w-1/2"
            label="Quận / Huyện"
          >
            <Select
              className='max-w-full'
              placeholder="Chọn Quận / Huyện"
              showSearch
              
              filterOption={(input, option) =>
                stringToSlug((option?.label ?? '').toLowerCase()).includes(
                  stringToSlug(input.toLowerCase()),
                )
              }
              onChange={(value, option: any) => {
                storeDispatch(fetchWardsThunk(Number(value)));
                setFieldValue('huyen', option.label);
              }}
              options={
                districts &&
                districts.map((districts: IDistrictType) => ({
                  value: districts.district_id,
                  label: districts.district_name,
                }))
              }
            />
            {errors.huyen && touched.huyen && (
              <span className="text-red-500">{errors.huyen}</span>
            )}
          </Form.Item>
          {/* ward */}
          <Form.Item
            className="inline-block w-full md:w-[calc(50%-4px)] lg:pl-4"
            label="Phường / Xã"
          >
            <Select
              placeholder="Chọn Phường / Xã"
              className='max-w-full'
              showSearch
              value={values.xa ? values.xa : undefined}
              filterOption={(input, option) =>
                stringToSlug((option?.label ?? '').toLowerCase()).includes(
                  stringToSlug(input.toLowerCase()),
                )
              }
              onChange={(value, option: any) => {
                setFieldValue('xa', option.label);
              }}
              options={
                wards &&
                wards.map((wards: IWardType) => ({
                  value: wards.ward_id,
                  label: wards.ward_name,
                }))
              }
            />
            {errors.xa && touched.xa && (
              <span className="text-red-500">{errors.xa}</span>
            )}
          </Form.Item>
        </Form.Item>
        {/* note */}
        <Form.Item label="Lời Nhắn">
          <Input.TextArea
            name="loiNhan"
            onChange={handleChange}
            value={values.loiNhan}
            rows={5}
          />
        </Form.Item>
        <Form.Item>
          <ButtonShared
            className="!w-full"
            content="Thanh Toán"
            htmlType="submit"
          />
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default PaymentForm;
