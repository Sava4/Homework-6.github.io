let lastAge = 'unmodified'; 
let lastName = 'unmodified';

let age = prompt('How old are you?');

while (age < 1 || !Number.isInteger(parseInt(age))) {
    lastAge = age;
    age = prompt('How old are you? Please enter age number', `${lastAge}`);
}

let name = String.prototype.trim(prompt('Please enter your name'));

while (name === null || name === '' || !isNaN(name)) {
    lastName = name;
    name = prompt('Please enter your name', `${lastName}`);
}

if (age < 18) {
    alert('You are not allowed to visit this website.');
    document.getElementById("app").innerHTML = '<h1>You are not allowed to visit this website.</h1>'
} else if (age <= 22) {
    let decision = confirm('Are you sure you want to continue?');
    decision ? alert(`Welcome, ${name}`) : alert('You are not allowed to visit this website.');
} else if (age > 22) {
    alert(`Welcome, ${name}`);
    document.getElementById("app").innerHTML = `<h1>Welcome, ${name}</h1>`

}