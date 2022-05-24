/* eslint-disable max-params */
import { Layout, Menu, MenuProps } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { useHistory } from '@modern-js/runtime/router';
import logo from '../../../components/images/logo.jpg';
import './index.less';
import TableList from './tableList';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const LayoutItem = () => {
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();

  const onCollapse = (tar: boolean) => {
    setCollapsed(tar);
  };

  const items: MenuItem[] = [
    getItem('数据', '1', <PieChartOutlined />),
    getItem('题目', '2', <DesktopOutlined />),
  ];

  const hanldeOnclick = (item: { key: string }) => {
    const { key } = item;
    if (Number(key) === 1) {
      history.push('/admin');
    } else if (Number(key) === 2) {
      history.push('./addQuestion');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible={true} collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <img
            src={logo}
            width={135}
            style={{ margin: '0 0 0 35px' }}
            className="logoImage"
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['2']}
          mode="inline"
          items={items}
          onClick={hanldeOnclick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}>
            <TableList />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutItem;
