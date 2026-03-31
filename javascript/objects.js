let student = {
    name: "John Doe",
    age: 20,
    grade: "A",
}
student = {
    ...student,
    subject: "maths"
}
console.log(student)
student.grade = "B"
console.log(student)
delete student.age
console.log(student)

let Books = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    details: {
        pages: 180,
        genre: "Novel"
    }
}
console.log(Books.details)

let product = {
    name: "Laptop",
    price: 999.99,
    stock: 10
}
for (let key in product) {
    console.log(`${key}: ${product[key]}`)
}

let calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        if (b !== 0) {
            return a / b
        } else {
            return "Cannot divide by zero"
        }
    }

}
