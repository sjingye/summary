/*
 * @Author: sjingye
 * @Date: 2020-10-26 19:12:02
 * @LastEditTime: 2020-10-26 19:43:51
 * @LastEditors: Please set LastEditors
 * @Description: 布局组件
 * @FilePath: /summary/src/routers/Layouts/index.jsx
 */
import React from "react";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

class Layouts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout className="layout_outside">
          <Sider
            theme="light"
            className="sider"
            trigger={null}
            collapsible
            // collapsed={this.global.collapsed}
          >
            {/* <Left collapsed={this.global.collapsed} /> */}
          </Sider>
          <Layout id="wrapperScroll" className="layout_inside">
            <Header className="header">
              {/* <Icon
                className="trigger"
                type={this.global.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <Top logout={this.logout.bind(this)} reload={this.reload} /> */}
            </Header>
            <Content className="content">{/* <Right /> */}</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Layouts;
