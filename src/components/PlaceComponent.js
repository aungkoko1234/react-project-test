import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon, Input, Col, Row, DatePicker, Select,Popover,List,Tabs } from 'antd';
import {hotelData} from '../data';
const { Header, Content, Footer } = Layout;
const { Option } = Select;
const dateFormat = "DD/MMMM/YYYY";
const { TabPane } = Tabs;

class PlaceComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            dataSource:[],
            inputValue:'',
            search:false
        }
        this.handleFocus = this.handleFocus.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleFocus(){
        console.log("Input is Focused");
        this.setState({
            visible : !this.state.visible
        })
    }
    handleClose(){
        this.setState({
            visible:false
        })
    }
    handleChange(e){
       
       if(this.state.inputValue.length > 2){
        this.setState({
            inputValue : e.target.value,
            visible:true,
            search:true
        })
       }else{
        this.setState({
            inputValue : e.target.value,
            visible:false
        })
       }
    }
    handleClickListItem(key,categoryId){
       const category = this.state.dataSource.filter((data)=>{if(data.id===categoryId) return data});
        console.log("cat",category[0]);
       const item = category[0][this.props.type].filter((item)=>{if(item.id === key) return item});
       console.log("item",item);
       this.setState({
           inputValue : item[0].name+","+category[0].category,
           visible:false,
           search:false
       })
    }
    componentDidMount(){
        this.setState({
            dataSource:this.props.dataSource
        })
    }
    renderContent(){
        return (
            <Row style={{width:800}}>
              <Col span={20}>
              {
                 (!this.state.search)? <Tabs  defaultActiveKey="1" tabPosition={"left"} >
                 {
                     this.state.dataSource.map(data=>{
                         return <TabPane tab={data.category} key={data.id}>
                                   <Row>
                                       <Col span={12}>
                                           <List>
                                              {
                                                data[this.props.type].map(hotel=>{
                                                  return <List.Item key={hotel.id} onClick={()=>this.handleClickListItem(hotel.id,data.id)}>{hotel.name}</List.Item>
                                                }) 
                                              }     
                                           </List>
                                       </Col>
                                   </Row>
                               </TabPane>
                     })
                 }                
            </Tabs>:
                 <Row>
                     <Col span={12}>
                         {
                           this.state.dataSource.map(data=>{
                              return  <List>
                                    {
                                        data[this.props.type].map(item=>{
                                           if(item.name.includes(this.state.inputValue)){
                                            return  <List.Item key={item.id} onClick={()=>this.handleClickListItem(item.id,data.id)}>{item.name}</List.Item>   
                                           } 
 
                                        })
                                    }
                                </List>
                             })
                         }
                     </Col>
                 </Row>
              }
             
             </Col>  
              
            </Row>
        )
    }
    renderTitle(){
        return (
            <Row>
            <Col span={20}>
            Type in keywords to search or select from below:
            </Col>
            <Col span={4}>
            <Icon type="close" onClick={()=>this.handleClose()}/>
            </Col>
        </Row>
        )
    }
    render(){
        return(
            <Popover content={this.renderContent()} placement="bottomLeft"
            title={this.renderTitle()} visible={this.state.visible}>
            <Input type="text" value={this.state.inputValue} placeholder={this.props.placeholder} onFocus={()=>this.handleFocus()} onChange={(e)=>this.handleChange(e)}/>
            </Popover>
        )
    }
}
export default PlaceComponent;