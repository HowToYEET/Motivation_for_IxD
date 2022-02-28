import React, { Component } from "react";
import "./style/Main.css";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Main extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <main className="main">
        <header className="header">
         <Header />
        </header>
      </main>
    );
  }
}
