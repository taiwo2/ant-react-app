import React from 'react';
import { Menu } from 'antd';
import './head.scss'
import { useHistory } from 'react-router';

// import {
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//   } from '@ant-design/icons';

const SideNav = () => {
  const history = useHistory()
  const HandleUserClick = () => {
    history.push(/)
  }
  return (
    <div>
      <div className='head'></div>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key='1' onClick={HandleUserClick}></Menu.Item>
      </Menu>
    </div>
  )
}

export default SideNav
