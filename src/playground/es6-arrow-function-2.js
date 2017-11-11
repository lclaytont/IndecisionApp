// arguments obj no longer bound. 

// es6
const add = (a, b) => {
    return a + b;
}

console.log(add(55, 1));

//this - es5 to  es6

const user = {
    name: 'Clay',
    cities: ['Pensacola', 'Memphis', 'Tallahassee'],
    printPlacesLived() {
        return this.cities.map(city => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

//  Challenge 

//  array of nums
// multiplyBy 
// multiplier method 

const multiplier = {
    numbers: [3, 4, 5],
    multiplyBy: 3, 
    multiply() {
        return this.numbers.map(num => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());