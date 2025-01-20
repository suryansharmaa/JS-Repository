function showCallFunc(fn) {
  let variable = 10;
  fn(variable);
}

showCallFunc(function (variable) {
  console.log(variable);
});
