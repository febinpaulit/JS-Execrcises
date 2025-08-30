function twoSum(nums, target) {
    const map = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
    
    return []; 
}


function twoSum2(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}


console.log(twoSum([2, 7, 11, 15], 9));  
console.log(twoSum([3, 2, 4], 6));       
console.log(twoSum([3, 3], 6));         

console.log(twoSum2([2, 7, 11, 15], 9));  
console.log(twoSum2([3, 2, 4], 6));   