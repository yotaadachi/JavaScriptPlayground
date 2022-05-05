const promise = new Promise((resolve, reject) => {
  // 時間のかかる処理
  // resolve();
  console.log(resolve);
  console.log(reject);
});
console.log(promise);
console.log('start');

setTimeout(() => {
  console.log('1秒たったよ');
  setTimeout(() => {
    console.log('1秒たったよ');
    setTimeout(() => {
      console.log('1秒たったよ');
    }, 1000);
  }, 1000);
}, 1000);

console.log('end');
