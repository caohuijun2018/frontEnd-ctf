import React, { useRef, useEffect, useState } from 'react';
import { Card, Avatar, Col, Row, Tooltip } from 'antd';
import axios from 'axios';
import UserSpeed from './userSpeed';
import UserLine from './UserLine';
import flower from '@/images/flower.png';
import mushroom from '@/images/mushroom.png';
import pinecone from '@/images/pinecone.png';
import cactus from '@/images/cactus.png';

const Center = () => {
  const [source, setSource] = useState();

  const getSource = async () => {
    await axios
      .get(`http://127.0.0.1:4523/mock/1020365/userMessage?userId=caohuijun`)
      .then(res => {
        setSource(res.data);
      });
  };
  useEffect(() => {
    getSource();
  }, []);
  return (
    <div className="center-content">
      <h2 style={{ margin: '0 0 20px 0px' }}>个人信息</h2>
      <div className="data-content">
        <Row
          gutter={24}
          style={{ margin: '40px 0 50px 0' }}
          className="userMessage">
          <Col
            span={12}
            style={{ padding: '100px 150px 0px 300px' }}
            className="first">
            <Row style={{ margin: '0 0 20px 0' }}>
              <img
                src={flower}
                width={30}
                height={30}
                className="messageLogo"
              />
              <div className="message">{source?.userID}</div>
            </Row>
            <Row style={{ margin: '0 0 20px 0' }}>
              <img
                src={pinecone}
                width={30}
                height={30}
                className="messageLogo"
              />
              <div className="message">{source?.nickName}</div>
            </Row>
            <Row style={{ margin: '0 0 20px 0' }}>
              <img
                src={cactus}
                width={30}
                height={30}
                className="messageLogo"
              />
              <div className="message">{source?.mobile}</div>
            </Row>
            <Row style={{ margin: '0 0 20px 0' }}>
              <img
                src={mushroom}
                width={30}
                height={30}
                className="messageLogo"
              />
              <div className="message">
                {source?.information
                  ? source?.information
                  : '该用户很懒，什么都没有留下～～'}
              </div>
            </Row>
          </Col>
          <Col
            span={12}
            style={{ padding: '0 20px 0 92px' }}
            className="second">
            <UserSpeed />
          </Col>
        </Row>
        <div className="line">
          <UserLine />
        </div>
      </div>
    </div>
  );
};
export default Center;
