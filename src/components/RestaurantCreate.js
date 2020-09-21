import React, { Component } from 'react';

class RestaurantCreate extends Component {
    constructor()
    {
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null
        }

    }
    create()
    {
        fetch('http://localhost:3000/restraunt',{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>
        {
            result.json().then((resp)=>
            {
                console.log(resp);
         })
        })
    }
    render() {
        return (
            <div>
              <input placeholder ="Resto Name"  onChange={(event)=>{this.setState({name:event.target.value})}}/>  
                <br></br><br></br>
                <input placeholder ="Resto Email"  onChange={(event)=>{this.setState({email:event.target.value})}}/>  
                <br></br><br></br>
                <input placeholder ="Resto Rating"  onChange={(event)=>{this.setState({rating:event.target.value})}}/>  
                <br></br><br></br>
                <input placeholder ="Resto Address"  onChange={(event)=>{this.setState({address:event.target.value})}}/>  
                <br></br><br></br>
               <button onClick={()=>{this.create()}}>Add Resto</button>

            </div>
        );
    }
}

export default RestaurantCreate;