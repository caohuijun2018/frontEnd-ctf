import { Button, Input, Space, Table } from 'antd';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import styled from '@modern-js/runtime/styled';
import HomeHeader from '../home/HomeHeader';
import { topicList } from '@/mock';

const BackButton = styled(Button)`
  border-radius: 100px;
`;
const Index = () => {
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
    // {
    //   title: 'ID',
    //   dataIndex: 'questionId',
    //   key: 'questionId',
    //   width: '10%',
    // },
    {
      title: '??????',
      dataIndex: 'questionTitle',
      key: 'questionTitle',
      width: '20%',
      ...getColumnSearchProps('questionTitle'),
    },
    {
      title: '??????',
      dataIndex: 'type',
      key: 'type',
      ...getColumnSearchProps('type'),
    },
    {
      title: '????????????',
      dataIndex: 'tryPersonCount',
      key: 'tryPersonCount',
    },
    {
      title: '????????????',
      dataIndex: 'successfulPersonCount',
      key: 'successfulPersonCount',
    },
  ];
  return (
    <>
      <HomeHeader defaultValue="topicRanklist" />
      <div className="userlist">
        {/* <BackButton style={{ position: 'relative', top: ' -70px' }} href="/">
          <LeftOutlined />
        </BackButton> */}

        <Table columns={columns} dataSource={topicList} />
      </div>
    </>
  );
};

export default Index;
