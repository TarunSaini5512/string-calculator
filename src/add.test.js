import { add } from "./utils/add";

describe('String Calculator - add function', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(add("1,2")).toBe(3);
    });

    test('should return the sum of numbers separated by new lines', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should handle different delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('should throw an error when a negative number is passed', () => {
        expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    });

    test('should throw an error when multiple negative numbers are passed', () => {
        expect(() => add("1,-2,-3,4")).toThrow("Negative numbers not allowed: -2, -3");
    });

    test('should return the sum of any amount of numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });
});
