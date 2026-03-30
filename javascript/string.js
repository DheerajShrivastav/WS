//count the number of vowels in a string
let str = "Hello World"
let vowels = "aeiouAEIOU"
let count = 0
for (let i of str) {
    if(vowels.includes(i)){
        count++
    }
}
console.log(count)

// check if a string is a palindrome
let str1 = "madam"
let reversedStr = ""
for (let i = str1.length - 1; i >= 0; i--) {
    reversedStr += str1[i]
}
if (str1 === reversedStr) {
    console.log("The string is a palindrome")
} else {
    console.log("The string is not a palindrome")
}

//extract the first word from a string
let str2 = "Hello World"
let firstWord = ""

for (let i of str2) {
    if (i === " ") {
        break
    }
    firstWord += i
}
console.log(firstWord)

// replace all spaces in a string with hyphens
let str3 = "JavaScript is a programming language"
str3 = str3.replaceAll(" ", "-")
console.log(str3)

// split a string into an array of words
let str4 = "Hello World"
str4 = str4.split(" ")
console.log(str4)

// convert the first letter of each word in a string to uppercase
let str5 = "hello world"
let capitalizedStr = ""
for (let word of str5.split(" ")) {
    capitalizedStr += word.charAt(0).toUpperCase() + word.slice(1) + " "
}
console.log(capitalizedStr)

// reverse a string
let str6 = "JavaScript"
let reversedStr6 = ""
for (let i = str6.length - 1; i >= 0; i--) {
    reversedStr6 += str6[i]
}
console.log(reversedStr6)
