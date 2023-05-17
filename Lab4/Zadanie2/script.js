const student = {
  name: "Max",
  surname: "Throwback",
  numer: "w68157",
  ccna: 3,
  wf: 2,
  fizyka: 4,
  numbers: [2, 3, 4],
  sredocena: function() {
    var sum = 0;
    for (var i = 0; i < this.numbers.length; i++) {
      sum += this.numbers[i];
    }
    var average = sum / this.numbers.length;
    console.log("Sredocena: " + average);
  }
};

student.sredocena();
