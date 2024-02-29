'use client';
import React from 'react';
import { ConfigProvider, Form, Input, Typography } from 'antd';
import { ButtonShared } from '..';
import { ButtonType } from '../ButtonShared/Index';

const {Text} = Typography;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
  color: 'white',
};

/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};
type ContactFormProps = {
  theme?: "dark" | "light"
};

const ContactForm = ({theme = "dark"}: ContactFormProps) => {
  return (
    <ConfigProvider theme={{
      token: {
        colorText: theme == "light" ? "#000" : "#fff",
        colorPrimary: "#ff8027"
      },
    }}>
      <Form
        size="middle"
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: '100%' }}
      >
        <Form.Item
          className="w-full"
          name={'name'}
          label={"Họ Tên"}
          rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
        >
          <Input size='middle' placeholder="Họ và tên" />
        </Form.Item>
        <Form.Item className='w-full !text-white'name={'email'} label={"Email"} rules={[{ type: 'email' }]}>
          <Input size='middle' placeholder="Email" />
        </Form.Item>
        <Form.Item
          className="w-full"
          name={'phoneNumber'}
          label={"Số Điện Thoại"}
        >
          <Input size='middle' className="w-full" placeholder="Số Điện Thoại" />
        </Form.Item>
        <Form.Item className="w-full" name={'address'} label={"Địa Chỉ"}>
          <Input size='middle' placeholder="Địa Chỉ" />
        </Form.Item>
        <Form.Item className="w-full" name={'note'} label={"Ghi Chú"}>
          <Input.TextArea rows={5} placeholder="Ghi Chú" />
        </Form.Item>
        <Form.Item
          className="w-full"
          wrapperCol={{ ...layout.wrapperCol, offset: 4 }}
        >
          <ButtonShared
            className="!text-[20px] !px-[24px]"
            htmlType="submit"
            size={ButtonType.MEDIUM}
            content="Gửi"
          />
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default ContactForm;
