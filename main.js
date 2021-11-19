/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
'use strict';

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
        engine(email, 1, 'Email cannot be blank');
        engine(password, 2, 'Password cannot be blank');
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
