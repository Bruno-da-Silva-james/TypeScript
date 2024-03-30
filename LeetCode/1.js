var nums = [2, 5, 5, 11];
var target = 10;
function twoSum(nums, target) {
    var arrayIndex = [];
    for (var i = 0; i < nums.length; i++) {
        var soma = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            if (soma + nums[j] == target) {
                arrayIndex.push(i, j);
                return arrayIndex;
            }
        }
    }
    return arrayIndex;
}
console.log(twoSum(nums, target));
