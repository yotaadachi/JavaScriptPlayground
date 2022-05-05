const numbers = [5,3,4];
const square = (number) => {
  return number * number;
}
const squares = numbers.map(square);
console.log(squares);