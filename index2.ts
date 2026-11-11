let names: string[] = ["Ahmed", "Ali", "Amina"];
// Array of numbers
let grades: number[] = [90, 85, 70, 95];

// Array of booleans
let status: boolean[] = [true, false, true];

// Adding correct values
names.push("Hassan");
grades.push(100);
status.push(false);

console.log(names);
console.log(grades);
console.log(status);
// Wrong types (Compile Errors)

// names.push(100);
// grades.push("A");
// status.push("yes");

let products: string[] = ["Phone", "Laptop"];

products.push("Tablet");
products.push("Computer");

console.log(products);

// Wrong values (Compile Errors)

// products.push(9);
// products.push(true);
// products.push(100);

let location: [string, number, number] = [
    "Mogadishu",
    2.0469,
    45.3182
];

console.log(location);