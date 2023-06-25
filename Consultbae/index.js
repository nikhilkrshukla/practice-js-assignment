/*
Ques 1: Convert String to Camel Case:
        Write Function which converts input String into camel casing and use delimiter also as per input. 
        Capitalize 1st word only if original word was capital. Following words will always be capitalized. 
        Examples: Function: camelCase("input", "delimiter") camelCase("the-test-case", "-") --> theTestCase 
        camelCase("The_First_Word_Capital", "_") --> TheFirstWordCapital
*/

console.log("Ans 1:");

function camelCase(input, delimiter) {
  return input
    .split(delimiter)
    .map((string, index) => {
      if (index === 0) {
        return string.toLowerCase();
      }
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    })
    .join("");
}

console.log(camelCase("the-test-case", "-")); // theTestCase
console.log(camelCase("The_First_Word_Capital", "_")); // TheFirstWordCapital

/* 
Ques 2: Custom Parser: 
        Write a function which will parse input string as per below logic & return the output as array. 
        Consider initial value as 0 
        p : Adds up value by 1 
        m : reduces value by 1 
        s : square - like if value is 4 - it will become 16 
        o : saves the output in array to be returned. 
        Invalid char shall be skipped. 
        Ex: parse("ppppsmoso") => [ 15, 225 ]
*/

console.log(" ");
console.log(" ");
console.log("Ans 2:");

function parse(input) {
  let output = [];
  let value = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "p") value++;
    else if (input[i] === "m") value--;
    else if (input[i] === "s") value *= value;
    else if (input[i] === "o") output.push(value);
  }
  return output;
}

console.log(parse("ppppsmoso")); // [15, 225]

/*

Ques 3: Find the missing alphabet:
        Write a function to find extra characters from the input string as per below logic, and return output as integer. 
        Legal characters are only a-n, consider case.
        Any character beyond this range shall be counted as extra. 
        Ex: aaabdbnhaikjjm --> 0 abaxbdbbyyhwawiwjjjwemx --> 8

*/

console.log(" ");
console.log(" ");
console.log("Ans 3:");

function findExtraCharacters(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].toLowerCase() < "a" || input[i].toLowerCase() > "n") {
      count++;
    }
  }
  return count;
}

console.log(findExtraCharacters("aaabdbnhaikjjm")); // 0
console.log(findExtraCharacters("abaxbdbbyyhwawiwjjjwemx")); // 8
