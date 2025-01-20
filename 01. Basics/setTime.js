function some() {
  console.log("Just trying and see if it works");
}

const interval = setInterval(some, 2000); // (2000 = 2s)

// setTimeout(some, 3000);

setTimeout(function () {
  clearInterval(interval);
  console.log("Just stop already");
}, 10000);
