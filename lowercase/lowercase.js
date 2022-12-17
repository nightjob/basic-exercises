function lowerCase(myString) {
    return myString.toLowerCase();
}

const myArray = ["HERE IS WHAT IM WRITING IN CAPS"];
const lowerCased = myArray.map(lowerCase);
console.log(lowerCased);