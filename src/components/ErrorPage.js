import React from "react";
import Header from "./Header";

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>Error!!!!</div>
      </div>
    );
  }
}

export default ErrorPage;
