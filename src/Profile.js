import React from 'react'

export default class Profile extends React.Component{
    constructor(){
        super();//From the Java not react
        this.state={
            name:'Ashish',
            email:'ashish@test.com',
            count:0
        }
    }
    Update(){

        this.setState(
        {
            name:"Suraj",
            count:this.state.count+1
        })
    }
    render()
    {
        console.log("Render Call");
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <p>This {this.state.email}</p>

                <p>Count = {this.state.count}</p>
                <button onClick={()=>{this.Update()}}>Update Name</button>
            </div>
        )
    }
}