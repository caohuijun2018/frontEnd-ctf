import { Button, Checkbox, Form, Input, message } from 'antd';
import { useHistory } from '@modern-js/runtime/router';
import axios from 'axios';
import './index.less';

const Register = () => {
  const history = useHistory();
  const onFinish = async (values: any) => {
    await axios({
      method: 'post',
      url: 'http://localhost:9090/api/user/register',
      data: {
        userID: values.username,
        password: values.password,
        username: values.nickName,
      },
    })
      .then(res => {
        const { success } = res.data.entity;
        if (success) {
          message.success('注册成功！');
          setTimeout(() => {
            history.push('/login');
          }, 1000);
        }
      })
      .catch(_ => {
        message.error('注册失败，请重新注册！');
      });
    // console.log('Success:', values);
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
            label="昵称"
            name="nickName"
            rules={[{ required: true, message: '昵称不得为空！' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
            hasFeedback={true}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback={true}
            rules={[
              {
                required: true,
                message: '请再次输入密码',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('两次输入的密码不匹配，请重新输入'),
                  );
                },
              }),
            ]}>
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
export default Register;
