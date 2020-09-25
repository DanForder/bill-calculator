import { deals } from "./data";

const mockData = {
  soupTwoBreads: [
    { id: 0, price: 1.1, displayName: "Bread", numberBought: 2 },
    { id: 3, price: 0.6, displayName: "Soup", numberBought: 1 },
  ],
  threeCheeses: [{ id: 2, price: 0.9, displayName: "Cheese", numberBought: 3 }],

  fourCheeses: [{ id: 2, price: 0.9, displayName: "Cheese", numberBought: 4 }],

  oneButter: [{ id: 4, price: 1.2, displayName: "Butter", numberBought: 1 }],

  oneButterAndOthers: [
    { id: 1, price: 0.5, displayName: "Milk", numberBought: 2 },
    { id: 3, price: 0.6, displayName: "Soup", numberBought: 3 },
    { id: 4, price: 1.2, displayName: "Butter", numberBought: 1 },
  ],
};

test("Soup & two breads", () => {
  const savings = deals[1].getSavings(mockData.soupTwoBreads);

  expect(savings).toBe(0.55);
});

test("Three cheeses", () => {
  const savings = deals[0].getSavings(mockData.threeCheeses);

  expect(savings).toBe(0.9);
});

test("Four cheeses", () => {
  const savings = deals[0].getSavings(mockData.fourCheeses);

  expect(savings).toBe(1.8);
});

test("One butter", () => {
  const savings = deals[2].getSavings(mockData.oneButter);

  expect(savings).toBe(0.4);
});

test("One butter and others", () => {
  const savings = deals[2].getSavings(mockData.oneButterAndOthers);

  expect(savings).toBe(0.4);
});
