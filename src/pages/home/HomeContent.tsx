import { Tabs } from 'antd';
import './HomeContent.less';
import TopicCard from './TopicCard';
import { topicList } from '@/mock';

interface Topic {
  questionId: number;
  questionTitle: string;
  type: string;
  describe: string;
  point: number;
  isCollection: boolean;
  successfulPersonCount: number;
}
const HomeContent = () => {
  const { TabPane } = Tabs;
  // 获得目标类型的所有题目
  const handleList = (list: Array<Topic>, type: string) => {
    const target = list.filter(item => item.type === type);
    return target;
  };
  // const topicList: Array<Topic> = [];
  return (
    <div className="content-tab">
      <Tabs type="card" tabBarStyle={{ border: 'none' }}>
        <TabPane tab="全部题目" key="1">
          <TopicCard list={topicList} />
        </TabPane>
        <TabPane tab="Web" key="2">
          <TopicCard list={handleList(topicList, 'Web')} />
        </TabPane>
        <TabPane tab="Crypto" key="3">
          <TopicCard list={handleList(topicList, 'Crypto')} />
        </TabPane>
        <TabPane tab="test" key="4">
          <TopicCard list={handleList(topicList, 'test')} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default HomeContent;