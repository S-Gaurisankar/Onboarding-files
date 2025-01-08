function reverseArray(arr) {
    return arr.reverse();
}
var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);
var strings = ['apple', 'banana', 'cherry'];
var reversedStrings = reverseArray(strings);
console.log(reversedStrings);
var people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
var reversedPeople = reverseArray(people);
console.log(reversedPeople);
