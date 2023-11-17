import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="container banner-container bg-light px-lg-5 ">
        <div className="py-5 mt-5 banner-content mx-auto text-center ">
          <h1>A warm welcome</h1>
          <p>
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
    );
  }
}

export default Banner;
