function addThisArray(myArray) {
    let total = 0
    for (let i = 0; i < myArray.length; i++) {
        total += myArray[i];
    }
    return total;
}

let result = addThisArray([4, 2, 6, 3, 5]);
console.log(result);