import React, { lazy, Suspense, useEffect, useState } from "react";
import RectDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const data = {
      name: "Manan Vaghasiya",
      email: "manavaghasiya882@gmail.com",
    };
    setUserInfo(data.email);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedUser: userInfo, setUserInfo }}>
        <div className="app">
          <Header />
          <Outlet />
          {/* <Body /> */}
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

const root = RectDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
