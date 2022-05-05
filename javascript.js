const promise = new Promise((resolve, reject) => {
  // 時間のかかる処理
  // resolve();
  setTimeout(() => {
    console.log('1秒たったよ');
    resolve();
  }, 1000);
});
console.log(promise);

promise.then(() => {
  console.log('I am called by then method');
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
