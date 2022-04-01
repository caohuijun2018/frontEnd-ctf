import { Button, Menu } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import HomeHeader from './HomeHeader';
import './index.less';

const Home = () => {
  return (
    <Layout className="logo">
      <Header>
        <Button type="primary">hah</Button>
        {/* <Menu>
          <Menu.Item key="center">中心</Menu.Item>
          <Menu.Item key="userRanklist">用户排行榜</Menu.Item>
          <Menu.Item key="topicCenter">题目排行榜</Menu.Item>
        </Menu> */}
        {/* <Menu theme="dark" mode="horizontal">
          <Menu.Item key="center">中心</Menu.Item>
          <Menu.Item key="userRanklist">用户排行榜</Menu.Item>
          <Menu.Item key="topicCenter">题目排行榜</Menu.Item>
        </Menu> */}
      </Header>
      <Content>content</Content>
    </Layout>
  );
};

export default Home;
