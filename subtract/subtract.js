const myNumbers = {
    numberOne: 10,
    numberTwo: 5,
    subtractTheseNumbers() {
        return this.numberOne - this.numberTwo;
    }
}

console.log(myNumbers.subtractTheseNumbers())