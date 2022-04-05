import { useModel } from '@modern-js/runtime/model';
import { Link, NavLink } from '@modern-js/runtime/router';
import { Button, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import logo from '../../components/images/logo.jpg';
import allModel from '@/api/store';

import './index.less';

const HomeHeader = () => {
  const [state, action] = useModel(allModel);
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
        <Menu.Item key="messageBook">留言板</Menu.Item>
        <Menu.Item key="notice">公告</Menu.Item>
      </Menu>
      {state.login ? (
        <Button
          size="small"
          type="primary"
          className="center-button"
          href="/center">
          个人中心
        </Button>
      ) : (
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
