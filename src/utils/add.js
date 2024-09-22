export function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/; // default delimiters are comma and newline
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0][2]); // custom delimiter extraction
        numbers = parts[1]; // the rest is the number string
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);

    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
