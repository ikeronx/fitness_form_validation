/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
'use strict';

// global variables for
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.close-modal');
// const signUpBtn = document.querySelector('.sign-up-btn')

const toggleModal = () => {
        modal.classList.toggle('hidden');
        overlay.classList.toggle('hidden');
};

// targets all the classes and id from the HTML
const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

// stores classes and id's in variables
const userName = id('username');
const email = id('email');
const password = id('password');
const form = id('form');
const errorMsg = classes('error');
const successIcon = classes('success-icon');
const failureIcon = classes('failure-icon');

// targets form submit button
form.addEventListener('submit', (e) => {
        e.preventDefault();

        // calls the engine function and passes the id and serials of the class names
        // prints an error msg when an error is found when the user click submit
        engine(userName, 0, 'Username cannot be blank');
        engine(email, 1, 'Please enter a valid email address');
        engine(password, 2, 'Password cannot be blank');

        // if all the inputs are valid, the user can submit the form and the modal will pop up with a success message and the form will be reset to blank inputs and icons will be hidden again
        if (userName.value.trim() !== '' && email.value.trim() !== '' && password.value.trim() !== '') {
                toggleModal();
                modalClose.addEventListener('click', toggleModal);
                overlay.addEventListener('click', toggleModal);
                form.reset(); // resets the form to blank inputs
                successIcon[0].style.opacity = '0';
                successIcon[1].style.opacity = '0';
                successIcon[2].style.opacity = '0';
        }
});

// does different sorts of form validation
const engine = (id, serial, message) => {
        // removes extra white spaces from user's inputs
        if (id.value.trim() === '') {
                // print a message inside the error class whenever the user submits a blank form and highlight the failure icons at the same time
                errorMsg[serial].innerHTML = message;
                id.style.border = '2px solid red';

                // icons
                failureIcon[serial].style.opacity = '1';
                successIcon[serial].style.opacity = '0';
        } else {
                // fills in all the inputs and submit it to the server and success icon is visible
                errorMsg[serial].innerHTML = '';
                id.style.border = '2px solid green';

                // icons
                failureIcon[serial].style.opacity = '0';
                successIcon[serial].style.opacity = '1';
        }
};

// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

// In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

// Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

// This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

// In other words, you are abstracting implementation details from the user.

// Only change code below this line
class Thermostat {
        constructor(fahrenheit) {
                this.fahrenheit = fahrenheit;
        }

        get temperature() {
                return (5 / 9) * (this.fahrenheit - 32);
        }

        set temperature(celsius) {
                this.fahrenheit = (celsius * 9.0) / 5 + 32;
        }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
