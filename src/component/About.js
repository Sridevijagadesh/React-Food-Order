import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
  render() {
    return (
      <>
        <h1>Hello i am from Class component</h1>
        <UserClass name="sridevi" location="benaglore" />
      </>
    );
  }
}

export default About;
