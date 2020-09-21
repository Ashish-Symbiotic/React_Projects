//This one is demo of the State in The React
//State is private member of the class it can't be accessed outside of the class 
//We can change sate , but we can't change Props

/*import React from 'react'

export default class Profile extends React.Component{
    constructor(){
        super();//From the Java not react
        this.state={
            name:'Ashish',
            email:'ashish@test.com',
            count:0,
            show:true
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

                {
                    this.state.show?
                    <h1>Hide and show</h1>
                    :null
                }


                <h1>Hello {this.state.name}</h1>
                <p>This {this.state.email}</p>

                <p>Count = {this.state.count}</p>
                <button onClick={()=>{this.Update()}}>Update Name</button>

                <button onClick={()=>{this.setState({show:!this.state.show})}}>SJHow</button>
            </div>
        )
    }
}*/

//Demo for the Event Handling in the React using class component
// ()=> this function is use to bind the function to the class
// and not to loose scope of the class
// We can use this.fun.bind(this) method instead of the upper one 

/*import React from 'react'

export default class Profile extends React.Component
{
    testFun()
    {
        alert("TestFun");

    }

    render ()
    {
        return(
            <div>
                <h1>
                    Profile
                </h1>
                <button  onClick={this.testFun.bind(this)} >Click on Me</button>
            </div>
        )
    }
}*/

//Same using the Functional Component
//Functional Component doesn't have any this()

/*import React from 'react'

export default function Profile(){*/
    /*function testFun()
    {
        alert("test Fun");
    }*/
   /* const testFun=()=>{
       alert("testFun") 
    } 
    return(
        <div>
            <h1>
                Profile
            </h1>

            <button onClick={testFun}>Click me</button>
        </div>
    )
}*/

import React from 'react'
export default class Profile extends React.Component
{
    render()
    {
        return(
            <div>
                <p>Hello</p>
            </div>
        )
    }
}