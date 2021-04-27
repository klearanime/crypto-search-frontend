import React, { Component } from "react";
import axios from "axios";



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
                cryptoArray: cryptoData.data,
                cryptoInput: "",
                isLoading: false,
            });
        } catch (e) { }
    }

    handleCryptoOnChange = (event) => {
        console.log(event.target.value);
        this.setState({
            cryptoInput: event.target.value,
        });
    };

    handleSearchError = (data) => { };
    handleSearchOnClick = async (event) => {
        let cryptoInput = this.state.cryptoInput;
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
                `https://api.coingecko.com/api/v3/coins/${cryptoInput}`
            );
            let data = cryptoData.data;
            let dataArray = {
                id: data.id,
                symbol: data.symbol,
                name: data.name,
                current_price: data.market_data.current_price.usd,
                image: data.image.large,
            };
            this.setState({
                cryptoArray: [dataArray],
            });
        } catch (e) {
            console.log(e);
        }
    };

    cryptoArrayList = () => {
        return (
            <div className="container">
                <div className="row">
                    {this.state.cryptoArray.map((coin) => {
                        return (
                            <div className="col-sm" key={coin.id}>
                                <div key={coin.id}>
                                    <div>{coin.symbol}</div>
                                    <div>{coin.name}</div>
                                    <div>{coin.current_price}</div>
                                    <div>
                                        <img src={coin.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    handleSearchOnEnter = async (event) => {
        if (event.key === "Enter") {
            this.handleSearchOnClick(event);
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
                {this.cryptoArrayList()}
                {this.state.isLoading}
            </div>
        );
    }
}



export default Cryptos;