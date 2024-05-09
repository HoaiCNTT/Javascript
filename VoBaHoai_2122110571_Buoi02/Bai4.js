function calculator() {
    this.add = function(a, b) {
      return a + b;
    };
    this.subtract = function(a, b) {
      return a - b;
    };
    this.multiply = function(a, b) {
      return a * b;
    };
    this.divide = function(a, b) {
      if (b === 0) {
        throw new Error("Không thể chia cho số 0!");
      }
      return a / b;
    };
    this.sqrt = function(a) {
      return Math.sqrt(a);
    };
    this.power = function(a, b) {
      return Math.pow(a, b);
    };
  }