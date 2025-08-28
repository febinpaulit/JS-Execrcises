//Given 2 arrays, create a function that letss a user know (true/false) wheteher these two arrays contain any common items
//For Example:
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','i','d'];
//should return false
//----------------------
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','x','d'];
//should return true

//2 parameters - arrays - no size limit
//return true or false

//How large will be the array

// O(n^2)

//array1 ==> obj {
// a : trye,
// b : true,
// c : true,
// x : true
//}
//array2[index] === obj.propertis\es




// function containsCommonItems(arr1, arr2) {
//     //loop through firs array and create object where properties === items in the array
//     let map = {};
//     for (let i = 0; i < arr1.length; i++) {
//         if (!map[arr1[i]]) {
//             const item = array1[i];
//             map[item] = true;
//         }
//     }
//     console.log(map);

//     //loop through second array and check if the item in the seconf=d array exists on created object

//     for (let j = 0; j < arr2.length; j++) {
//         if (map[array2[j]]) {
//             console.log(true);
//             return true;
            
//         }
//     }
//     console.log(false);
//     return false;
// }


//O(a+b)

const array1 = ['a','j', 'c', 'x'];
const array2 = ['z', 'y', 'i', 'x'];


function containsCommonItems(arr1,arr2){
    let a= arr1.some(item => arr2.includes(item));
    console.log(a);
}

containsCommonItems(array1, array2);
