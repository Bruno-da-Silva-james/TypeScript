let nums: Array<number> = [2, 5, 5, 11];

let target: number = 10;

function twoSum(nums: number[], target: number): number[] {
  let arrayIndex: Array<number> = [];
  

  for (let i = 0; i < nums.length; i++) {
    let soma: number = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (soma + nums[j] == target) {
        arrayIndex.push(i, j);
        return arrayIndex;
      }
    }
  }

  return arrayIndex;
}

console.log(twoSum(nums, target));