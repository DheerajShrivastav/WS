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
