export const productData = [
  { id: 0, price: 1.1, displayName: "Bread", numberBought: 0 },
  { id: 1, price: 0.5, displayName: "Milk", numberBought: 0 },
  { id: 2, price: 0.9, displayName: "Cheese", numberBought: 0 },
  { id: 3, price: 0.6, displayName: "Soup", numberBought: 0 },
  { id: 4, price: 1.2, displayName: "Butter", numberBought: 0 },
];

export const deals = [
  {
    id: 0,
    displayName: "BOGOF Cheese",
    getSavings: (products) => {
      const customerCheese = products.filter((product) => {
        return product.id === 2;
      })[0];

      const numberToDiscount = Math.floor(customerCheese.numberBought / 2);

      return customerCheese.price * numberToDiscount;
    },
  },
  {
    id: 1,
    displayName: "1 Soup, 1 half price Bread",
    getSavings: (products) => {
      const customerBread = products.filter((product) => {
        return product.id === 0;
      })[0];

      const customerSoup = products.filter((product) => {
        return product.id === 3;
      })[0];

      const numberOfBreadsToDiscount = Math.min(
        customerBread.numberBought,
        customerSoup.numberBought
      );

      return customerBread.price * (numberOfBreadsToDiscount / 2);
    },
  },
  {
    id: 2,
    displayName: "Third off Butter!",
    getSavings: (products) => {
      const customerButter = products.filter((product) => {
        return product.id === 4;
      })[0];

      const savings =
        Math.round(
          ((customerButter.numberBought * customerButter.price) / 3) * 100
        ) / 100;

      return savings;
    },
  },
];
