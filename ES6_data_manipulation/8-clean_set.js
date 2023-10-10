function cleanSet (conjunto, filtro) {
  const resultado = [];

  for (const cadena of conjunto) {
    if (cadena.includes(filtro) && filtro !== '') { resultado.push(cadena.replace(filtro, '')); }
  }
  return resultado.join('-');
}

export default cleanSet;
