// Create a tuple `Course` that contains a course name, an instructor, and a variable-length list of student names.
// - Write a function `addStudent` that adds a student to the tuple and returns a new tuple.
// - Return type: a new tuple with the student added.

type Course = [
    courseName: string,
    instructor: string,
    ...students: string[]
];


function addStudent(course: Course, student: string): string[] {
    course.push(student)
    console.log(course)
    return course

}

// Expected output:
addStudent(["Math", "Dr. Smith"], "John") // ["Math", "Dr. Smith", "John"]
addStudent(["History", "Ms. Brown", "Jane"], "Emma") // ["History", "Ms. Brown", "Jane", "Emma"]

addStudent(["History", "Ms. Brown", "Jane", "Rmma"], "Emma")