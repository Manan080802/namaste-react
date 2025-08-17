import { sum } from "../../utils/sum";

test("sum of two number", () => {
  const result = sum(5, 2);
  expect(result).toBe(7);
});
