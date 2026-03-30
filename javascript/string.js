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
