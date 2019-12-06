import React, { Component } from "react";
import axios from "axios";
import DisplayPlayers from "./Players";
import { Table } from "reactstrap";
import Navbar from "./Navbar";

class FetchPlayers extends Component {
    constructor() {
      super();
      this.state = {
        data: []
      };
    }
  
    componentDidMount() {
      axios
        .get("http://localhost:5000/api/players")
        .then(res => {
          console.log(res.data);
          this.setState({
            data: res.data
          });
         
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    render() {
      return (
        <div>
          <h1 data-testid='pageTitle'>Women's World Cup players ranked by search interest</h1><h2>June-July 2019, worldwide</h2>
          <Table>
          <thead>
            <tr>
              <th data-testid='rankTableHeader'>Rank</th>
              <th>Name</th>
              <th>Country</th>
              <th>Interest Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(player => (
              <DisplayPlayers key={player.id} data={player} />
            ))}
          </tbody>
          </Table>
        </div>
      )
    }
  }
  export default FetchPlayers;