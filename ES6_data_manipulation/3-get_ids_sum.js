function getStudentIdsSum(array) {
  return array.reduce((total, elemento) => {
    return total + elemento.id;
  }, 0);
}

export default getStudentIdsSum;
