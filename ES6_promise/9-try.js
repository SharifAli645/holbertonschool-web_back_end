export default function guardrail(func) {
  const arr = [];
  try {
    arr.push(func());
  } catch (error) {
    arr.push(`${error.name}: ${error.message}`);
  } finally {
    arr.push('Guardrail was processed');
  }
  return arr;
}
