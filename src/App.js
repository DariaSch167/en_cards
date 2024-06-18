import React, { Component } from "react";
import Header from "./components/header.jsx";
import Main from "./components/main.jsx";
import Footer from "./components/footer.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Header />
          <Main />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
