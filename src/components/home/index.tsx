import Layout, { Content } from 'antd/lib/layout/layout';
import HomeHeader from './HomeHeader';
import './index.less';

const Home = () => {
  return (
    <Layout className="layout">
      <HomeHeader />
      <Content>content</Content>
    </Layout>
  );
};

export default Home;
