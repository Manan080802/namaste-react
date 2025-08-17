import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import RestaurantCard, { wthPromotedCard } from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

describe("RES CARD TESTCASE", () => {
  it("should render res card", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantCard resData={MOCK_DATA} />
        </Provider>
      </BrowserRouter>
    );

    const Rescard = screen.getByText("Makhani Darbar");
    expect(Rescard).toBeInTheDocument();
  });

  it("should promoted res card", () => {
    const PromotedCard = wthPromotedCard(RestaurantCard);
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <PromotedCard resData={MOCK_DATA} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("Most people like ❤️")).toBeInTheDocument();
  });
});
