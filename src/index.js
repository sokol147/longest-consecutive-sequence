module.exports = function longestConsecutiveLength(array) {
  if(array.length === 0) return 0;

  array.sort((prev, curr) => {
    return (curr >= prev) ? -1 : 1;
  });

  let max = 1;
  let counter = 1;

  for(let i = 1, len = array.length; i <= len; ++i){
    if(array[i] === array[i - 1]) continue;
    if(array[i] - 1 === array[i - 1]){
      counter++;
    } else {
      diff = array[i] - i;
      counter = 1;
    }
    max = Math.max(counter, max);
  }

  return max;
}
