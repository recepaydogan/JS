const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  //   console.log(request.readyState, request);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log("We could not get the response successfully");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();
