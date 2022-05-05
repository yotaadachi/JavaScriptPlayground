const sleep = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1秒経ったよ');
      resolve();
    }, 1000);
  });
};

const promise = sleep();
console.log(promise);

promise.then(() => {
  return sleep();
}).then(() => {
  return sleep();
});
console.log('start');

// setTimeout(() => {
//   console.log('1秒たったよ');
//   setTimeout(() => {
//     console.log('1秒たったよ');
//     setTimeout(() => {
//       console.log('1秒たったよ');
//     }, 1000);
//   }, 1000);
// }, 1000);

console.log('end');
