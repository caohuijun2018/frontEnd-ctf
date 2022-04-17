import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useHistory } from '@modern-js/runtime/router';
import './index.less';
import { useModel } from '@modern-js/runtime/model';
import allModel from '@/api/store';

const Login = () => {
  const history = useHistory();
  const [state, actions] = useModel(allModel);
  const onFinish = async (values: any) => {
    await axios({
      method: 'post',
      url: 'http://localhost:9090/api/user/login',
      data: {
        userID: values.username,
        password: values.password,
      },
    })
      .then(res => {
        const { success } = res.data.entity;
        if (success) {
          message.success('登陆成功！');
          actions.setLogin(true);
          setTimeout(() => {
            history.push('/');
          }, 1000);
        }
      })
      .catch(_ => {
        message.error('登陆失败，请重新登陆！');
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <div className="login-content">
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '用户名不得为空！' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '密码不得为空!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
