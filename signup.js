function signUp(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;


    if (password!== confirmPassword) {
        alert("Your password does'nt match Please enter correct password");
        return
    } else {
        alert("Signup Successful")
    }
}