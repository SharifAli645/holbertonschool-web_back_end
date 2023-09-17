export default function appendToEachArrayValue(array, appendString) {
    const lista = []; 
    for (let value of array) {
    array.push(appendString + value);
  }

  return array;
}
