function moveZeroes(nums) {
    let lastNonZero = 0; 

    for (let i = 0; i < nums.length; i++) {

        console.log(nums[i],i,lastNonZero,nums);

        if (nums[i] !== 0) {
            if (i !== lastNonZero) {
                [nums[i], nums[lastNonZero]] = [nums[lastNonZero], nums[i]];
            }
            lastNonZero++;
        }
    }
    return nums; 
}


console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
// console.log(moveZeroes([0]));          // [0]
// console.log(moveZeroes([1,2,3]));      // [1,2,3]