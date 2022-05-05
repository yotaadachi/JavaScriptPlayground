const array = ['Ham', 45, 'EggPlants', 'Oranges'];
const [nickname, age, ...rest] = array;

console.log(nickname);
console.log(age);
console.log(rest);