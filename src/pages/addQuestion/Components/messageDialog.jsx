import { UpCircleOutlined } from '@ant-design/icons';
import { Drawer, Form, Button, Input, Space, Upload, Radio } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { DOMAIN } from '@/constants';

const MessageDialog = props => {
  const { visible, handleClose, type, message, getSource } = props;
  const [form] = Form.useForm();
  if (type !== 2) {
    form.resetFields(null); // 添加
  } else if (message) {
    form.setFieldsValue(message); // 修改
  }

  const drawerClose = () => {
    form.resetFields(null);
    handleClose();
  };
  const handleSubmit = async value => {
    if (type === 2) {
      editSubmit(value);
    } else {
      addSubmit(value);
    }
  };

  const editSubmit = async value => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/seller/editProduct`,
      data: {
        productId: message.productId,
        productName: value.productName,
        productIntro: value.productIntro,
        categoryId: Number(value.categoryId),
        ProductCoverImg:
          value.pic === undefined
            ? message.productCoverImg
            : value.pic.fileList[0].response.entity.data,
        productBanner:
          value.pic === undefined
            ? message.productCoverImg
            : value.pic.fileList[0].response.entity.data,
        originalPrice: Number(value.originalPrice),
        sellingPrice: Number(value.sellingPrice),
        stockNum: Number(value.stockNum),
        click_num: message.click_num,
        createUser: message.createUser,
        updateUser: localStorage.getItem('userId'),
        productDetailContent: value.productDetailContent,
      },
    }).then(res => {
      form.setFieldsValue(null);
      if (res.data.entity.success) {
        handleClose();
        getSource();
      }
    });
  };

  const addSubmit = async value => {
    await axios({
      method: `post`,
      url: `${DOMAIN}/seller/addProduct`,
      data: {
        productName: value.productName,
        productIntro: value.productIntro,
        categoryId: Number(value.categoryId),
        ProductCoverImg: value.pic.fileList[0].response.entity.data,
        productBanner: value.pic.fileList[0].response.entity.data,
        originalPrice: Number(value.originalPrice),
        sellingPrice: Number(value.sellingPrice),
        stockNum: Number(value.stockNum),
        updateUser: localStorage.getItem('userId'),
        click_num: 1,
        createUser: localStorage.getItem('userId'),
        productDetailContent: value.productDetailContent,
      },
    }).then(res => {
      form.setFieldsValue(null);
      if (res.data.entity.success) {
        handleClose();
        getSource();
      }
    });
  };
  return (
    <div>
      <Drawer
        title={type === 1 ? '添加' : '修改'}
        onClose={drawerClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={handleClose}>取消</Button>
          </Space>
        }>
        <Form
          layout="vertical"
          hideRequiredMark={true}
          onFinish={handleSubmit}
          form={form}>
          <Form.Item
            name="questionTitle"
            label="题目名称"
            rules={[{ required: true, message: '请输入名称' }]}>
            <Input placeholder="请输入名称" />
          </Form.Item>
          <Form.Item
            name="describe"
            label="题目描述"
            rules={[{ required: true, message: '请输入描述' }]}>
            <Input placeholder="请输入描述" />
          </Form.Item>
          <Form.Item
            name="type"
            label="类型"
            rules={[{ required: true, message: '请输入类型' }]}>
            <Input placeholder="请输入类型" />
          </Form.Item>
          <Form.Item
            name="point"
            label="分值"
            rules={[{ required: true, message: '请输入分值' }]}>
            <Input placeholder="请输入分值" />
          </Form.Item>
          <Form.Item
            name="flag"
            label="flag"
            rules={[{ required: true, message: '请输入flag' }]}>
            <Input placeholder="请输入flag" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default MessageDialog;
