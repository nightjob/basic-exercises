function isMyNumberThere(array) {
    return array.includes(6);
}
const numbers = [1, 2, 3, 4, 5, 7, 8, 9, 0];
console.log(isMyNumberThere(numbers));

const numbersButWithSix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(isMyNumberThere(numbersButWithSix));