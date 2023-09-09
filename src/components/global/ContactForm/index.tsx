'use client'
import React from 'react';
import { Form, Input } from 'antd';
import { ButtonShared } from '..';
import { ButtonType } from '../ButtonShared/Index';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
  color: 'white'
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
        size='large'
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: '100%' }}
      >
        <Form.Item
          name={'name'}
          label="Họ Và Tên"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input placeholder='Họ và tên' />
        </Form.Item>
        <Form.Item
          name={'email'}
          label="Email"
          rules={[{ type: 'email' }]}
        >
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item
          name={"phoneNumber"}
          label="Số Điện Thoại"
        >
          <Input className='w-full' placeholder='Số Điện Thoại' />
        </Form.Item>
        <Form.Item name={"address"} label="Địa Chỉ">
          <Input placeholder='Địa Chỉ'/>
        </Form.Item>
        <Form.Item name={'note'} label="Ghi Chú">
          <Input.TextArea rows={5} placeholder='Ghi Chú' />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <ButtonShared className='!text-[20px] !px-[24px]' htmlType='submit' size={ButtonType.MEDIUM} content="Gửi" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
