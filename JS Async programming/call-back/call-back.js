const getToDos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      // we get datas as string at the beggining and then parse them to json format

      if (request.readyState === 4 && request.status === 200) {
        const parsedData = JSON.parse(request.responseText);
        resolve(parsedData);
      } else if (request.readyState === 4) {
        reject("we could not get the request successfully");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getToDos("1.json")
  .then((data) => {
    console.log(data);
    return getToDos("2.json").then((data) => {
      console.log(data);
      return getToDos("3.json").then((data) => {
        console.log(data);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
