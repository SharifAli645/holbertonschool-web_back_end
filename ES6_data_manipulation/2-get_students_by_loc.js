export default function getStudentsByLocation(array, parameter) {
  return array.filter((student) => student.location === parameter);
}
