export interface TopicList {
  questionId: number;
  questionTitle: string;
  type: string;
  describe: string;
  point: number;
  isCollection: boolean;
  successfulPersonCount: number;
}
export const topicList: Array<TopicList> = [
  {
    questionId: 10,
    questionTitle: 'easy_web',
    type: 'Web',
    describe:
      '这是一道简单的 web 类型题目, 主要是用于训练使用者关于web方面的知识.',
    point: 200,
    isCollection: true,
    successfulPersonCount: 20,
  },
  {
    questionId: 11,
    questionTitle: 'xxxxx',
    type: 'Web',
    describe: '这是一道简单的 web 类型题目',
    point: 200,
    isCollection: false,
    successfulPersonCount: 2,
  },
  {
    questionId: 12,
    questionTitle: 'xxxx',
    type: 'Web',
    describe: '这是一道简单的 web 类型题目',
    point: 200,
    isCollection: true,
    successfulPersonCount: 2,
  },
  {
    questionId: 13,
    questionTitle: 'xxxxx',
    type: 'Crypto',
    describe: '这是一道简单的 web 类型题目',
    point: 200,
    isCollection: true,
    successfulPersonCount: 2,
  },
  {
    questionId: 14,
    questionTitle: 'xxxxx',
    type: 'Web',
    describe: '这是一道简单的 web 类型题目',
    point: 200,
    isCollection: true,
    successfulPersonCount: 2,
  },
  {
    questionId: 15,
    questionTitle: 'xxxxx',
    type: 'Crypto',
    describe: '这是一道简单的 web 类型题目',
    point: 200,
    isCollection: true,
    successfulPersonCount: 2,
  },
  {
    questionId: 16,
    questionTitle: 'xxxxx',
    type: 'Web',
    describe: '这是一道简单的 web 类型题目',
    point: 200,
    isCollection: true,
    successfulPersonCount: 2,
  },
  {
    questionId: 17,
    questionTitle: 'xxxxx',
    type: 'Web',
    describe: '这是一道简单的 web 类型题目',
    point: 200,
    isCollection: true,
    successfulPersonCount: 2,
  },
  {
    questionId: 18,
    questionTitle: 'xxxxx',
    type: 'Web',
    describe: '这是一道简单的 web 类型题目',
    point: 200,
    isCollection: true,
    successfulPersonCount: 2,
  },
  {
    questionId: 19,
    questionTitle: 'xxxxx',
    type: 'Crypto',
    describe: '这是一道简单的 web 类型题目',
    point: 200,
    isCollection: true,
    successfulPersonCount: 2,
  },
];

export const rankingList = [
  {
    userId: 100,
    key: 100,
    name: '风一样的人',
    successfulCount: 120,
    lastTime: '2021-4-1',
    userPoint: 1002,
    ranking: 1,
  },
  {
    userId: 101,
    key: 101,
    name: '小明',
    successfulCount: 12,
    lastTime: '2021-4-9',
    userPoint: 989,
    ranking: 4,
  },
  {
    userId: 102,
    key: 102,
    name: '哈哈哈哈哈',
    successfulCount: 97,
    lastTime: '2021-2-4',
    userPoint: 789,
    ranking: 2,
  },
  {
    userId: 103,
    key: 103,
    name: '风一样的人',
    successfulCount: 87,
    lastTime: '2021--1-3',
    userPoint: 896,
    ranking: 3,
  },
  {
    userId: 104,
    key: 104,
    name: 'fjsfhjksf',
    successfulCount: 77,
    lastTime: '2021-1-1',
    userPoint: 1000,
    ranking: 6,
  },
  {
    userId: 105,
    key: 105,
    name: '风一样的人1111',
    successfulCount: 66,
    lastTime: '2021-2-27',
    userPoint: 1903,
    ranking: 5,
  },
  {
    userId: 106,
    key: 106,
    name: '倒数第二名',
    successfulCount: 34,
    lastTime: '2020-12-31',
    userPoint: 1894,
    ranking: 7,
  },
  {
    userId: 107,
    key: 107,
    name: '我是最后一名',
    successfulCount: 1,
    lastTime: '20212-1',
    userPoint: 300,
    ranking: 8,
  },
];

export const QuestionList = [
  {
    questionId: 1001,
    key: 1002,
    questionTitle: '题目',
    type: 'Web',
    tryPersonCount: 100, // 尝试人数
    successfulPersonCount: 102,
  },
  {
    questionId: 1002,
    key: 1002,
    questionTitle: '题目2',
    type: 'Web',
    tryPersonCount: 100, // 尝试人数
    successfulPersonCount: 102,
  },
  {
    questionId: 1003,
    key: 1003,
    questionTitle: '题目1',
    type: 'Web',
    tryPersonCount: 100, // 尝试人数
    successfulPersonCount: 102,
  },
  {
    questionId: 1004,
    key: 1004,
    questionTitle: '题目19',
    type: 'qqq',
    tryPersonCount: 100, // 尝试人数
    successfulPersonCount: 102,
  },
  {
    questionId: 1005,
    key: 1005,
    questionTitle: '题目11',
    type: 'Web',
    tryPersonCount: 100, // 尝试人数
    successfulPersonCount: 102,
  },
  {
    questionId: 1006,
    key: 1006,
    questionTitle: '题目',
    type: 'hqhq',
    tryPersonCount: 100, // 尝试人数
    successfulPersonCount: 102,
  },
];
