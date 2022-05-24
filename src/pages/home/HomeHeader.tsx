import { NavLink } from '@modern-js/runtime/router';
import { Button, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import logo from '../../components/images/logo.jpg';

import './index.less';

const HomeHeader = (props: { defaultValue: string }) => {
  const { defaultValue } = props;
  return (
    <Header className="home-header">
      <div className="logo">
        <img className="img" src={logo} />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={defaultValue}
        className="header">
        <Menu.Item key="center">
          <NavLink to={'/'} />
          赛事中心
        </Menu.Item>
        <Menu.Item key="topicRanklist">
          <NavLink to={'/topicList'} /> 题目排行榜
        </Menu.Item>
        <Menu.Item key="userRanklist">
          <NavLink to={'/userList'} /> 用户榜单
        </Menu.Item>
        <Menu.Item key="notice">
          <NavLink to={'/bulletins'} />
          公告
        </Menu.Item>
      </Menu>
      {localStorage.getItem('userId') ? (
        <Button
          size="small"
          type="primary"
          className="center-button"
          href="/center">
          个人中心
        </Button>
      ) : (
        // <UserOutlined style={{ width: '50px', heigh: '50px' }} />
        <>
          <Button
            size="small"
            type="primary"
            className="login-button"
            href="/login">
            登陆
          </Button>
          <Button
            size="small"
            type="primary"
            className="register-button"
            href="register">
            注册
          </Button>
        </>
      )}
    </Header>
  );
};

export default HomeHeader;
