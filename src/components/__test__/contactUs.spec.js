import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact page ", () => {
  test("Contact us page render", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Contact us button render", () => {
    render(<Contact />);

    const button = screen.getByRole("paragraph");

    expect(button).toBeInTheDocument();
  });

  test("Contact us text render", () => {
    render(<Contact />);

    const text = screen.getByText("dfff");

    expect(text).toBeInTheDocument();
  });
});
