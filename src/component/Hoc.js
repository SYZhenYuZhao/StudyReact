import React, { Component} from 'react'
function Hoc(HocParams) {
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
                username: username
            })
        }
        render() {
            return <HocParams user={this.state.username}/>
        }
    }
    return Hoc1
}
export default Hoc