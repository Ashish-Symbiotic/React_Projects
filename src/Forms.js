/*import React,{useEffect,useState} from 'react'
import PropTypes from'prop-types'

const Forms= ()=>{
    const [count,setCount]=useState(1)

    return(
        <div>
            <h1>Using Effect Hook in Nodejs   {count}</h1>
        </div>
    );
};



export default Forms;*/


import React from 'react'
export default class Forms extends React.Component{
    constructor()
    {
        super()
        this.state={
                user:null,
                password:null
        }
    }

    render()
    {
        return(
            <div>
                <h1>Form Handling</h1>
                <input type="text" name="user"/><br />
                <input type="password" name="password"/>
                <br></br>
                <button>Submit</button>
            </div>
        )
    }
}