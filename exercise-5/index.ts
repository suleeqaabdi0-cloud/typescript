// 1. Echo Function with Generics

function echo<T>(input: T): T {
    return input;
}

console.log(echo<string>("Ahmed"));
console.log(echo<number>(25));
console.log(echo<number[]>([10, 20, 30]));
console.log(echo<{ id: number; name: string }>({
    id: 1,
    name: "Ahmed"
}));


// 2. Generic Interface

interface ApiResult<T> {
    status: string;
    data: T;
}

// String
const response1: ApiResult<string> = {
    status: "success",
    data: "Data received successfully"
};

// Object
const response2: ApiResult<{ id: number; name: string }> = {
    status: "success",
    data: {
        id: 1,
        name: "Ahmed"
    }
};

console.log(response1);
console.log(response2);


// 3. First Element Function

function first<T>(items: T[]): T {
    return items[0];
}

// Array of numbers
console.log(first<number>([10, 20, 30]));

// Array of strings
console.log(first<string>(["Apple", "Banana", "Orange"]));

// Array of objects
console.log(first<{ id: number; name: string }>([
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Omar" }
]));