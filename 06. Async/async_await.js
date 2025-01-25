function demo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This is a promise function`);
    }, 4000);
  });
}

async function getUserData() {
  try {
    const data = await demo();
    console.log(data);
    console.log(`Remaining tasks to be executed`);
  } catch (error) {
    console.log(`Something wrong here !`);
  }
}

getUserData();

// example ------------------------------------

function callbackHell() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = `Inside (callbackHell) function`;
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let processedData = `${data} : Processed First`;
      console.log("Inside (firstFunction) function");
      resolve(processedData);
    }, 1000);
  });
}

function secondFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let processedData = `${data} : Processed Second`;
      console.log("Inside (secondFunction) function");
      resolve(processedData);
    }, 1500);
  });
}

async function anything() {
  try {
    const data = await callbackHell();
    const processedData1 = await firstFunction(data);
    const processedData2 = await secondFunction(processedData1);
    console.log(`Final Result : ${processedData2}`);
  } catch (error) {
    console.log(`Error ${error}`);
  }
}

anything();
