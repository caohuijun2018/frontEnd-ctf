import { Card, Col, Empty, Row } from 'antd';
import './cards.less';

interface Topic {
  questionId: number;
  questionTitle: string;
  type: string;
  describe: string;
  point: number;
  isCollection: boolean;
  successfulPersonCount: number;
}
const TopicCard = (props: { list: Array<Topic> }) => {
  const { list } = props;
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
              <Card title={item.questionTitle} bordered={false}>
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
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default TopicCard;
