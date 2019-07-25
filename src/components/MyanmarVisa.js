import React,{Component} from 'react';
import moment from 'moment';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon,Row,Col,Button,Input,DatePicker,Select } from 'antd';
import SelectComponent from './SelectComponent';
const { Header, Content, Footer} = Layout;
const { Option } = Select;
const dateFormat = "DD/MMMM/YYYY";
class MyanmarVisa extends Component{
    constructor(props){
        super(props);
        this.state={
            countries:[],
            selectedCountry:'Select Country'
        }
        this.selectCountry = this.selectCountry.bind(this);
    }
    componentDidMount(){
        this.setState({
            countries :["Albania","American","England","France","Italy","Japan","Thai"]
        })
    }
    selectCountry(value){
        this.setState({
            selectedCountry:value
        })
    }
    render(){
        return (
            <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Row>
                    <Col span={8} style={{padding:"5px"}}>
                        <p>First Name</p>
                        <Input type="text" placeholder="First Name"/>
                    </Col>
                    <Col span={8} style={{padding:"5px"}}>
                        <p>Last Name</p>
                        <Input type="text" placeholder="Last Name"/>
                    </Col>
                    <Col span={4} style={{padding:"5px"}}>
                        <p>Gender</p>
                        <Select defaultValue="Select Gender" style={{width:"150px"}}>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Others</Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={5} style={{padding:"5px"}}>
                     <p>Nationality</p>
                        <Select defaultValue={this.state.selectedCountry}  style={{width:"200px"}} onSelect={()=>this.selectCountry()}>
                            {
                                this.state.countries.map(country=>{
                                    return <Option value={country}>{country}</Option>
                                })
                            }
                        </Select>
                    </Col>
                    <Col span={5} style={{padding:"5px"}}>
                        <p>Date of Birth</p>
                        <DatePicker defaultValue={moment('10 July 2019', dateFormat)} format={dateFormat} />
                    </Col>
                </Row>
            </div>
          </Content>
        )
    }
}
export default MyanmarVisa;