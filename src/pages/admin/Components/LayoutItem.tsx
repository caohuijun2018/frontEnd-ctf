/* eslint-disable max-params */
import { Layout, Menu, MenuProps, Button, Form, Modal, Input } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { useHistory } from '@modern-js/runtime/router';
import TextArea from 'antd/lib/input/TextArea';
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
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const [form] = Form.useForm();

  const handleopen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const onCollapse = (tar: boolean) => {
    setCollapsed(tar);
  };

  const handleSubmit = (value: any) => {
    // console.log(value);
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
          defaultSelectedKeys={['1']}
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
            <div className="adminPage">
              <div className="addPage">
                <Button className="postButton" onClick={handleopen}>
                  发布公告
                </Button>
              </div>

              <TableList />
            </div>
          </div>
        </Content>
      </Layout>
      <Modal
        title="发布公告"
        footer={null}
        visible={visible}
        onCancel={handleClose}>
        <Form onFinish={handleSubmit} form={form}>
          <Form.Item
            name="title"
            // label="请输入题目"
            rules={[{ required: true, message: '请输入题目' }]}>
            <Input placeholder="请输入题目" maxLength={20} />
          </Form.Item>
          <Form.Item
            name="content"
            rules={[{ required: true, message: '请输入对商品的评价' }]}>
            <TextArea
              placeholder="请输入评价"
              allowClear={true}
              maxLength={150}
              showCount={true}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};
export default LayoutItem;
