import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button, Input, DatePicker, Select } from 'antd';
import SelectComponent from './SelectComponent';
import DestinationComponent from './DestinationComponent';
const { Header, Content, Footer } = Layout;
const { Option } = Select;
const dateFormat = "DD/MMMM/YYYY";
class Tour extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource:[
                { 
                    id:1,name:"Yangon",inMyanmar:true
                },
                { 
                    id:2,name:"Mandalay",inMyanmar:true
                },
                { 
                    id:3,name:"Bagan",inMyanmar:true
                },
                { 
                    id:4,name:"Myeik",inMyanmar:true
                },
                { 
                    id:5,name:"Nyaung Oo",inMyanmar:true
                },
                { 
                    id:6,name:"Singapore",inMyanmar:false
                },
                { 
                    id:7,name:"Seoul",inMyanmar:false
                },
                { 
                    id:8,name:"Jakatar",inMyanmar:false
                },
                { 
                    id:9,name:"Bejing",inMyanmar:false
                },
                { 
                    id:10,name:"Kyoto",inMyanmar:false
                },
            ],
            headings : ["Top Destination -Myanmar","Top Destiantion -Asia"],
            type:"tour"
        }
    }
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Row>
                        <Col span={20}>
                        <DestinationComponent placeholder="Please Enter Destination" dataSource={this.state.dataSource} headings={this.state.headings} type={this.state.type}/>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"5px"}}>
                        <Col span={10} style={{ padding: "5" }}>
                            <p>Depart Date</p>
                            <DatePicker defaultValue={moment('10 July 2019', dateFormat)} format={dateFormat} />
                        </Col>
                        <Col span={10} style={{ padding: "5" }}>
                            <p>Return Date</p>
                            <DatePicker defaultValue={moment('10 July 2019', dateFormat)} format={dateFormat} />
                        </Col>
                    </Row>
                    <Row>
                    <Col span={10}>
                    <p>Travelers</p>
                    <SelectComponent title={"Add Travelers"} field={["adult","child","infant"]} type={"flight"}/>
                    </Col>    
                    </Row>
                </div>
            </Content>
        )
    }
}
export default Tour;