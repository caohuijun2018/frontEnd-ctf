/* eslint-disable no-nested-ternary */
import { Button, message, Popconfirm, Table, Tag } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import logo from '../../../components/images/logo.jpg';
import moment from 'moment';
import UserLine from './line';
// import { DOMAIN } from '@/constants';
const DOMAIN = 'http://localhost:8080/api'
const TableList = () => {
  const [source, setSource] = useState([]);
  const handleComfirm = async (text, record) => {
    // 通过
    await axios({
      method: 'post',
      url: `${DOMAIN}/admin/verifyMessage`,
      data: {
        id: `${record.ID}`,
        verify: true,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('已通过');
        getSource();
      }
    });
  };
  const handleReduseComfirm = async record => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/admin/verifyMessage`,
      data: {
        id: `${record.ID}`,
        verify: false,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('已拒绝');
        getSource();
      }
    });
  };
  const getSource = async () => {
    await axios.get(`${DOMAIN}/message/board?is_verify=false`).then(res => {
      if (res.data.entity.success) {
        setSource(res.data.entity.data);
      }
    });
  };
  useEffect(() => {
    getSource();
  }, []);
  return (
    <div className="real-content">
      <UserLine />
    </div>
  );
};

export default TableList;
