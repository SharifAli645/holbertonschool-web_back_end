export default function appendToEachArrayValue(array, appendString) {
  const lista = []; 
  for (const value of array) {
    array.push(appendString + value);
  }
  return array;
}
