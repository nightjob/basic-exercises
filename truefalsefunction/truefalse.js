function greaterThanOrFalse(a, b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}

let result = greaterThanOrFalse(10, 9);
console.log(result);

result = greaterThanOrFalse(9, 10);
console.log(result);