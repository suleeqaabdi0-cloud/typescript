
// 1. Add Types to a Function
function fullName(first: string, last: string): string {
    return first + " " + last;
}
console.log(fullName("Osman", "Deeq"));


// 2. Optional and Default Parameters
function registerUser(
    username: string,
    isAdmin?: boolean,
    language: string = "en"
): void {
    console.log(username, isAdmin, language);
}
registerUser("Osman", true, "so");
registerUser("Ahmed");


// 3. Create a Safe Rest Function
function average(...scores: number[]): number {
    if (scores.length === 0) return 0;

    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(average(80, 90, 70));
console.log(average(60, 75, 85, 90, 100));
