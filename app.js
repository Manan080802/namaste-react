// import React from "react";
// import ReactDOM from 'react-dom/client';

// // const heading = React.createElement("h1",{id:"heading"},"Hello world from React!");

// /**
//  * <div id='root'>
//  *  <div id='parent'>
//  *     <div id='child'>
//  *          <h1>Nested React </h1>
//  *      </div>
//  *
//  *  </div>
//  * </div>
//  *
//  */

// const heading1 = React.createElement("h1",{},"Nested React!");
// const heading2  = React.createElement("h2",{},"Nested React!");
// const child = React.createElement("div",{id:"child"},[heading1,heading2]);
// const parent = React.createElement("div",{id:"parent"},child)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";

// Create heading elements with unique keys
// const heading1 = React.createElement("h1", { key: "h1" }, "Nested React!");
// const heading2 = React.createElement("h2", { key: "h2" }, "Nested React!");

// // Create child and parent divs
// const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
// const parent = React.createElement("div", { id: "parent" }, child);

// // Create root and render to #root
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading  = React.createElement("h1",{key:"h1"},"Manan Vaghasiya");

// react element
const heading = (
  <>
    <h1 className="testing" tabIndex="2">
      Manan Vaghasiya using jsx
    </h1>
    <h2>this is react element</h2>
  </>
);

// react component
// class base
// functional base

// functional base
// always start capital letter

// const HeadingComponent = () => {
//   return <h1 className="heading">React functional component</h1>;
// };

const HeadingComponent = () => (
  <>
    <h1 className="heading">React functional 1 component</h1>
    <h2>wffr</h2>
  </>
);

const HeadingComponent1 = () => {
  return (
    <>
      {heading}
      <h1 className="heading">React functional 2 component</h1>
      <h2>wffr</h2>
      <HeadingComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent1 />);
