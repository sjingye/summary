/*
 * @Author: 菜单栏
 * @Date: 2020-10-26 19:11:32
 * @LastEditTime: 2020-10-27 20:06:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /summary/src/routers/Layouts/left.jsx
 */
import React from "react";
import menuRoutes from "../../config/menu";
import { Menu } from "antd";

const { SubMenu } = Menu;

class Left extends React.Component {
  constructor(props) {
    super(props);
    this.menu = []
  }
  componentDidMount() {
    
  }
  renderMenu = (menuConfig) => {
    const loop = (data) => {
      return data.map((item) => {
        if (item.hideInMenu) return null;
        if (Array.isArray(item.list)) {
          return (
            <SubMenu key={item.key} title={item.title} icon={null}>
              {loop(item.list)}
            </SubMenu>
          );
        }
        return <Menu.Item key={item.key} >{item.title}</Menu.Item>;
      });
    };
    return loop(menuConfig);
  };
  render() {
    const role = "OPERATOR";
    this.menu = menuRoutes(role);
    console.log(this.menu)
    return (
      <Menu
        // onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        {this.renderMenu(this.menu)}
      </Menu>
    );
  }
}

export default Left;
