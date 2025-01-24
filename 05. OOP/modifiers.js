// Access Modifiers

function myclass(public, private, protected) {
  // Public Field
  this.public = public;

  // Private Field (use underscore)
  const _private = private;

  // Protected Field (use underscore)
  const _protected = protected;

  // Accessing Public Data
  this.accessPublic = function () {
    return `Public Data : ${this.public}`;
  };

  //   Accessing Private Data
  function _accessPrivate() {
    return `Private Data : ${_private}`;
  }

  //   Accessing Protected Data
  function _accessProtected() {
    return `Protected Data : ${_protected}`;
  }

  //   Loophole to access data of Private and Protected
  this.access = function () {
    return _accessPrivate();
  };
}

let myObject = new myclass(
  "Public Element",
  "Private Element",
  "Protected Element"
);

console.log(myObject.public);
console.log(myObject._private);
console.log(myObject._protected);

console.log(myObject.accessPublic());
// console.log(myObject.accessPrivate());
// console.log(myObject.accessProtected());

console.log(myObject.access());
