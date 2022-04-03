import Layout, { Content } from 'antd/lib/layout/layout';
import HomeContent from './HomeContent';
import HomeHeader from './HomeHeader';
import './index.less';

const Home = () => {
  return (
    <Layout>
      <HomeHeader />
      <Content className="content">
        <HomeContent />
      </Content>
    </Layout>
  );
};

export default Home;
