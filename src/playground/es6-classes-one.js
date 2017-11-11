// website to sell cars 
// make
// model
// vin 

// getDescription method -> return string 

class Person {

    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi! My name is ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} ${this.age === 1 ? 'year' : 'years'} old.`
    }
}

class Student extends Person {
    constructor(name, age, major='undecided') {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        if (this.major === 'undecided') {
            return false;
        }
        return true;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` They major in ${this.major}.`;
        }

        return description;
    }
}


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting(); 

        if (!!this.homeLocation) {
            greeting += ` I love to travel, but I hail from ${this.homeLocation}!`;
        }

        return greeting;
    }
}

const me = new Traveler('Clay Terry', 30, 'Pensacola');
const other = new Traveler('Jake', 19);

console.log(me.getGreeting());
console.log(other.getGreeting());