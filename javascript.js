const numbers = [1,2,3];
const integers = [4,5,6];
console.log(numbers.concat(integers));
console.log([...numbers,...integers]);

const profile1 = { nickname: 'Ham' };
const profile2 = { age: 45 };

const profile = {...profile1, ...profile2};
console.log(profile);
console.log(profile1);
console.log(profile2);