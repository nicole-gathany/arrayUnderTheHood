class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const result = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return result;
  }

  get(index) {
    return this.data[index];
  }

  print() {
    console.log(this.data);
  }
}

let newArray = new ArrayList();
newArray.push("Bethany");
newArray.push("Tiffany");
newArray.push("Ashley");
newArray.print();
console.log(newArray.pop());
newArray.print();
console.log(newArray.get(0));
console.log(newArray.get(1));
newArray.push("ChiChi");
newArray.push("Lisa");
newArray.push("Azan");
