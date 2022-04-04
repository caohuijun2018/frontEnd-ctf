import React, { useRef, useEffect } from 'react';
import { Bar, Pie } from '@antv/g2plot';
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Card, Avatar, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import UserSpeed from './userSpeed';
import Line from './line';
import UserLine from './line';

const Center = () => {
  return (
    <div className="center-content">
      <h2 style={{ margin: '0 0 20px 0px' }}>个人信息</h2>
      <div className="data-content">
        <Row gutter={24} style={{ margin: '0 0 50px 0' }}>
          <Col span={12} style={{ padding: '0 20px 0 92px' }} className="first">
            <Card
              style={{ width: 300, height: '100%' }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="小风暖"
                description={
                  <div>
                    <h5>{'总积分： 100'}</h5>
                  </div>
                }
              />
            </Card>
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
