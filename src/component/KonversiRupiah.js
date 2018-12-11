import React, { Component } from "react";
import axios from "axios";

class KonversiRupiah extends Component {
  state = {
    dollar: 0,
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
        bitcoin: e.target.value,
        dollar: this.state.val.USD.buy
      });
    };

    const konversi = this.state.dollar * 14000 * this.state.bitcoin;

    return (
      <div>
        <h3>Konversi Bitcoin ke Rupiah</h3>
        <p>Kurs 1 USD = 14.000 IDR</p>
        <input type="number" onInput={input} />
        <h3>
          BTC {this.state.bitcoin} = Rp. {konversi}
        </h3>
      </div>
    );
  }
}

export default KonversiRupiah;
