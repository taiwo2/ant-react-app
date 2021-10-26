import React, { useState, useEffect } from 'react'
import {Table, Row, Col, Button, Typography} from 'antd';
import {useHistory} from 'react-router';
import axios from 'axios';


const { Title} = Typography
const List = () => {

  const history = useHistory();
  const [allData,setAllData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/users`).then(res => {
      setAllData(res.data);
    });
  }, []);
  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Gender',
      dataIndex: 'gender'
    },
    {
      title: 'Review',
      dataIndex: 'review'
    },
  ];
  const data = [{
  }];
allData.map((user: any) => {
    data.push({
     key: user.id,
     username: user.username,
     email: user.email,
     gender: user.gender,
     review: user.review + '%',
   })
   return data;
 });

 const handleClick = () => {
  history.push('/')
}
  return (
    <div>
      <Row gutter={[40,10]}>
        <Col span={18}>
          <Title level={2}>User Title</Title>
        </Col>
        <Col span={6}>
          <Button onClick={handleClick} block>Add users</Button>
        </Col>
      </Row>
      <Row gutter={[40,10]}>
        <Col span={24}>
        <Table columns={columns} dataSource={data}/>
        </Col>
      </Row>
    </div>
  )
}



export default List;
