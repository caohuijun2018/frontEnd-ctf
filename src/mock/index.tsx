export interface TopicList {
  questionId: number;
  questionTitle: string;
  type: string;
  describe: string;
  point: number;
  isCollection: boolean;
  successfulPersonCount: number;
  url?: string;
  flag?: string;
  tryPersonCount?: number;
}
export const topicList: Array<TopicList> = [
  {
    questionId: 10,
    questionTitle: 'key 在哪里？',
    type: 'Web',
    describe: 'key就在这里中，你能找到他吗？',
    point: 200,
    isCollection: true,
    successfulPersonCount: 20,
    tryPersonCount: 30,
    url: 'http://lab1.xseclab.com/base1_4a4d993ed7bd7d467b27af52d2aaa800/index.php',
    flag: 'jflsjklejflkdsjfklds',
  },
  {
    questionId: 11,
    questionTitle: '登陆',
    type: 'SQL',
    describe: '能成功找到登陆密码吗？',
    point: 200,
    isCollection: false,
    successfulPersonCount: 2,
    tryPersonCount: 10,

    url: 'http://lab1.xseclab.com/sqli2_3265b4852c13383560327d1c31550b60/index.php',
    flag: 'jflsjklejflkdsjfklds',
  },
  {
    questionId: 12,
    questionTitle: '上传图片',
    type: 'Web',
    describe: '请上传一张jpg格式的图片',
    point: 200,
    isCollection: true,
    successfulPersonCount: 2,
    tryPersonCount: 10,

    url: 'http://lab1.xseclab.com/upload3_67275a14c1f2dbe0addedfd75e2da8c1/',
  },
  {
    questionId: 13,
    questionTitle: 'key又又找不到了',
    type: 'Web',
    describe: '你在能帮忙找找 key 吗？',
    point: 200,
    isCollection: true,
    successfulPersonCount: 2,
    tryPersonCount: 30,

    url: 'http://lab1.xseclab.com/xss1_30ac8668cd453e7e387c76b132b140bb/index.php',
  },
  {
    questionId: 14,
    questionTitle: '是否可以回显',
    type: 'SQL',
    describe: '暂时还没有描述',
    point: 200,
    isCollection: true,
    successfulPersonCount: 0,
    url: 'http://lab1.xseclab.com/sqli5_5ba0bba6a6d1b30b956843f757889552/index.php?start=0&num=1',
    flag: 'myflagishere',
    tryPersonCount: 5,
  },
  {
    questionId: 15,
    questionTitle: '万恶的Cisco',
    type: '解密',
    describe: '请破解该密码 02070D48030F1C2949400 41801181C0C140D0A0A20253A3B',
    point: 300,
    isCollection: true,
    successfulPersonCount: 0,
    flag: 'aishishenmadongxi@admin',
    url: '',
    tryPersonCount: 2,
  },
  {
    questionId: 16,
    questionTitle: '喜欢泡网吧的小明',
    type: '解密',
    describe:
      '小明拿到了他第一个月的薪水，于是这次到了他平时最常去的网吧充了100元办理了一张会员卡，于是乎小明再也不用花钱上网了。',
    point: 400,
    isCollection: true,
    successfulPersonCount: 0,
    url: 'http://lab1.xseclab.com/password2_454a7a7cb7213e14695c022cfb04141c/index.php',
    flag: '',
    tryPersonCount: 3,
  },
  {
    questionId: 17,
    questionTitle: '异常数据',
    type: '解密',
    describe: '这个异常数据你可以得到正确的答案吗 AGV5IULSB3ZLVSE=',
    point: 230,
    isCollection: true,
    successfulPersonCount: 2,
    flag: 'hey!IloveKU!',
    url: '',
    tryPersonCount: 0,
  },
];
export interface RankingList {
  userId: number;
  key: number;
  name: string;
  successfulCount: number;
  lastTime: string;
  userPoint: number;
  ranking: number;
}
export const rankingList = [
  {
    userId: 100,
    key: 100,
    name: '风一样的人',
    successfulCount: 120,
    lastTime: '2021-5-28',
    userPoint: 100,
    ranking: 1,
  },
  {
    userId: 101,
    key: 101,
    name: '小明',
    successfulCount: 12,
    lastTime: '2021-5-28',
    userPoint: 87,
    ranking: 2,
  },
  {
    userId: 102,
    key: 102,
    name: '哈哈哈哈哈',
    successfulCount: 97,
    lastTime: '2021-5-27',
    userPoint: 60,
    ranking: 3,
  },
  {
    userId: 103,
    key: 103,
    name: '风一样的人',
    successfulCount: 87,
    lastTime: '2021-5-28',
    userPoint: 54,
    ranking: 4,
  },
  {
    userId: 104,
    key: 104,
    name: 'fjsfhjksf',
    successfulCount: 77,
    lastTime: '2021-5-1',
    userPoint: 12,
    ranking: 5,
  },
  {
    userId: 105,
    key: 105,
    name: '风一样的人1111',
    successfulCount: 66,
    lastTime: '2021-5-1',
    userPoint: 11,
    ranking: 6,
  },
  {
    userId: 106,
    key: 106,
    name: '小珺',
    successfulCount: 34,
    lastTime: '2021-4-30',
    userPoint: 10,
    ranking: 7,
  },
  {
    userId: 107,
    key: 107,
    name: '小宝',
    successfulCount: 1,
    lastTime: '2021-4-30',
    userPoint: 0,
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
    key: 1007,
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
