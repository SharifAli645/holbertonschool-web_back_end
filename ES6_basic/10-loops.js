export default function appendToEachArrayValue(array, appendString) {
  const lista = [];
  for (const value of array) {
    lista.push(appendString + value);
  }

  return lista;
}
