export default function getListStudentIds(arr) {
  console.log(typeof arr);
  if (typeof arr === 'object') {
    return arr.map((student) => student.id);
  }
  return [];
}
