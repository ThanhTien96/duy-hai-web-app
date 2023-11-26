'use client';
import React from 'react';
import { Form, Input, Typography } from 'antd';
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
type ContactFormProps = {};

const ContactForm = (props: ContactFormProps) => {
  return (
    <div>
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
          label={<Text className='text-white'>Họ Và Tên</Text>}
          rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
        >
          <Input size='middle' placeholder="Họ và tên" />
        </Form.Item>
        <Form.Item className='w-full !text-white'name={'email'} label={<Text className='text-white'>Email</Text>} rules={[{ type: 'email' }]}>
          <Input size='middle' placeholder="Email" />
        </Form.Item>
        <Form.Item
          className="w-full"
          name={'phoneNumber'}
          label={<Text className='text-white'>Số Điện Thoại</Text>}
        >
          <Input size='middle' className="w-full" placeholder="Số Điện Thoại" />
        </Form.Item>
        <Form.Item className="w-full" name={'address'} label={<Text className='text-white'>Địa Chỉ</Text>}>
          <Input size='middle' placeholder="Địa Chỉ" />
        </Form.Item>
        <Form.Item className="w-full" name={'note'} label={<Text className='text-white'>Ghi Chú</Text>}>
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
    </div>
  );
};

export default ContactForm;
