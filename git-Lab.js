//Functions Lab
function minusOne(num){
num--;
console.log(num);
}
minusOne(454);

function makeSentence(a, b, c){
    console.log(a +' '+ b +' '+ c);
}
makeSentence('How', 'are', 'you?');

function makeSentence2(...strings){
    return console.log(strings.join(' '));
}
makeSentence2('Hey,','how','are','you?','I','hope','you','are','doing','well.')

function getLastElement(arr){
    console.log(arr[arr.length -1]);
}
getLastElement([1,2,3,4,5]);
getLastElement(['this', 'is', 'the', 'last', 'word']);
getLastElement([['array','one', '!'],['array','two','!']]);