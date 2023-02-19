export default function getStudentIdsSum(students) {
  const idSum = students.reduce(
    (sum, currentStudent) => sum + currentStudent.id, 0,
  );
  return idSum;
}
