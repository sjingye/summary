/*
 * @Author: sjingye
 * @Date: 2020-10-27 11:37:31
 * @LastEditTime: 2020-10-27 20:06:12
 * @LastEditors: Please set LastEditors
 * @Description: 左侧的菜单栏
 * @FilePath: /summary/src/config/menu.js
 */
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const menuRoutes = (role) => {
    const menu = [
        {
            key: "/ToolBox",
            icon: "1",
            title: "工具箱",
            list: [
                {
                  key: "1",
                  icon: "area-chart",
                  title: "效果数据",

                },
                {
                  key: "2",
                  icon: "pie-chart",
                  title: "人群分析",
                },
              ],
        },
        {
            key: "/AM",
            icon: "2",
            title: "账号中心",
            hideInMenu: !Boolean(role && role === 'OPERATOR'),
            list: [
                {
                  key: "445",
                  icon: "area-chart",
                  title: "授权中心",
                },
                {
                  key: "56",
                  icon: "pie-chart",
                  title: "用户管理",
                },
              ],
        },
    ]
    return menu
}

export default menuRoutes;