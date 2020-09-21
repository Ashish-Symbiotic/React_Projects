import React, { Component } from "react";
import { Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class RestrauntList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/restraunt").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }
  render() {
    //console.log(this.state.list);
    return (
      <div>
      
          Restarunt List
          {this.state.list ? (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Address</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>

               
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td><Link to={"/update/"+item.id}>Edit</Link></td>
                  </tr>
                ))}
                 </tbody>
              </Table>
            </div>
          ) : (
            <p>Loading .....</p>
          )}
       
      </div>
    );
  }
}

export default RestrauntList;
