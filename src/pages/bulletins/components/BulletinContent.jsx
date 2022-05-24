import { useEffect, useState } from 'react';
import axios from 'axios';

import PreAnnouncements from './PreAnnouncements';
import '../index.less';
import TopicNotice from './TopicNotice';
import noticeMessage from '../mock';
// import { DOMAIN } from '@/constants';
const DOMAIN = 'http://localhost:8080/api'

const BulletinContent = () => {
  const [dataSource, setDataSource] = useState(noticeMessage);
  const getSource = async () => {
    await axios.get(`${DOMAIN}/message/notice`).then(res => {
      if (res.data.entity.success) {
        setDataSource(res.data.entity.data);
      }
    });
  };

  useEffect(() => {
    getSource();
  }, []);
  return (
    <div className="layoutContent">
      <TopicNotice noticeMessage={dataSource} />
      <PreAnnouncements noticeMessage={dataSource} />
    </div>
  );
};

export default BulletinContent;
