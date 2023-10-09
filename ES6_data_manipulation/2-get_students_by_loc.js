export default function getStudentsByLocation(array, parameter) {
  return array.filter((student) => {
    return student.location === parameter;
  });
}
