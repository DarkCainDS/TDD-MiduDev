import { fizzbuzz } from './FizzBuzz';
import { describe, expect, it } from 'vitest'

describe("fizzbuzz", () => {
    it("should be a funtion", () => {
        expect(typeof fizzbuzz).toBe("function");
    });

    it('should throw if not a number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow()
    });

    it('should throw a specific error message if not number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow("Input must be a number")
    });

    it('should throw a specific error message not a number is provided', () => {
        expect(() => fizzbuzz("a")).toThrow("Input must be a number")
    });

    it('should return 1 if number provided is 1', () => {
        expect(fizzbuzz(1)).toBe(1)
    });
    it('should return 2 if number provided is 2', () => {
        expect(fizzbuzz(1)).toBe(1)
    });
    it('should return "fizz" if number provided is 3', () => {
        expect(fizzbuzz(3)).toBe("Fizz")
    });
    it('should return "Buzz" if number provided is 5', () => {
        expect(fizzbuzz(5)).toBe("Buzz")
    });
    it('should return "FizzBuzz" if number provided is 5', () => {
        expect(fizzbuzz(15)).toBe("FizzBuzz")
    });
    it('should return "Wuff" if number provided is 7', () => {
        expect(fizzbuzz(7)).toBe("Wuff")
    });
    it('should return "FizzWuff" if number provided is 21', () => {
        expect(fizzbuzz(21)).toBe("FizzWuff")
    });
    it('should return "FizWuff" if number provided is 35', () => {
        expect(fizzbuzz(35)).toBe("BuzzWuff")
    });
});