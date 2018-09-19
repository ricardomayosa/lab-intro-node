class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }
  get(pos) {
    if (this.length > 0) {
      return this.items[pos - 1];
    } else {
      throw new Error("OutOfBounds");
    }
    
  }
  max() {
    if (this.length > 0) {
      return this.items[this.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.length > 0) {
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.length > 0) {
      var sum = this.items.reduce((a, b) => a + b, 0);
      return sum / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    var sum = this.items.reduce((a, b) => a + b, 0);
    return sum;
  }
}

module.exports = SortedList;
