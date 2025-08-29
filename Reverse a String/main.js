//create a function that revese a string:
//'Hi My name is Febin' shoul be:
//'nibeF si eman yM iH'

function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof str != 'string') {
        return 'Not good';
    }

    const backword = [];

    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backword.push(str[i]);
    }

    return backword.join('');
}

function reverse2(str){
    return str.split('').reverse().join('');
}

const reverse3 = str =>[...str].reverse().join('');

console.log(reverse('Hi My name is Febin'));
console.log(reverse2('Hi My name is Febin'));
console.log(reverse3('Hi My name is Febin'));