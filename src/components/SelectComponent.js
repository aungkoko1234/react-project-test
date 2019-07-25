import React, { Component } from 'react';
import '../App.css';
import { Icon, Input, Col, Row, DatePicker, Select, Popover, List } from 'antd';
class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: 0,
            adult: 0,
            child: 0,
            infant: 0,
            visible: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.renderValue = this.renderValue.bind(this);
    }
    componentDidMount() {
        this.setState({
            room: 0,
            adult: 0,
            child: 0,
            infant: 0,
            visible: false
        })
    }
    handleShow() {

        this.setState({
            visible: !this.state.visible
        })
    }
    handleAdd(type) {
        this.setState({
            type: this.state[type]++
        })
    }
    handleSub(type) {
        this.setState({
            type: (this.state[type] > 0) ? this.state[type]-- : 0
        })
    }
    handleClose() {
        this.setState({
            visible: false
        })
    }
    renderContent() {
        return (
          <List style={{width:400}}>   
           {/* { (this.props.type==="hotel")?  
           <List.Item><Col span={12}>Room :</Col> <Col span={4}><Icon type="plus" onClick={() => { this.handleAdd("room") }} /></Col> <Col span={4}>{this.state.room}</Col><Col span={4}><Icon type="minus" onClick={() => { this.handleSub("room") }} /></Col></List.Item> : <List.Item>Infant(0-2) :<Icon type="plus" onClick={() => { this.handleAdd("infant") }} /> {this.state.infant}<Icon type="minus" onClick={() => { this.handleSub("infant") }} /></List.Item>}
           
            <List.Item>Adult :<Icon type="plus" onClick={() => { this.handleAdd("adult") }} />{this.state.adult}<Icon type="minus" onClick={() => { this.handleSub("adult") }} /></List.Item>
            <List.Item>Child(0-11) :<Icon type="plus" onClick={() => { this.handleAdd("child") }} />{this.state.child}<Icon type="minus" onClick={() => { this.handleSub("child") }} /></List.Item> */}
            {
                this.props.field.map((field)=>{
                    return <List.Item> {field} :<Icon type="plus" onClick={() => { this.handleAdd(field) }} />{this.state[field]}<Icon type="minus" onClick={() => { this.handleSub(field) }} /></List.Item>
                })
            }
        </List>)
    }
    renderValue(){
        let str = "";
        this.props.field.map((field)=>{
            str = str + this.state[field] +"  "+ field +"(s)"
        })
        return str;
    }
    renderTitle() {
        return (
            <Row>
                <Col span={20}>
                    {this.props.title}
                </Col>
                <Col span={4}>
                    <Icon type="close" onClick={() => this.handleClose()} />
                </Col>
            </Row>
        )
    }
    render() {
        return (
            <Popover content={this.renderContent()}
                placement="bottomLeft"
                style={{ width: 900 }}
                title={this.renderTitle()} visible={this.state.visible}>
                <Input style={{ cursor: "pointer" }}
                    value={this.renderValue()} addonAfter={<Icon type="down" onClick={() => this.handleShow()} />} onFocus={() => this.handleShow()} />
            </Popover>
        )
    }
}
export default SelectComponent;