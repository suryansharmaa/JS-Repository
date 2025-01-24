function Counter() {
  let _digit = 0;

  this.increase = function () {
    _digit++;
  };

  this.decrease = function () {
    _digit--;
  };

  this.getCount = function () {
    return _digit;
  };
}

const count = new Counter();
console.log(count._digit);
console.log(count.getCount());

count.increase();
count.increase();
console.log(count.getCount());

count.decrease();
console.log(count.getCount());
