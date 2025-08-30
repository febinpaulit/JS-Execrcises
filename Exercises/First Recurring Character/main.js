//Given an array = [2,5,1,2,3,5,1,2,4];
//It shoul return 2

//given an array = [2,1,1,2,3,5,1,2,4];
//It should return 1

//Given an array = [2,3,4,5];
//It should return undefined


function firstRecurringCharacter(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j])
                return arr[i];
        }
    }

    return undefined;
}

//O(n^2)

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 3, 4, 5]));


function firstRecurringCharacter2(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            return arr[i];
        }
        else
            map[arr[i]] = i;
    }
    return undefined;
}

// console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter2([2, 3, 4, 5]));

function firstRecurringCharacterBruteForce(arr) {
  let minIndex = arr.length; 
  let result = undefined;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (j < minIndex) {   // keep track of earliest second occurrence
          minIndex = j;
          result = arr[i];
        }
      }
    }
  }

  return result;
}

// Test cases
console.log(firstRecurringCharacterBruteForce([2,5,1,2,3,5,1,2,4])); // 2
console.log(firstRecurringCharacterBruteForce([2,1,1,2,3,5,1,2,4])); // 1 
console.log(firstRecurringCharacterBruteForce([2,3,4,5]));           // undefined