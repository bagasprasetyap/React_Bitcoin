import React, { Component } from "react";
import axios from "axios";

class KonversiBitcoin extends Component {
  state = {
    rupiah: 0,
    bitcoin: 0,
    val: ""
  };

  componentDidMount() {
    axios.get("https://blockchain.info/ticker").then(val => {
      this.setState({
        val: val.data
      });
    });
  }

  render() {
    const input = e => {
      this.setState({
        rupiah: e.target.value,
        bitcoin: this.state.val.USD.buy
      });
    };

    const konversi = this.state.rupiah / 14000 / this.state.bitcoin;

    return (
      <div>
        <h3>Konversi Rupiah ke Bitcoin</h3>
        <p>Kurs 1 USD = 14.000 IDR</p>
        <input type="number" onInput={input} />
        <h3>
          Rp. {this.state.rupiah} = {konversi} BTC
        </h3>
      </div>
    );
  }
}

export default KonversiBitcoin;
