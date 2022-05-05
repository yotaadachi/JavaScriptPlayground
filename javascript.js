console.log(1);
setTimeout(() => {
  console.log('1秒たったよ');
  setTimeout(() => {
    console.log('1秒たったよ');
    setTimeout(() => {
      console.log('1秒たったよ');
    }, 1000);
  }, 1000);
}, 1000);
console.log(3);
