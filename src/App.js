import React, { Component } from 'react'
import MainRouter from "./MainRouter"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// import axios from "axios"

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

export class App extends Component {
  state = {
    user: null,
  }

  handleUserLogin = (user) => {
    console.log("13 from app");
    console.log(user);
    this.setState({
      user: {
        email: user.email,
      }
    })
  }

  render() {
    return (
      <>
        <ToastContainer />
        <MainRouter
          user={this.state.user}
          handleUserLogin={this.handleUserLogin}
        />
      </>
    )
  }
}



export default App

