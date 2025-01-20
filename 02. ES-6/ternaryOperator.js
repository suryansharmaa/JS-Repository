//  condition ? excecute-If_true : excecute-If_false
// Shorter way of if-else statements

password = (pswd) => {
  return pswd === 8
    ? console.log("Strong Password")
    : console.log("Password should be 8 characters");
};

password(5);
