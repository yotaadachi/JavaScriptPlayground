const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log({result});

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    console.log({response});
    const json = response.json();
    console.log({json});
    return json;
  })
  .then((json) => console.log(json));