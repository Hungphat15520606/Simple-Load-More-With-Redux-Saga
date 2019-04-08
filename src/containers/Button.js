import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getItems } from '../actions'


let styles = {
    backgroundColor: 'white',
    width: '250px',
    height: '100px',
    display: 'block',
    margin: '50px auto',
    fontSize: '25px',
  }

 class Button extends Component {
     constructor(props){
         super(props);
         this.state={hover: false}
     }
     componentDidMount(){
         this.props.getItems();
     }
  render() {
    return (
      <div>
        <button style={this.state.hover? styles: {...styles, backgroundColor: 'tomato'}}
         onMouseOut={()=>{this.setState({hover:false})}}
         onMouseOver={()=>{this.setState({hover:true})}}
         onClick={ this.props.getItems}
        >LOADMORE</button>  
      </div>
    )
  }
}

const mapDispacthToProps ={
    getItems : getItems,
};

export default connect(null, mapDispacthToProps)(Button)