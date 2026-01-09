import boxen from "boxen";

// Message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1. Classic box (default style)
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1
  })
);

// 2. SingleDouble style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "singleDouble"
  })
);

// 3. Round style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "round"
  })
);

// Bonus: Background color customization
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "round",
    backgroundColor: "green"
  })
);
