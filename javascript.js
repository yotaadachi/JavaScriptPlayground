const value = 1;

console.log(value);

if(true) {
  const value = 2;
  console.log(value);
}
console.log(value);

const profile = {
  age: 45,
  name: 'Ham',
};

console.log(profile);

//profile.gender = 'male';
profile['gender'] = 'female';

console.log(profile);
