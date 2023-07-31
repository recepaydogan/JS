/* const getData = async () => {
  let response = await fetch("1.json");
  if (response.status !== 200) {
    throw new Error("Error. Please try again");
  }
  let data = await response.json();
  return data;
};
getData()
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message));
 */

const getData = async () => {
  let response = await fetch("1.json");
  if (response.status !== 200) {
    throw new Error("Error");
  }
  let data = response.json();
  return data;
};

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
