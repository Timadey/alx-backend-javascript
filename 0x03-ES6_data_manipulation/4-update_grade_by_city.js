export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradedStudents = students.filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.filter(
        (grade) => grade.studentId === student.id,
      );
      /* eslint-disable no-param-reassign */
      if (studentGrade.length === 0) {
        student.grade = 'N/A';
        return student;
      }
      student.grade = studentGrade[0].grade;
      return student;
      /* eslint-enable no-param-reassign */
    });
  return gradedStudents;
}
