import React, { Component } from "react";
import axios from "axios";

class Harga extends Component {
  state = { val: "" };

  componentDidMount() {
    axios.get("https://blockchain.info/ticker").then(val => {
      this.setState({
        val: val.data
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Harga Bitcoin Hari Ini</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Mata Uang</th>
              <th scope="col">Harga Beli Bitcoin</th>
              <th scope="col">Harga Jual Bitcoin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Dollar Australia</th>
              <td>{this.state.val ? this.state.val.AUD.buy : ""}</td>
              <td>{this.state.val ? this.state.val.AUD.sell : ""}</td>
            </tr>
            <tr>
              <th scope="row">Euro Eropa</th>
              <td>{this.state.val ? this.state.val.EUR.buy : ""}</td>
              <td>{this.state.val ? this.state.val.EUR.sell : ""}</td>
            </tr>
            <tr>
              <th scope="row">Poundsterling Inggris</th>
              <td>{this.state.val ? this.state.val.GBP.buy : ""}</td>
              <td>{this.state.val ? this.state.val.GBP.sell : ""}</td>
            </tr>
            <tr>
              <th scope="row">Yen Jepang</th>
              <td>{this.state.val ? this.state.val.JPY.buy : ""}</td>
              <td>{this.state.val ? this.state.val.JPY.sell : ""}</td>
            </tr>
            <tr>
              <th scope="row">Dollar Amerika</th>
              <td>{this.state.val ? this.state.val.USD.buy : ""}</td>
              <td>{this.state.val ? this.state.val.USD.sell : ""}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Harga;
