fetch("1.json")
  .then((response) => response.json())
  .then((s3) => console.log(s3))
  .catch((err) => console.log(err.message));
