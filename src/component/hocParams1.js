import React from 'react';
import Hoc from './Hoc'
class HocParams1 extends React.Component {
    
  
    render() {
        //console.log(this.props)
        return (
            <div>welcome {this.props.user}</div>
        )
    }
}
let HocParams = Hoc(HocParams1);
export default HocParams