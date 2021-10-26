import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import List from '../components/pages/List';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import FormApp from '../components/pages/FormApp';
import SideNav from '../components/layouts/SideNav';
import { Layout } from 'antd';
const { Header, Sider, Content} = Layout;
const ApplicationRoutes = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Router>
      <Layout>
          <Sider trigger={null} collapsible collapsed={collapse}>
            <SideNav />
          </Sider>
          <Layout>
            <Header className="siteLayoutBackground" style={{padding: 0, background: "#001529"}}>
                      {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                          className: 'trigger',
                          onClick: handleToggle,
                          style: {color: "#fff"}
                      })}
            </Header>
            <Content 
              style={{margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
              <Switch>
                <Route exact path={'/list'} component={List}/>
                <Route exact path={'/list'} component={FormApp}/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
    </Router>
  ) 
}

export default ApplicationRoutes;