import { Button, Input, Space, Table } from 'antd';
import { SetStateAction, useState } from 'react';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Link } from '@modern-js/runtime/router';
import { QuestionList } from '@/mock';

const TopicList = () => {
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
  const columns = [
    {
      title: 'ID',
      dataIndex: 'questionId',
      key: 'questionId',
      width: '10%',
    },
    {
      title: '题目',
      dataIndex: 'questionTitle',
      key: 'questionTitle',
      width: '20%',
      ...getColumnSearchProps('questionTitle'),
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      ...getColumnSearchProps('type'),
    },
    {
      title: '尝试人数',
      dataIndex: 'tryPersonCount',
      key: 'tryPersonCount',
    },
    {
      title: '成功人数',
      dataIndex: 'successfulPersonCount',
      key: 'successfulPersonCount',
    },
  ];
  return (
    <>
      <div className="userlist">
        <Button
          style={{ position: 'relative', top: ' -70px' }}
          type="primary"
          href="/">
          <LeftOutlined />
        </Button>
        <Table columns={columns} dataSource={QuestionList} />
      </div>
    </>
  );
};

export default TopicList;
