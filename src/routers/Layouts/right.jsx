import React from "react";
import routerConfig from "../../config/routes";
import { Route } from 'react-router-dom';

class Right extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="right-wrapper">
        {routerConfig.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
              exact
            />
          );
        })}
      </div>
    );
  }
}

export default Right;
