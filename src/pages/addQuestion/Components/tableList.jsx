import { PlusOutlined, PlusSquareFilled } from '@ant-design/icons';
import { Button, Table, Tooltip } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.less';
import MessageDialog from './messageDialog';

const TableList = () => {
  const [dialogVisile, setDialogVisible] = useState(false);
  const [actionType, setActionType] = useState(1);
  const [changeproduct, setChangeProduct] = useState(null);
  const [source, setSource] = useState([]);
  const getSource = async () => {
    await axios
      .get('http://127.0.0.1:4523/mock/1020365/questionList')
      .then(res => {
        setSource(res.data.data);
      });
  };
  useEffect(() => {
    getSource();
  }, []);

  const handleOpen = (type: string, record) => {
    if (type === 'add') {
      setActionType(1); // 增加
      setChangeProduct(null);
    } else {
      setActionType(2); // 修改
      setChangeProduct(record);
    }
    setDialogVisible(true);
  };

  const handleClose = () => {
    setChangeProduct(null);
    setDialogVisible(false);
  };

  return (
    <div className="real-content">
      <Button
        type="primary"
        className="addButton"
        onClick={() => handleOpen('add', null)}>
        <PlusOutlined />
        发布题目
      </Button>
      <Table dataSource={source} className="basic-table">
        <Table.Column
          title="题目名称"
          dataIndex="questionTitle"
          align="center"
          width={150}
        />
        <Table.Column
          title="题目描述"
          dataIndex="describe"
          width={150}
          align="center"
        />
        <Table.Column title="类型" dataIndex="type" width={85} align="center" />
        <Table.Column
          title="分值"
          dataIndex="point"
          width={100}
          align="center"
        />
        <Table.Column
          title="flag"
          dataIndex="flag"
          width={100}
          align="center"
          render={text => {
            return (
              <Tooltip title={text}>
                <span>xxxxxxxxx</span>
              </Tooltip>
            );
          }}
        />
        <Table.Column
          title="操作"
          align="center"
          dataIndex="operation"
          width={150}
          render={(text, record) => (
            <>
              <Button type="link" onClick={() => handleOpen('chanage', record)}>
                修改
              </Button>
            </>
          )}
        />
      </Table>
      <MessageDialog
        visible={dialogVisile}
        handleClose={handleClose}
        type={actionType}
        message={changeproduct}
        getSource={getSource}
      />
    </div>
  );
};

export default TableList;
