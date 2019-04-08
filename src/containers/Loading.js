import React, {Component} from 'react'
import { connect } from 'react-redux'
import img from '../loading_spinner.gif'

// let Loading = ({loading})=>(
//     loading? 
//     <div style={{ textAlign: 'center' }}>
//         <img src={img} alt='loading'/>
//         <h1>Loading</h1>
//     </div>:
//     null
// );
class Loading extends Component {
    render(){
        return(
            <div>
                {this.props.loading?
                <div style={{ textAlign: 'center' }}>
                    <img src={img} alt='loading'/>
                    <h1>Loading</h1>
                </div>:
                null
                }
            </div>
        );
    }
}

const mapPropsToState=(state)=>({loading:state.loading})

export default connect(mapPropsToState,null)(Loading)