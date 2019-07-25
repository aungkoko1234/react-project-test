import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon, Input, Col, Row, DatePicker, Select,Popover,List,Tabs } from 'antd';
import SelectComponent from './SelectComponent';
import PlaceComponent from './PlaceComponent';
import {hotelData} from '../data';
const { Header, Content, Footer } = Layout;
const { Option } = Select;
const dateFormat = "DD/MMMM/YYYY";
const { TabPane } = Tabs;

class Hotel extends Component {
    constructor(props){
        super(props);
        this.state ={
            visible:false,
            room:0,
            adult:0,
            child:0
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }
    
    
    handleShow(){

      this.setState({
          visible : !this.state.visible
      })
    }
    handleFocus(){
        console.log("Input is Focused");
        this.setState({
            visible : !this.state.visible
        })
    }
    handleAdd(type){
       this.setState({
           type:this.state[type]++
       })
    }
    handleSub(type){
        this.setState({
            type:(this.state[type]>0)?this.state[type]-- : 0
        })
    }
    handleClose(){
        this.setState({
            visible:false
        })
    }
    render() {
        let content=(
            <Row style={{width:800}}>
              <Col span={20}>
              <Tabs  defaultActiveKey="1" tabPosition={"left"} >
                 <TabPane tab={"Popular Cities"} key={1}>
                     <Row>
                         <Col span={12}>
                            <List >
                                <List.Item>Yangon</List.Item>
                                <List.Item>Bago</List.Item>
                                <List.Item>Mawlamyaing</List.Item>
                                <List.Item>Bate</List.Item>
                                <List.Item>PharAn</List.Item>
                            </List>
                         </Col>
                         <Col span={12}>
                         <List>
                                <List.Item>Mandalay</List.Item>
                                <List.Item>Sagaing</List.Item>
                                <List.Item>Magway</List.Item>
                                <List.Item>Bagan</List.Item>
                                <List.Item>Naypyitaw</List.Item>
                        </List>
                         </Col>
                     </Row>
                 </TabPane>
                 <TabPane tab={"Yagon"} key={2}>
                     <Row>
                         <Col span={12}>
                            <List >
                                <List.Item>Tamwe</List.Item>
                                <List.Item>Pabedan</List.Item>
                                <List.Item>Lathar</List.Item>
                                <List.Item>KaukTadar</List.Item>
                                <List.Item>Yakin</List.Item>
                            </List>
                         </Col>
                         <Col span={12}>
                         <List>
                                <List.Item>San Chaung</List.Item>
                                <List.Item>Bahan</List.Item>
                                <List.Item>Hlaing</List.Item>
                                <List.Item>Insein</List.Item>
                        </List>
                         </Col>
                     </Row>
                 </TabPane>
                 <TabPane tab={"Mandalay"} key={3}>
                     <Row>
                         <Col span={12}>
                            <List >
                                <List.Item>Aung Myay Thar Zan</List.Item>
                                <List.Item>Chanmyathazi</List.Item>
                            </List>
                         </Col>
                         <Col span={12}>
                         <List>
                                <List.Item>Bagan</List.Item>
                                <List.Item>Nyaung Oo</List.Item>
                        </List>
                         </Col>
                     </Row>
                 </TabPane>
             </Tabs>
             </Col>  
              
            </Row>

        )
        const title=(
            <Row>
                <Col span={20}>
                Type in keywords to search or select from below:
                </Col>
                <Col span={4}>
                <Icon type="close" onClick={()=>this.handleClose()}/>
                </Col>
            </Row>
        )
        return (
            <Content style={{ margin: '0 16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Row>
                        <Col span={20}>
                            <p>Where Do You Want To Go?</p>
                            {/* <Popover content={content} placement="bottomLeft"
                            title={title} visible={this.state.visible}>
                            <Input type="text" placeholder="City,Hotels,Places to Go" onFocus={()=>this.handleFocus()}/>
                            </Popover> */}
                            <PlaceComponent placeholder={"City,Hotel,Place go"} dataSource={hotelData} type={"hotels"}/>

                            <Row>
                                <Col span={6}>
                                    <p>Check-In</p>
                                    <DatePicker defaultValue={moment('10 July 2019', dateFormat)} format={dateFormat} />
                                </Col>
                                <Col span={6}>
                                    <p>Check-Out</p>
                                    <DatePicker defaultValue={moment('10 July 2019', dateFormat)} format={dateFormat} />
                                </Col>
                                <Col span={8}>
                                    <p>Guest</p>
                                    <SelectComponent title={"Guest"} field={["room","adult","child"]} type={"hotel"}/>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}
export default Hotel;