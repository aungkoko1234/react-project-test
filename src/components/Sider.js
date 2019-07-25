import React,{Component} from 'react';
import '../App.css';
import {BrowserRouter,Link} from 'react-router-dom'; 
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends Component{
    render(){
        return (
            <Sider collapsible collapsed={false}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Link to="/">Hotels</Link>
              </Menu.Item>
              <Menu.Item key="2">
              <Link to="/flight">Flights</Link>
              </Menu.Item>
              <Menu.Item key="3">
              <Link to="/bus">Bus</Link>
              </Menu.Item>
              <Menu.Item key="4">
              <Link to="/tour">Tours</Link>
              </Menu.Item>
              <Menu.Item key="5">
              <Link to="/visa">Myanmar Visa</Link>
              </Menu.Item>
            </Menu>
          </Sider>
        );
    }
}
export default SideBar;