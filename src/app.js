import React from "react";
import RectDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/footer";

import Body from "./components/Body";

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
