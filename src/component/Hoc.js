/*Hoc高阶组件（作用是接收一个组件，然后给这个组件传一些属性并返回） */
import React, { Component} from 'react'
function Hoc(HocParams,str) {
    class Hoc1 extends Component{
        constructor(props){
            super(props)
            this.state={
                username:'zhao'
            }
        }
        componentWillMount() {
            let username = '赵振宇'
            this.setState({
                username: str
            })
        }
        render() {
            return <HocParams username={this.state.username}/>
        }
    }
    return Hoc1
}
export default Hoc