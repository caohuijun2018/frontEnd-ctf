export const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
    // ...this.getColumnSearchProps('name'),
  },
  {
    title: '解题数',
    dataIndex: 'successfulCount',
    key: 'successfulCount',
    width: '30%',
    // ...this.getColumnSearchProps('age'),
  },
  {
    title: '最近解题时间',
    dataIndex: 'lastTime',
    key: 'lastTime',
    // ...this.getColumnSearchProps('address'),
  },
  {
    title: '积分',
    dataIndex: 'userPoint',
    key: 'userPoint',
  },
  {
    title: '排名',
    dataIndex: 'ranking',
    key: 'ranking',
  },
];
