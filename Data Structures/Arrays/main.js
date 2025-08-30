const strings = ['a','b','c','d'];
//4*4 = 16 bytes of storage

console.log(strings[2]);

//push - add end of the array

strings.push('e'); //O(1)

//console.log(strings);

strings.pop(); //O(1)

//console.log(strings);

//unshift

strings.unshift('x');//O(n)

//splice

strings.splice(2,0,'Alien');//O(n)

console.log(strings);
