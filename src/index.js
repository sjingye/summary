/*
 * @Author: sjingye
 * @Date: 2020-10-25 19:29:34
 * @LastEditTime: 2020-10-27 18:06:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /summary/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, DatePicker, message } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale/zh_CN";
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import "antd/dist/antd.css";
// import './index.css';
import Routers from "./routers";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <Routers></Routers>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
