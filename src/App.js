import React, { Component } from 'react';
import Hoc from './component/Hoc'
import HocParams1 from './component/hocParams1';
import HocParams2 from './component/hocParams2';
const Aaa = Hoc(HocParams2,'爸爸')
class App extends React.Component {
  render() {
    return (
      <div>
        <HocParams1/>
        <Aaa/>
      </div>
    );
  }
}



export default App;
