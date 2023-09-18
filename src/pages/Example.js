import React, { Component } from "react";
// import { InputDate } from "elements/Form";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // };

  // handleChange = (e) => {
  //   this.setState({ value: e.target.value });
  // };
  
  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" }
    ];

    const {page, match} = this.props;

    return (
      <div className="container">
        <div> <Breadcrumb data={breadcrumbList}/></div>
        {/* <div className="row align-items-center justfy-content-center" style={{ height: "100vh" }}>
          <div className="col-auto">
            <InputDate max={30} onChange={this.handleChange} name="value" value={this.state.value} />
          </div>
        </div> */}
        
      </div>
    );
  }
}
