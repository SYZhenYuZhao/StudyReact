/*Context的基本用法*/ 
import React, { Component } from 'react';
// 创建一个 theme Context,  默认 theme 的值为 light
const ThemeContext = React.createContext('light');
//console.log(ThemeContext)
class App extends Component {
  render() {
    let ThemedButton = props => {
      //console.log(props,'ThemedButton')
      return (
        <ThemeContext.Consumer>
          {theme => {
            console.log(props,'props')
            return (<input type='button' {...props} defaultValue={theme} />)
          }}
        </ThemeContext.Consumer>);
    };
    let Toolbar = props => {
      // Toolbar 组件必须添加一个额外的 theme 属性
      // 然后传递它给 ThemedButton 组件
      console.log(props,'toolbar')
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}



export default App;
