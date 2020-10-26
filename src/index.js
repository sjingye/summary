/*
 * @Author: sjingye
 * @Date: 2020-10-25 19:29:34
 * @LastEditTime: 2020-10-26 19:44:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /summary/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routers from './routers'
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <BrowserRouter>
      <Routers></Routers>
    </BrowserRouter>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
