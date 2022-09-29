export const fizzbuzz = (number) => {

    if(typeof number !== "number") 
    throw new Error("Input must be a number");

    if(Number.isNaN(number)) 
    throw new Error("Input must be a number");

    const multiples = { 3: "Fizz", 5: "Buzz", 7: "Wuff" };

    let output = '';

        Object
        .entries(multiples)
        .forEach(([multiple, word]) => {
            if(number % multiple === 0) output += word
        
        })
        return output === '' ? number : output;
    }

