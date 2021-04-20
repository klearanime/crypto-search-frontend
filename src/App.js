import React, { Component } from 'react'
import MainRouter from "./MainRouter"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"



export class App extends Component {
  render() {
    return (
      <>
      <ToastContainer />
      <MainRouter />
      </>
    )
  }
}



export default App

