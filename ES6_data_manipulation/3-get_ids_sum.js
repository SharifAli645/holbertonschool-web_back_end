function getStudentIdsSum(array) {
  return array.reduce((total, elemento) => total + elemento.id, 0);
}

export default getStudentIdsSum;
