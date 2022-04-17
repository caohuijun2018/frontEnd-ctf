import { Button, Card, Col, Empty, Input, message, Modal, Row } from 'antd';
import { useState } from 'react';
import { useHistory } from '@modern-js/runtime/router';
import './cards.less';
import left from '../../images/left.png';

interface Topic {
  questionId: number;
  questionTitle: string;
  type: string;
  describe: string;
  point: number;
  isCollection: boolean;
  successfulPersonCount: number;
  url: string;
  flag: string;
}
const TopicCard = (props: { list: Array<Topic> }) => {
  const history = useHistory();
  const { list } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chosenId, setChosenId] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const openModel = (id: number) => {
    setIsModalVisible(true);
    setChosenId(id);
  };
  const handleSubmit = (flag: string) => {
    if (flag === inputValue) {
      message.success('恭喜成功！！');
      setIsModalVisible(false);
    } else {
      message.error('答案错误，请重新提交');
    }
  };
  return (
    <div>
      <Row gutter={24}>
        {list.length === 0 ? (
          <div className="empty-content">
            <Empty description={<span>暂无该类题目</span>} />
          </div>
        ) : (
          list.map(item => (
            <Col span={8} key={item.questionId}>
              <Card
                title={item.questionTitle}
                bordered={false}
                onClick={() => openModel(item.questionId)}>
                <div className="topic-title">{item.describe}</div>
                <div className="all-content">
                  <div className="first">
                    <span className="topic-content">积分： {item.point}</span>
                    <span className="topic-content">类别： {item.type}</span>
                  </div>
                  <div className="topic-content">
                    成功人数：{item.successfulPersonCount}
                  </div>
                </div>
              </Card>
              <Modal
                title={item.questionTitle}
                visible={isModalVisible && item.questionId === chosenId}
                // onOk={handleOk}
                mask={false}
                maskClosable={false}
                footer={[
                  <Button
                    key="back"
                    type="primary"
                    onClick={() => handleSubmit(item.flag)}>
                    提交
                  </Button>,
                ]}
                onCancel={() => setIsModalVisible(false)}>
                <p className="topic_describle">{item.describe}</p>
                <div className="go_to_complete">
                  <a href={item.url} className="topic_url" target="_blank">
                    题目地址
                  </a>
                  <img src={left} className="left-arrow" />
                </div>
                <Input
                  placeholder="请输入 flag"
                  width={100}
                  onChange={e => setInputValue(e.target.value)}
                />
              </Modal>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default TopicCard;
