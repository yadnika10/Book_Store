//Sign up form::
const registrationForm = document.getElementById('SignUpform');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const Name = document.getElementById('Name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (Name.value && email.value && password.value) {
        const user = {
            Name: Name.value,
            email: email.value,
            password: password.value,
        };

        localStorage.setItem('user', JSON.stringify(user));

        alert('Sign up Successfull')
        SignUpform.reset();

    } else {
        alert('Please fill in all details!')
        SignUpform.reset();
    }
});
