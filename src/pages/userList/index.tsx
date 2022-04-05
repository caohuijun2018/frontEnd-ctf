import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import './index.less';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { SetStateAction, useState } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { ColumnsType } from 'antd/lib/table';
import fooModel from './api';
import { rankingList, TopicList } from '@/mock';

const UserList = () => {
  const [state, action] = useModel(fooModel);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const handleSearch = (
    selectedKeys: SetStateAction<string>[],
    confirm: () => void,
    dataIndex: SetStateAction<string>,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}>
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}>
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (
      value: string,
      record: { [x: string]: { toString: () => string } },
    ) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    render: (text: any) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape={true}
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const change = (pageIndex: number) => {
    action.setCurrent(pageIndex);
  };
  const pagination = {
    total: state.total,
    current: state.current,
    pageSize: state.pageSize,
    onChange: () => change,
  };
  const columns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: '解题数',
      dataIndex: 'successfulCount',
      key: 'successfulCount',
      width: '30%',
    },
    {
      title: '最近解题时间',
      dataIndex: 'lastTime',
      key: 'lastTime',
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
  return (
    <div className="userlist">
      <Button
        style={{ position: 'relative', top: ' -70px' }}
        type="primary"
        href="/">
        <LeftOutlined />
      </Button>
      <Table
        columns={columns}
        dataSource={rankingList}
        pagination={pagination}
      />
    </div>
  );
};

export default UserList;
