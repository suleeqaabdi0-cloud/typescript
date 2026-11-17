

interface User {
    readonly id: number;
    username: string;
    password: string;
    email?: string;
}

// Login Function
function login(user: User): void {
    console.log("User ID:", user.id);
    console.log("Username:", user.username);
    console.log("Password:", user.password);
    console.log("Email:", user.email ?? "No email provided");
}

// 1. User without email
login({
    id: 1,
    username: "Ahmed",
    password: "123456"
});

// 2. User with email
login({
    id: 2,
    username: "Ali",
    password: "abc123",
    email: "ali@gmail.com"
});

// 3. Readonly in Action
const user1: User = {
    id: 3,
    username: "Hassan",
    password: "password123",
    email: "hassan@gmail.com"
};

login(user1);

