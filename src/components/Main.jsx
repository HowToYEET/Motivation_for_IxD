import React, { Component } from "react";
import "./style/Main.css";
import Header from "./header_Co";
import Title from "./title_co";
import "bootstrap/dist/css/bootstrap.min.css";
import Motivation from "./motivation_co";

export default class Main extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <main className="main">
        <header className="header">
          <navbar className="navbar"> { 
          }
            <Header /> 
          </navbar>
          <div className="title"><Title /></div>
        </header>
        <body>
          <Motivation />
        </body>
      </main>
    );
  }

  more_rendering() {
    return <Title />
  }
}
