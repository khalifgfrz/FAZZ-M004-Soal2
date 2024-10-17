function soal2(nums, n) {
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(nums[i]);
    res.push(nums[i + n]);
  }
  return res;
}

let nums = [2, 5, 1, 3, 4, 7];
let n = 3;

console.log(soal2(nums, n));
