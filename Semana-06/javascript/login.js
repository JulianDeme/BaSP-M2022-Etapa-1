window.onload = function () {

    var inputEmail = document.getElementById('email');
    var valueEmail = inputEmail.value;
    console.log (valueEmail);
    console.log (valueEmail.length);
    var inputPassword = document.getElementById ('password');
    var valuePassword = inputPassword.value;
    console.log (valuePassword.length);
    

    //inputEmail.addEventListener("blur" , blurEmail,true);
    //inputEmail.addEventListener("focus" , focusEmail,true);


    

    function blurEmptyEmail() {
        document.getElementById("label-email").style.color = "#F13312";
        document.getElementById("email").style.border = "1px solid #F13312";
        document.getElementById("email-msg").innerHTML = "Email required";
        console.log(inputEmail.value);
    }

    function blurWrongEmail() {
        document.getElementById("label-email").style.color = "#F13312";
        document.getElementById("email").style.border = "1px solid #F13312";
        document.getElementById("email-msg").innerHTML = "Email not valid ";
    }

    function blurValidEmail() {
        document.getElementById("label-email").style.color = "#49A37B";
        document.getElementById("email").style.border = "1px solid #49A37B";
        document.getElementById("email-msg").innerHTML = "";
    }

    function focusEmail() {
        document.getElementById("label-email").style.color = "#373867";
        document.getElementById("email-msg").innerHTML = "";
        
    }

    function blurPassword() {
        document.getElementById("label-password").style.color = "#F13312";
        document.getElementById("password").style.border = "1px solid #F13312";
        document.getElementById("password-msg1").innerHTML = "Password required";
    }

    function focusPassword() {
        document.getElementById("label-password").style.color = "#373867";
        document.getElementById("password-msg1").innerHTML = "";
        
    }
    function blurWrongPassword() {
        document.getElementById("label-email").style.color = "#F13312";
        document.getElementById("email").style.border = "1px solid #F13312";
        document.getElementById("email-msg").innerHTML = "Password not valid ";
    }

    function blurValidPassword() {
        document.getElementById("label-email").style.color = "#49A37B";
        document.getElementById("email").style.border = "1px solid #49A37B";
        document.getElementById("email-msg").innerHTML = "";
    }

    function emailCharValidation (email) {

        var dotChar = false;
        var atChar = false;

        for (let i = 0; i < email.length; i++) {

        if (email[i] === ".") {
            dotChar = true;
        }
        if (email[i] === "@") {
            atChar = true;
        }
        if (dotChar && atChar) {
            return true;
        }else {
            return false;
        }
    }

    function emailLenghtValidation (email) {

        if (email.length > 3) {
            return true;
        } else {
            return false;
        }
    }



    function emailValidation (valueEmail){

        if (valueEmail) {

            inputEmail.addEventListener("blur" , blurEmptyEmail);
            inputEmail.addEventListener("focus" , focusEmail);  

            var emCharVal = emailCharValidation (valueEmail);
            var emLeVal = emailLenghtValidation (valueEmail) ;
        } else if (emCharVal && emLeVal) {

            inputEmail.addEventListener("blur" , blurValidEmail);
            inputEmail.addEventListener("focus" , focusEmail); 
            return true;

            } else {
                inputEmail.addEventListener("blur" , blurWrongEmail);
                inputEmail.addEventListener("focus" , focusEmail); 
        }
    }
        




    var emVal = emailValidation();
    if (emVal) {
        alert ("Email:" + valueEmail + "\n Password: " + valuePassword);
    }
    


    inputPassword.addEventListener("blur" , blurPassword);
    inputPassword.addEventListener("focus" , focusPassword);
}
} 
