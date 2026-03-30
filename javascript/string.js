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
