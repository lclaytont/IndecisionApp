var nameVar = 'Andrew';

console.log('nameVar', nameVar);

let nameLet = 'Jen'; 
nameLet = 'Julie'
console.log('nameLet', nameLet);

const nameConst = 'Frank'; 

console.log('nameConst', nameConst);

const fullName = 'Leonard Clayton Terry'; 
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName);