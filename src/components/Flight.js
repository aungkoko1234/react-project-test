import React,{Component} from 'react';
import moment from 'moment';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon,Row,Col,Button,Input,DatePicker,Select } from 'antd';
import SelectComponent from './SelectComponent';
import PlaceComponent from './PlaceComponent';
import {airportData} from '../data';
const { Header, Content, Footer} = Layout;
const { Option } = Select;
const dateFormat = "DD/MMMM/YYYY";
class Flight extends Component{
    constructor(props){
        super(props);
        this.state={
            roundTrip:false
        }
        this.handleRoundTrip= this.handleRoundTrip.bind(this);
        this.handleOneWay = this.handleOneWay.bind(this);
    }
    handleRoundTrip(){
       this.setState({
           roundTrip : true
       })
    }
    handleOneWay(){
        this.setState({
            roundTrip : false
        })
    }
    render(){
        return(
            <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
             <Row >
                 <Col span={10} style={{padding:"5px"}}>
                   <Button type="primary" block onClick={()=>this.handleOneWay()}>One Way</Button>
                   <p>From</p>
                    <PlaceComponent placeholder={"Please Enter Origin"} dataSource={airportData} type={"airports"}/>
                    <p>Depart Date</p>
                    <DatePicker defaultValue={moment('10 July 2019', dateFormat)} format={dateFormat} />
                    <p>Travelers</p>
                    <SelectComponent title={"Add Travelers"} field={["adult","child","infant"]} type={"flight"}/>
                 </Col>
                 <Col span={10} style={{padding:"5px"}}>
                 <Button type="primary" block onClick={()=>this.handleRoundTrip()}>Round Trip</Button>
                 <p>To</p>
                 <PlaceComponent placeholder={"Please Enter Destination"} dataSource={airportData} type={"airports"}/>
                 <p>Return Date</p>
                 <DatePicker defaultValue={moment('10 July 2019', dateFormat)} format={dateFormat} disabled={!this.state.roundTrip}/>
                 <p>Class</p>
                 <Select defaultValue="Economy" style={{ width: 200 }}>
                     <Option value="economy">Economy</Option>
                     <Option value="premium economy">Premium Economy</Option>
                     <Option value="business">Business</Option>
                     <Option value="first">First</Option>
                 </Select>
                 </Col>
             </Row>
            </div>
          </Content>
        )
    }
}
export default Flight;