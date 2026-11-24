"use strict";
// 1. Echo Function with Generics
function echo(input) {
    return input;
}
console.log(echo("Ahmed"));
console.log(echo(25));
console.log(echo([10, 20, 30]));
console.log(echo({
    id: 1,
    name: "Ahmed"
}));
// String
const response1 = {
    status: "success",
    data: "Data received successfully"
};
// Object
const response2 = {
    status: "success",
    data: {
        id: 1,
        name: "Ahmed"
    }
};
console.log(response1);
console.log(response2);
// 3. First Element Function
function first(items) {
    return items[0];
}
// Array of numbers
console.log(first([10, 20, 30]));
// Array of strings
console.log(first(["Apple", "Banana", "Orange"]));
// Array of objects
console.log(first([
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Omar" }
]));
