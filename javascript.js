const request = new XMLHttpRequest();
console.log(1);
request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
console.log(2);
request.onload = function() {
  console.log(3);
  //request.status のチェックをここに移動する。
  if(request.status === 200) {
    console.log(request.response);
  }
}
const before = Date.now();
request.send(null);
const after = Date.now();
const ms = after - before;
console.log(`${ms}: ms`);
console.log(4);