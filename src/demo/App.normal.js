import React, { Component } from 'react';


class App extends Component {
  render() {
    let ThemedButton = props => {
      return <input type='button' defaultValue={props.theme}/>;
    };
    let Toolbar = props => {
      // Toolbar 组件必须添加一个额外的 theme 属性
      // 然后传递它给 ThemedButton 组件
      return (
        <div>
          <ThemedButton theme={props.theme} />
        </div>
      );
    }
    return (
      <Toolbar theme="dark" />
    );
  }
}

export default App;
