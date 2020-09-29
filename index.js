
function sum(fromN, toN) {
  let res = fromN;
  if (fromN == toN) {
    return res;
  }
  fromN++;
  return res + sum(fromN, toN);
}
module.exports = sum;

