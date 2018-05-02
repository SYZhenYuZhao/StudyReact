import React from 'react';
class HocParams2 extends React.Component {
   render() {
        return(
            <div>
                Hello {this.props.username} !
            </div>
        )
   }
}
export default HocParams2