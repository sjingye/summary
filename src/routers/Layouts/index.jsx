/*
 * @Author: sjingye
 * @Date: 2020-10-26 19:12:02
 * @LastEditTime: 2020-10-27 20:41:40
 * @LastEditors: Please set LastEditors
 * @Description: 布局组件
 * @FilePath: /summary/src/routers/Layouts/index.jsx
 */
import React from "react";
import { Layout } from "antd";
import Left from './left'
import Right from './right'

const { Header, Sider, Content } = Layout;

class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        collapsed: false
    }
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    const { collapsed } = this.state;

    return (
      <div>
        <Layout className="layout-outside">
          <Sider
            theme="light"
            className="sider"
            // collapsible
            // collapsed={collapsed}
            // onCollapse={this.onCollapse}
          >
            <Left />
          </Sider>
          <Layout id="wrapperScroll" className="layout_inside">
            <Header style={{color: '#fff'}}>
                项目总结
            </Header>
            <Content className="content">
                <Right />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Layouts;
