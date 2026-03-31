const PI = Math.PI
console.log(PI)
let x = 0, sum = 0
console.log(typeof(x))


for (let i = 1; i <= 50; i++) {
    console.log(i);
    
}

while (x <= 50){
    sum +=x
    x++
}
console.log(sum)

let subject = "JavaScript"
console.log(subject.length)
for (let i of subject) {
    console.log(i)
}

for (let i = 1; i < 20; i++) {
    if(i % 2 !== 0){
        console.log(i)
    }
}
var target = 5
do {
    console.log(target)
    target -= 1
} while (target > 0)
let count = 1
for (let i = 1; i <= 5; i++) {
    count *= i
}
console.log(count)

for (let i = 1; i <= 3; i++) {
    let row = ""
    for (let j = 1; j <= 3; j++) {
        row += `${j} `
    }
    console.log(row,"\n")
}

let arr = [1, 2, 3, 4, 5]
let element 
for (let i = 0; i < arr.length / 2; i++) {
    
        element = arr[i] 
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = element
}
console.log(arr)

let num = 100
while (num > 0) {
    if (num % 5 === 0) {
        console.log(num)
    }
    num--
}

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}
for (let key in obj){
    console.log(`${key}`)
}

let movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction"]
for (let movie of movies) {
    console.log(movie)
}
movies.unshift("The Lord of the Rings","ek tha tiger")
console.log(movies)

console.log(movies.slice(0, 3))
console.log(movies.includes("The Matrix"))
movies.pop()
console.log(movies)

let arr1 = [5,2,9,1]
arr1.sort((a, b) => b -a)
console.log(arr1)

let copyArr = arr1.copyWithin(0, 0)
console.log(copyArr)

function sumofarray(...arr){
    let sum = 0
    for (let num of arr) {
        sum += num
    }
    console.log(sum)
}
sumofarray(1, 2, 3, 4, 5)

function startwithA(str){
    if (str.startsWith("A")) {
        console.log(`${str} starts with A`)
    } else {
        console.log(`${str} does not start with A`)
    }
}
startwithA("Apple")
startwithA("Banana")

