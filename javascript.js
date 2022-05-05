const profile = {
  nickname: 'Ham',
  age: 45
}

const { nickname, ...rest } = profile;
console.log(nickname);
console.log(rest);

const printObject = ({nickname}) => {
  console.log(`nickname: ${nickname}`)
};

printObject(profile);