import React, { Component } from 'react';


class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null,
            id:null
        }
    }
    componentDidMount()
    {
        console.log(this.props.match.params.id+"Compo");
        fetch("http://localhost:3000/restraunt/"+this.props.match.params.id)
        .then((res)=>{
            res.json().then((rest)=>{
                this.setState({name :rest.name,
                email: rest.email,
                id: rest.id,
                rating: rest.rating,
                address: rest.address
                
                })
                console.warn(rest.name)
            })
        }) 
     
        



    }

    update()
    {
        fetch('http://localhost:3000/restraunt/'+this.state.id,{
            method:"Put",
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
        console.log(this.props.match.params.id);
        return (
            <div>
            <input value={this.state.name} placeholder ="Resto Name"  onChange={(event)=>{this.setState({name:event.target.value})}}/>  
              <br></br><br></br>
              <input value={this.state.email} placeholder ="Resto Email"  onChange={(event)=>{this.setState({email:event.target.value})}}/>  
              <br></br><br></br>
              <input value={this.state.rating} placeholder ="Resto Rating"  onChange={(event)=>{this.setState({rating:event.target.value})}}/>  
              <br></br><br></br>
              <input value={this.state.address}  placeholder ="Resto Address"  onChange={(event)=>{this.setState({address:event.target.value})}}/>  
              <br></br><br></br>
             <button onClick={()=>{this.update()}}>Add Resto</button>

          </div>
        );
    }
}

export default RestaurantUpdate;