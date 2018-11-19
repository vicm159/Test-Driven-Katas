const twoSum = (numbers, target) => {
  if (numbers.length < 2) return [];
  const seen = {};
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const numToFind = target - currentNum;
    if (seen[numToFind] !== undefined) return [seen[numToFind], i];
    seen[currentNum] = i;
  }
  return [];
}
console.log(twoSum([3, 5, 10], 15));
module.exports = twoSum;
