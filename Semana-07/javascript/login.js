window.onload = function () {

    //elements

    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';

    var num = [0,1,2,3,4,5,6,7,8,9];
    var letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ',
    'o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var symbols = ['+','-','_','@','*'];
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var button = document.getElementById("form-button");

    var emailConfirm = false;
    var passwordConfirm = false;
    var dataConfirm = false;

    var emailData = 'rose@radiumrocket.com';
    var passwordData = 'BaSP2022';
    console.log(emailData);
    console.log(passwordData);

    //Event listeners

    email.addEventListener('focus', focusEmail);
    email.addEventListener('blur', blurEmail);
    password.addEventListener('focus', focusPassword);
    password.addEventListener('blur', blurPassword);
    button.addEventListener('click', loginClick);

    //Functions

    function blurEmail() {

        if (emailValidation(document.getElementById("email").value)) {
            document.getElementById("label-email").style.color = '#49A37B';
            document.getElementById("email").style.border = '1px solid #49A37B';
            document.getElementById("email-msg").innerHTML = '';
            emailConfirm = true;
        } else {
            document.getElementById("label-email").style.color = '#F13312';
            document.getElementById("email").style.border = '1px solid #F13312';
            document.getElementById("email-msg").innerHTML = 'Email not valid';
            emailConfirm = false;
        }
    }

    function focusEmail () {

        document.getElementById("label-email").style.color = '#373867';
        document.getElementById("email").style.border = '1px solid #373867';
        document.getElementById("email-msg").innerHTML = '';
    }

    function blurPassword() {

        if (passwordValidation(document.getElementById("password").value)){
            document.getElementById("label-password").style.color = '#49A37B';
            document.getElementById("password").style.border = '1px solid #49A37B';
            document.getElementById("password-msg").innerHTML = '';
            passwordConfirm = true;
        } else {
            document.getElementById("label-password").style.color = '#F13312';
            document.getElementById("password").style.border = '1px solid #F13312';
            document.getElementById("password-msg").innerHTML = 'Password not valid';
            passwordConfirm= false;
        }
    }

    function focusPassword () {

        document.getElementById("label-password").style.color = '#373867';
        document.getElementById("password").style.border = '1px solid #373867';
        document.getElementById("password-msg").innerHTML = '';
    }

    function emailValidation(valueEmail) {

        var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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

    function dataLogIn (emailData, passwordData) {

        if ((emailData.localeCompare(document.getElementById("email").value)) + (passwordData.localeCompare(document.getElementById("password").value)) === 0) {
            dataConfirm = true;
        } else {
            dataConfirm = false;
        }
    }

    function loginClick(e) {

        e.preventDefault();
        var message = '';
        var newline = '\r\n';

        dataLogIn (emailData, passwordData);

        if (emailConfirm && passwordConfirm && dataConfirm) {
            logInRequest();
        } else {
            message += 'incorrect. Please check the next items: ';
            if (!emailConfirm) {
                message += newline + 'Email: Please enter a valid email.';
            } if (!passwordConfirm) {
                message += newline + 'Password: Please enter a valid password. It should contain only letters and numbers';
            }
            if (emailConfirm && passwordConfirm) {
                message += newline + 'Wrong email or password';
            }
            window.alert(message);
        }
    }

    function logInRequest () {

        var emailV = document.getElementById("email").value;
        var passwordV = document.getElementById("password").value;
        
        fetch (url + '?email=' + emailV + '&password=' + passwordV)
        .then (function(response){
            return response.json();
        })
        .then (function(jsonResponse){
            alert (jsonResponse.msg);
        })
        .catch(function(error){
            console.log('error', error);
        })
    }
}



