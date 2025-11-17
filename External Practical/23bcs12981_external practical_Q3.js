const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully");

  }, 2000);
});

myPromise
  .then(message => console.log(message))
  .catch(error => console.log("Error:", error));
