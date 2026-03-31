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