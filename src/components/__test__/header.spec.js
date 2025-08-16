import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

import { BrowserRouter } from "react-router-dom";
describe("header component is loaded", () => {
  it("should header loaded", () => {
    render(
      <BrowserRouter>
        {" "}
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const text = screen.getAllByRole("button");
    console.log(text.length);
    expect(text.length).toBe(2);
  });
  it("should login button proper", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout  " });
    expect(logoutButton).toBeInTheDocument();
  });
});
