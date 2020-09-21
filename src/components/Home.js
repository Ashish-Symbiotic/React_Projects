import React, { Component } from 'react';
import{connect} from 'react-redux'
import { helloRedux } from '../services/action';

class Home extends Component {
    render() {
        return (
            <div>
                 <button onClick={()=>this.props.helloRedux()}>Click on Me </button>
            </div>
        );
    }
}
const MapDispatchProps=dispatch=>({
   helloRedux:()=>dispatch(helloRedux())
})

const MapStateToProps =sate=>{
{

}
}
const HomeCmp=connect(
    MapStateToProps,
    MapDispatchProps
)(Home)
export default HomeCmp;