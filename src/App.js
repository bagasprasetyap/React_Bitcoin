import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Harga from "./component/Harga";
import KonversiRupiah from "./component/KonversiRupiah";
import KonversiBitcoin from "./component/KonversiBitcoin";

class App extends Component {
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
        <div className="card">
          <center>
            <div className="card-body">
              <Link to="/hargabitcoin">
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ marginRight: "10px" }}
                >
                  Harga Bitcoin
                </button>
              </Link>
              <Link to="/bitcoin">
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ marginRight: "10px" }}
                >
                  Bitcoin to Rupiah
                </button>
              </Link>
              <Link to="/rupiah">
                <button type="button" className="btn btn-danger">
                  Rupiah to Bitcoin
                </button>
              </Link>
            </div>
            <Route exact path="/hargabitcoin" component={Harga} />
            <Route path="/bitcoin" component={KonversiRupiah} />
            <Route path="/rupiah" component={KonversiBitcoin} />
          </center>
        </div>
      </div>
    );
  }
}

export default App;
