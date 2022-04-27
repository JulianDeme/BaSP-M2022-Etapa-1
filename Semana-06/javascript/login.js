window.onload = function () {

    //elements

    var num = [0,1,2,3,4,5,6,7,8,9];
    var letters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"];
    var symbols = ['+','-','_','@','*'];
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var button = document.getElementById('form-button');

    //Event listeners

    email.addEventListener('focus', focusEmail);
    email.addEventListener('blur', blurEmail);
    password.addEventListener('focus', focusPassword);
    password.addEventListener('blur', blurPassword);
    button.addEventListener('click', loginClick);
    var emailValue = document.getElementById('email').value;
    var passwordValue = document.getElementById('email').value;

    //Functions

    function blurEmail() {

        if (emailValidation()) {
            document.getElementById("label-email").style.color = "#49A37B";
            document.getElementById("email").style.border = "1px solid #49A37B";
            document.getElementById("email-msg").innerHTML = "";
            emailValue = true;
        } else {
            document.getElementById("label-email").style.color = "#F13312";
            document.getElementById("email").style.border = "1px solid #F13312";
            document.getElementById("email-msg").innerHTML = "Email not valid ";
            emailValue = false;
        }
    }

    function focusEmail () {

        document.getElementById("label-email").style.color = "#373867";
        document.getElementById("email").style.border = "1px solid #373867";
        document.getElementById("email-msg").innerHTML = "";
    }

    function blurPassword() {

        if (passwordValidation(document.getElementById('password').value)){
            document.getElementById("label-password").style.color = "#49A37B";
            document.getElementById("password").style.border = "1px solid #49A37B";
            document.getElementById("password-msg").innerHTML = "";
            passwordValue = true;
        } else {
            document.getElementById("label-password").style.color = "#F13312";
            document.getElementById("password").style.border = "1px solid #F13312";
            document.getElementById("password-msg").innerHTML = "Password not valid";
            passwordValue = false;
        }
    }

    function focusPassword () {

        document.getElementById("label-password").style.color = "#373867";
        document.getElementById("password").style.border = "1px solid #373867";
        document.getElementById("password-msg").innerHTML = "";
    }

    function emailValidation() {

        var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var valueEmail = document.getElementById('email').value;

        if (valueEmail.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }

    function passwordValidation(valuePassword) {

        var lettersValidation = false;
        var numValidation = false;
    
        for (var i = 0; i < valuePassword.length; i++) {
                for (let j = 0; j < symbols.length; j++) {
                    if (valuePassword[i] == symbols[j]) {
                        return false;
                }
            }
        }
        for (var i = 0; i < valuePassword.length; i++) {  
            if (!numValidation) {
                for (let j = 0; j < num.length; j++) {
                if (valuePassword[i]==num[j]) {
                    numValidation = true;
                    break;
                }   
            } 
            }
        }
        for (var i = 0; i < valuePassword.length; i++) {  
        if (!lettersValidation) {
            for (let j = 0; j < letters.length; j++) {
                if (valuePassword[i]==letters[j]) {
                    lettersValidation = true;
                    break;
                }
            }
            }
        }

        if (numValidation && lettersValidation) {
            return true;
        } else {
            return false;
        }
    }

    function loginClick(e) {
        e.preventDefault();
        var message = 'Info: ';
        var newline = '\r\n';
        if (emailValue && passwordValue) {
            message += 'correct:' + newline  + 'User email: ' + document.getElementById('email').value 
            + newline + 'Password: ' + document.getElementById('password').value;
        } else {
            message += 'incorrect. Please check the next items: ';
            if (!emailValue) {
                message += newline + 'Email: Please enter a valid email.';
            } if (!passwordValue) {
                message += newline + 'Password: Please enter a valid password. It should contain only letters and numbers';
            }
        }
        window.alert(message);
    }
}


