/*
 * @Author: sjingye
 * @Date: 2020-10-25 19:29:34
 * @LastEditTime: 2020-10-26 19:14:55
 * @LastEditors: Please set LastEditors
 * @Description: routers 入口
 * @FilePath: /summary/src/index.js
 */
import { Switch, Route } from "react-router-dom";
import Layouts from './Layouts';

function App() {
  return (
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/" component={Layouts} />
      {/* <Redirect path="/" to="/login" /> */}
    </Switch>
  );
}

export default App;
