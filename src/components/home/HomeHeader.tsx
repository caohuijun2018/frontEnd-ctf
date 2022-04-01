import { Button, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import logo from '../images/logo.jpg';

import './index.less';

const HomeHeader = () => {
  return (
    <Header className="home-header">
      <div className="logo">
        <img className="img" src={logo} />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        className="header">
        <Menu.Item key="center">赛事中心</Menu.Item>
        <Menu.Item key="topicRanklist">题目排行榜</Menu.Item>
        <Menu.Item key="userRanklist">用户排行榜</Menu.Item>
        <Menu.Item key="messageBook">留言板</Menu.Item>
        <Menu.Item key="notice">公告</Menu.Item>
      </Menu>
      <Button size="small" type="primary" className="login-button">
        登陆
      </Button>
      <Button size="small" type="primary" className="register-button">
        注册
      </Button>
    </Header>
  );
};

export default HomeHeader;
