import { act } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/cartMock.json";
import Header from "../Header";
import "@testing-library/jest-dom";

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA),
    })
  );
});

describe("cart testcase", () => {
  it("should load the Res menu com", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header></Header>
            <RestaurantMenu></RestaurantMenu>
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionsHeader = screen.getAllByText("Recommended (20)");
    // fireEvent.click(accordionsHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    const addBtn = screen.getAllByRole("button", { name: "+" });
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart ( 1 items )")).toBeInTheDocument();

    // expect(screen.getByText("Cart ( 1 items ")).toBeInTheDocument();
  });
});
