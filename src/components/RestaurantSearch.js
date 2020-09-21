import React, { Component } from 'react';

class RestaurantSearch extends Component {
    constructor()
    {
        super();
        this.state={
            searchData:null,
            noData:false
        }
    }


    search(key)
    {
        fetch("http://localhost:3000/restraunt?q="+key).then(
            ((data)=>{
                data.json().then((res)=>{
                if(res.length>0)
                {
                    this.setState({searchData:res,noData:false})
                }
                else
                {
                    this.setState({searchData:null,noData:true})
                }
                
            })
        })
        )
    }
    render() {
        return (
            <div>
               <input type="text" onChange={(event)=>this.search(event.target.value)}/>
               {
                   <div>
                       {
                           this.state.searchData?
                           <div>
                               {
                                    this.state.searchData.map((item)=>
                                    <div>{item.name}</div>
                                    )
                               }</div>:""
                       }

                       {
                           this.state.noData?<h3>No data Found</h3>:""
                       }
                       </div>
               }

            </div>
        );
    }
}

export default RestaurantSearch;