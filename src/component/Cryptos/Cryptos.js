import React, { Component } from "react";
import axios from "axios";
import "./Cryptos.css";

export class Cryptos extends Component {
    state = {
        cryptoInput: "",
        cryptoArray: [],
        isLoading: false,
        isError: false,
        errorMessage: "",
    };
    
    async componentDidMount() {
        this.setState({
            isLoading: true,
        });
        try {
            let cryptoData = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
                );
                console.log(cryptoData);
            this.setState({
                cryptoArray: cryptoData.data.Array(100),
                cryptoInput: "",
                isLoading: false,
                isError: false,
                errorMessage: "",
            });
            console.log(Array);
        } catch (e) { }
    }
    handleCryptoOnChange = (event) => {
        this.setState({
            cryptoInput: event.target.value,
            isError: false,
            errorMessage: "",
        });
    };

    handleSearchError = (data) => {
    };

    handleSearchOnClick = async (event) => {
        if (this.state.cryptoInput.length === 0) {
            this.setState({
                isError: true,
                errorMessage: "Enter a currency.",
            });
            return;
        }
        this.setState({
            isLoading: true,
        });
        try {
            let cryptoData = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
            );
            let Data = this.searchCryptoError(cryptoData.data);
            if (Data.response === false) {
                this.setState({
                    isError: true,
                    errorMessage: Data.message,
                    isLoading: false,
                });
                return;
            } else {
                this.setState({
                    cryptoArray: Data,
                    cryptoInput: "",
                    isLoading: false,
                    isError: false,
                    errorMessage: "",
                });
            }
        } catch (e) {
            console.log(e);
        }
    };
    cryptoArrayList = () => {
        return this.state.cryptoArray.map((coin) => {
            return (
                <div key={coin.id}>
                    <div>{coin.symbol}</div>
                    <div>{coin.name}</div>
                    <div>{coin.current_price}</div>
                    <div>
                        <img src={coin.image} />
                    </div>
                </div>
            );
        });
    };
    
    handleSearchOnEnter = async (event) => {
        if (event.key === "Enter") {
            this.handleSearchOnClick();
        }
    };
    render(props) {
        return (
            <div style={{ marginTop: 55, textAlign: "center" }}>
                <div>
                    {this.state.isError && (
                        <span style={{ color: "red" }}>{this.state.errorMessage}</span>
                    )}
                </div>
                <input
                    style={{ width: 500 }}
                    name="cryptoInput"
                    className="cryptoInput"
                    onChange={this.handleCryptoOnChange}
                    onKeyPress={this.handleSearchOnEnter}
                    value={this.state.cryptoInput}
                />
                <br />
                <button
                    onClick={this.handleSearchOnClick}
                    style={{ margin: "30px 30px" }}
                >
                    Search
        </button>
                {this.state.isLoading}
            </div>
        );
    }
}
export default Cryptos;