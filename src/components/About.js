import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div className="res-about">
//       <h2>About us</h2>
//       <div className="user-container">
//         <User name="Manan vaghasiya (function base)" />
//         <UserClass name="Manan Vaghasiya (class base)" />
//       </div>
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent class constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount ");
  }
  render() {
    console.log("parent class render");
    return (
      <div className="res-about">
        <h2>About us</h2>
        <div className="user-container">
          <User name="Manan vaghasiya (function base)" />
          <UserClass name="first(class base)" />
          <UserClass name="second (class base)" />
        </div>
      </div>
    );
  }
}
export default About;
