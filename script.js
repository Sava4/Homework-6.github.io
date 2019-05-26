let lastAge = 'unmodified'; 
let lastName = 'unmodified';

let age = prompt('How old are you?');

while (age < 1 || !Number.isInteger(parseInt(age))) {
    lastAge = age;
    age = prompt('How old are you? Please enter age number', `${lastAge}`);
}

let name = prompt('Please enter your name');

while (name === null || name === '' || name === ' ' || !isNaN(name)) {
    lastName = name;
    name = prompt('Please enter your name', `${lastName}`);
}

if (age < 18) {
    alert('You are not allowed to visit this website.');
} else if (age <= 22) {
    let decision = confirm('Are you sure you want to continue?');
    decision ? alert(`Welcome, ${name}`) : alert('You are not allowed to visit this website.');
} else if (age > 22) {
    alert(`Welcome, ${name}`);
}