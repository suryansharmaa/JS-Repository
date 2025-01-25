function callbackHell(callback) {
  setTimeout(() => {
    const data = `Inside (callbackHell) function`;
    console.log(data);
    callback(data);
  }, 2000);
}

function firstFunction(data, callback) {
  setTimeout(() => {
    const processedData = `${data} : Processed First`;
    console.log("Inside (firstFunction) function");

    callback(processedData);
  }, 1000);
}

function secondFunction(data, callback) {
  setTimeout(() => {
    const processedData = `${data} : Processed Second`;
    console.log("Inside (secondFunction) function");
    callback(processedData);
  }, 1500);
}

//  Callback Hell
callbackHell((data) => {
  firstFunction(data, (processedData1) => {
    secondFunction(processedData1, (processedData2) => {
      console.log(`Final result of all funtions : ${processedData2}`);
    });
  });
});

// Callback can be Synchronous too
console.log("Start");
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.forEach((n) => console.log(n));
console.log("End");
