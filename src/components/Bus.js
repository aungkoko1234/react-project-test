import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button, Input, DatePicker, Select,List,Popover } from 'antd';
import SelectComponent from './SelectComponent';
import DestinationComponent from './DestinationComponent';
const { Header, Content, Footer } = Layout;
const { Option } = Select;
const dateFormat = "DD/MMMM/YYYY";
class Bus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roundTrip: false,
            visibleFrom: false,
            visibleTo : false,
            dataSource :[
                {
                    id:1,
                    name:"Yangon",
                    isPopulared:true,
                },
                {
                    id:2,
                    name:"Mandalay",
                    isPopulared:true,
                },
                {
                    id:3,
                    name:"Bagan",
                    isPopulared:true,
                },
                {
                    id:4,
                    name:"Magway",
                    isPopulared:false,
                },
                {
                    id:5,
                    name:"Minbu",
                    isPopulared:false,
                },
                {
                    id:6,
                    name:"Pathein",
                    isPopulared:false,
                },
                {
                    id:7,
                    name:"Yaynan Chaung",
                    isPopulared:false,
                },
                {
                    id:8,
                    name:"Bago",
                    isPopulared:true,
                }
            ],
            headings:["Popular Destination","Others Destination"],
            type:"bus"
        }
        this.handleOneWay = this.handleOneWay.bind(this);
        this.handleRoundTrip = this.handleRoundTrip.bind(this);
        this.handleFocusFrom = this.handleFocusFrom.bind(this);
        this.handleFocusTo = this.handleFocusTo.bind(this);
        this.handleCloseTo = this.handleCloseTo.bind(this);
        this.handleCloseFrom = this.handleCloseFrom.bind(this); 
    }
    handleRoundTrip() {
        this.setState({
            roundTrip: true
        })
    }
    handleOneWay() {
        this.setState({
            roundTrip: false
        })
    }
    handleFocusFrom() {
        console.log("Input is Focused");
        this.setState({
            visibleTo: false,
            visibleFrom: !this.state.visibleFrom
        })
    }
    handleFocusTo(){
        console.log("Input is Focused");
        this.setState({
            visibleTo : !this.state.visibleTo,
            visibleFrom:false
        })
    }
    handleCloseFrom() {
        this.setState({
            visibleFrom: false
        })
    }
    handleCloseTo() {
        this.setState({
            visibleTo: false
        })
    }
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Row>
                        <Col span={10} style={{ padding: "5px" }}>
                            <Button type="primary" block onClick={() => this.handleOneWay()}>One Way</Button>
                            <p>From</p>
                            <DestinationComponent placeholder="Please Enter Origin" dataSource={this.state.dataSource} headings={this.state.headings} type={this.state.type}/>
                        </Col>
                        <Col span={10} style={{ padding: "5px" }}>
                            <Button type="primary" block onClick={() => this.handleRoundTrip()}headings={this.state.headings}>Round Trip</Button>
                            <p>To</p>
                            <DestinationComponent placeholder="Please Enter Destination" dataSource={this.state.dataSource} headings={this.state.headings} type={this.state.type}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} style={{ padding: "5px" }}>
                            <p>Depart Date</p>
                            <DatePicker defaultValue={moment('10 July 2019', dateFormat)} format={dateFormat} />
                        </Col>
                        <Col span={6} style={{ padding: "5px" }}>
                            <p>Return Date</p>
                            <DatePicker defaultValue={moment('10 July 2019', dateFormat)} format={dateFormat} disabled={!this.state.roundTrip} />
                        </Col>
                        <Col span={8} style={{ padding: "5px" }}>
                        <p>Travelers</p>   
                        <SelectComponent title={"Add Travelers"} field={["adult","infant"]}/> 
                        </Col>
                          
                    </Row>
                </div>
            </Content>
        )
    }
}
export default Bus;