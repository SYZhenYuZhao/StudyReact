/*高阶组件的参数 */
import React from 'react';
import Hoc from './Hoc'
class HocParams1 extends React.Component {
    
  
    render() {
        //console.log(this.props)
        return (
            <div>welcome {this.props.username} !</div>
        )
    }
}
let HocParams = Hoc(HocParams1,'妈妈');
export default HocParams