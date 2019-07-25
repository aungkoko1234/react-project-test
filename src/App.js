import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'; 
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import SideBar from './components/Sider';
import Bus from './components/Bus';
import Flight from './components/Flight';
import Hotel from './components/Hotel';
import MyanmarVisa from './components/MyanmarVisa';
import Tour from './components/Tour';
const { Header, Content, Footer} = Layout;
const { SubMenu } = Menu;



function App() {
  return (

        <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter> 
        <SideBar/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Switch>
          <Route exact path="/" component={Hotel}/>
          <Route exact path="/bus" component={Bus}/>
          <Route exact path="/flight" component={Flight}/>
          <Route exact path="/tour" component={Tour}/>
          <Route exact path="/visa" component={MyanmarVisa}/>
          </Switch>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </BrowserRouter> 
      </Layout>
      
     
  );
}

export default App;
