const url = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
  const result = await fetch(url);
  console.log({ result });
  const json = result.json();
  console.log({ json });
};

fetchUsers();
