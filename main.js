const restaurant = {
  name: "Classico  Italiano",
  location: "Via Angela Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizeria", "Vegetarian", "Organic"],
  starterMenu: ["Focazzia", "Bruscheta", "Garlic Bread", "Capric Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(arr);

const [first, second, third, fourth] = restaurant.categories;
console.log(first, second, third);

