export default function returnHowManyArguments(...numbers) {
  let count = 0;
  for (let number of numbers) {
     count += 1;
  }
  return count;
}
