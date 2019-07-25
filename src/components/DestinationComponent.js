import React, { Component } from 'react';
import '../App.css';
import { Icon, Input, Col, Row, DatePicker, Select, Popover, List } from 'antd';
class DestinationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            search: false,
            dataSource: [],
            headings: [],
            inputValue: '',
        }
        this.handleFocus = this.handleFocus.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickListItem = this.handleClickListItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({
            dataSource: this.props.dataSource,
            headings: this.props.headings
        })
    }
    handleClickListItem(key) {
        const listItem = this.state.dataSource.filter((data) => data.id == key)
        this.setState({
            inputValue: listItem[0].name,
            visible: false,
            search:false
        })
    }

    handleFocus() {
        this.setState({
            visible: !this.state.visible
        })
    }
    handleChange(e) {
        if (this.state.inputValue.length > 2) {
            this.setState({
                inputValue: e.target.value,
                visible: true,
                search: true
            })
        } else {
            this.setState({
                inputValue: e.target.value,
                visible: false
            })
        }
    }
    handleClose() {
        this.setState({
            visible: false
        })
    }
    renderContent() {
        return (
            <Row style={{ width: 800 }}>

                {
                    (!this.state.search) ?
                        <Col span={20}>
                            <Col span={10}>
                                <List header={<div style={{ color: "#42a5f5" }}>{(this.state.headings) ? this.state.headings[0] : ""}</div>}>
                                    {
                                        this.state.dataSource.map((destination) => {
                                            if ((this.props.type === "bus") ? destination.isPopulared : destination.inMyanmar) {
                                                return <List.Item key={destination.id} onClick={() => this.handleClickListItem(destination.id)}>{destination.name}</List.Item>
                                            }

                                        })
                                    }
                                </List>
                            </Col>
                            <Col span={10}>
                                <List header={<div style={{ color: "#42a5f5" }}>{(this.state.headings) ? this.state.headings[1] : ""}</div>}>
                                    {
                                        this.state.dataSource.map((destination) => {
                                            if ((this.props.type === "bus") ? !destination.isPopulared : !destination.inMyanmar) {
                                                return <List.Item key={destination.id} onClick={() => this.handleClickListItem(destination.id)}>{destination.name}</List.Item>
                                            }

                                        })
                                    }
                                </List>
                            </Col>
                        </Col>
                        :
                        <Col span={12}>
                            <List>
                                {

                                    this.state.dataSource.map((destination) => {
                                        if(destination.name.includes(this.state.inputValue)){
                                            return <List.Item key={destination.id} onClick={() => this.handleClickListItem(destination.id)}>{destination.name}</List.Item>
                                        }
                                       

                                    })
                                }
                            </List>

                        </Col>

                }



            </Row>
        )
    }
    renderTitle() {
        return (
            <Row>
                <Col span={20}>
                    Type in keywords to search or select from below:
            </Col>
                <Col span={4}>
                    <Icon type="close" onClick={() => this.handleClose()} />
                </Col>
            </Row>
        );
    }
    render() {
        return (
            <Popover content={this.renderContent()} placement="bottomLeft"
                title={this.renderTitle()} visible={this.state.visible}>
                <Input type="text" addonBefore={<Icon type="car" />} placeholder={this.props.placeholder} onFocus={() => this.handleFocus()} onChange={(e) => this.handleChange(e)} value={this.state.inputValue} />
            </Popover>
        )
    }

}
export default DestinationComponent;
