var myList = [
["Apple", 50],
 ["pineApple", 250],
 ["grapes", 1000],
 ["watermelon", 150],
 ["bananas", 100]
];

var firstElement = myList.shift();
var lastElement = myList.pop();
console.log(firstElement);
console.log(lastElement);

myList.splice(3,3,["orange juice", 17]);
console.log(myList);

