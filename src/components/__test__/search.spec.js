import { Provider } from "react-redux";
import { BrowserRouter, json } from "react-router-dom";
import appStore from "../../utils/appStore";
import MOCK_DATA from "../mocks/retaurantMock.json";
import Body from "../Body";
import { act } from "react";
import "@testing-library/jest-dom";

// const { render, screen, fireEvent } = require("@testing-library/react");
import { fireEvent, render, screen } from "@testing-library/react";
global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) });
});

describe("search component", () => {
  it("should render the body component with search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </BrowserRouter>
      )
    );
    const inputText = screen.getByTestId("search");
    const button = screen.getByRole("button", { name: "search" });
    fireEvent.change(inputText, { target: { value: "pizza" } });
    fireEvent.click(button);
    let card = screen.getAllByTestId("res-card");
    expect(card.length).toBe(4);
  });

  it("should filter in body", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </BrowserRouter>
      )
    );
    const topRes = screen.getByText("Top rated Restaurant");
    fireEvent.click(topRes);
    let card = screen.getAllByTestId("res-card");
    expect(card.length).toBe(8);
  });
});
