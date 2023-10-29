SignUpform.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const emailid = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = localStorage.getItem('user');
    if(validUsername){
        const userData = JSON.parse(validUsername);
        console.log(userData.email)
        if(userData.email === emailid && userData.password === password){
            alert("Login is Successfull")
            SignUpform.reset();
        }else{
            alert("Login Failed! Check your username or password")
            SignUpform.reset();
        }
    }
})