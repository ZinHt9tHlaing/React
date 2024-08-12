const macBook = {
  model: "MacBook Pro",
  storage: "512GB SSD",
  price: 1999,
};

// macBook.color = "gray";

// add
// const obj = { ...macBook, color: "gray", cpu: "M2" };

// remove
// const { storage, ...obj } = macBook;

// update
// const obj = { ...macBook, price: 2500 };

// console.log(macBook);
// console.log(obj);

const fruits = [
  "apple",
  "banana",
  "cherry",
  "grape",
  "orange",
  "mango",
  "pear",
  "pineapple",
];

// add
// const add = [...fruits, "kiwi"];

// remove
// const remove = fruits.filter((fruit) => fruit !== "grape");

// update && edit
// const edit = fruits.map((fruit) => (fruit === "grape" ? "kiwi" : fruit));

// console.log(fruits);
// console.log(edit);

const products = [
  {
    id: 1,
    name: "Apple MacBook Pro",
    price: 1999,
    stock: 25,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 799,
    stock: 50,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: 349,
    stock: 100,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 1199,
    stock: 15,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Apple iPad Pro",
    price: 999,
    stock: 30,
    rating: 4.8,
  },
];

// todo: add
// const newProduct = {
//   id: 6,
//   name: "Apple MacBook Pro",
//   price: 1999,
//   stock: 25,
//   rating: 4.8,
// };

// const add = [...products, newProduct];

// todo: remove
// const remove = products.filter((product) => product.id !== 3);

// todo: update
// const update = products.map((product) => {
//   if (product.id === 3) {
//     return { ...product, stock: product.stock + 50 };
//   } else {
//     return product;
//   }
// });

// const update = products.map((product) => {
//   return { ...product, price: product.price + 100 };
// });

console.table(products);
console.table(update);
