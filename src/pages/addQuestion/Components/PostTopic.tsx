import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { DOMAIN } from '@/constants';
import './index.less';

const PostTopic = () => {
  const onFinish = async (values: any) => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/message/addNotice`,
      data: {
        title: values.title,
        content: values.content,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('发布成功！');
        form.resetFields();
      }
    });
  };
  const { TextArea } = Input;
  const [form] = Form.useForm();
  return (
    <div className="formContent">
      <Form onFinish={onFinish} form={form}>
        <Form.Item name="title" label="题目">
          <Input />
        </Form.Item>
        <Form.Item name="content" label="描述">
          <TextArea rows={4} maxLength={100} showCount />
        </Form.Item>
        <Form.Item name="type" label="类型">
          <Input />
        </Form.Item>
        <Form.Item name="point" label="积分">
          <Input />
        </Form.Item>
        <Form.Item name="address" label="题目地址">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
          <Button type="primary" htmlType="submit">
            发布
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostTopic;
