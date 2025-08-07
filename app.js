// // import React from "react";
// // import ReactDOM from 'react-dom/client';

// // // const heading = React.createElement("h1",{id:"heading"},"Hello world from React!");

// // /**
// //  * <div id='root'>
// //  *  <div id='parent'>
// //  *     <div id='child'>
// //  *          <h1>Nested React </h1>
// //  *      </div>
// //  *
// //  *  </div>
// //  * </div>
// //  *
// //  */

// // const heading1 = React.createElement("h1",{},"Nested React!");
// // const heading2  = React.createElement("h2",{},"Nested React!");
// // const child = React.createElement("div",{id:"child"},[heading1,heading2]);
// // const parent = React.createElement("div",{id:"parent"},child)

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(parent);

// import React from "react";
// import ReactDOM from "react-dom/client";

// // Create heading elements with unique keys
// // const heading1 = React.createElement("h1", { key: "h1" }, "Nested React!");
// // const heading2 = React.createElement("h2", { key: "h2" }, "Nested React!");

// // // Create child and parent divs
// // const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
// // const parent = React.createElement("div", { id: "parent" }, child);

// // // Create root and render to #root
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(parent);

// // const heading  = React.createElement("h1",{key:"h1"},"Manan Vaghasiya");

// // react element
// const heading = (
//   <>
//     <h1 className="testing" tabIndex="2">
//       Manan Vaghasiya using jsx
//     </h1>
//     <h2>this is react element</h2>
//   </>
// );

// // react component
// // class base
// // functional base

// // functional base
// // always start capital letter

// // const HeadingComponent = () => {
// //   return <h1 className="heading">React functional component</h1>;
// // };

// const HeadingComponent = () => (
//   <>
//     <h1 className="heading">React functional 1 component</h1>
//     <h2>wffr</h2>
//   </>
// );

// const HeadingComponent1 = () => {
//   return (
//     <>
//       {heading}
//       <h1 className="heading">React functional 2 component</h1>
//       <h2>wffr</h2>
//       <HeadingComponent />
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(<HeadingComponent1 />);

import React from "react";
import RectDOM from "react-dom/client";
import resList from "./swiggy_res_list.json";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://imgs.search.brave.com/08D1TU4ypkZ0SKf89CVg1uZ4XSQK_grR2254XhJROyE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzMzLzkwLzQ1/LzM2MF9GXzMzMzkw/NDU1M19NbU1iWGFo/VUI1RG44WGRDUWNz/R3NJc1oyQU9oS2R0/WC5qcGc"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  let { resData } = { ...props };
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData?.info;
  console.log("name :>> ", name);
  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        className="res-logo"
      />
      <h3>{name} </h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{avgRatingString} stars </h4>
      <h4>{sla.slaString} </h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h4>&copy; {new Date().getFullYear()} Copyright</h4>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = RectDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
