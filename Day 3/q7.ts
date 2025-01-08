function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse(); 
}

const numbers: number[] = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); 

const strings: string[] = ['apple', 'banana', 'cherry'];
const reversedStrings = reverseArray(strings);
console.log(reversedStrings);  

interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: 'Alice', age:   30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
const reversedPeople = reverseArray(people);
console.log(reversedPeople);
