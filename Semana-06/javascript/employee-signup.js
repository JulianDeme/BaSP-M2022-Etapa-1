window.onload = function () {

    //elements

    var num = [0,1,2,3,4,5,6,7,8,9];
    var letters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'ñ',"o","p","q","r","s","t","u","v","w","x","y","z"];
    var symbols = ['+','-','_','@','*'];

    var name = document.getElementById('fname');
    var surname = document.getElementById('surname');
    var dni = document.getElementById('dni');
    var birthDate = document.getElementById('birthdate');
    var number = document.getElementById('pnumber');
    var address = document.getElementById('address');
    var location = document.getElementById('location');
    var postalCode = document.getElementById('pcode');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var rPassword = document.getElementById('rpassword');
    var button = document.getElementById('form-button');

     //Event listeners

    name.addEventListener('focus', focusName);
    name.addEventListener('blur', blurName);
    surname.addEventListener('focus', focusSurname);
    surname.addEventListener('blur', blurSurname);
    dni.addEventListener('focus', focusDni);
    dni.addEventListener('blur', blurDni);
    birthDate.addEventListener('focus', focusBirthday);
    birthDate.addEventListener('blur', blurBirthday);
    number.addEventListener('focus', focusNumber);
    number.addEventListener('blur', blurNumber);
    address.addEventListener('focus', focusAddress);
    address.addEventListener('blur', blurAddress);
    location.addEventListener('focus', focusLocation);
    location.addEventListener('blur', blurLocation);
    postalCode.addEventListener('focus', focusPostalCode);
    postalCode.addEventListener('blur', blurPostalCode);
    email.addEventListener('focus', focusEmail);
    email.addEventListener('blur', blurEmail);
    password.addEventListener('focus', focusPassword);
    password.addEventListener('blur', blurPassword);
    rPassword.addEventListener('focus', focusRPassword);
    rPassword.addEventListener('blur', blurRPassword);
    button.addEventListener('click', loginClick);

    //Functions

    function focusName() {

        if (nameValidation) {
            document.getElementById("label-fname").style.color = "#49A37B";
            document.getElementById("fname").style.border = "1px solid #49A37B";
            document.getElementById("name-msg").innerHTML = "";
        } else {
            document.getElementById("label-fname").style.color = "#49A37B";
            document.getElementById("fname").style.border = "1px solid #F13312";
            document.getElementById("name-msg").innerHTML = "Email not valid ";
        }
    }

    function blurName() {

        document.getElementById("label-fname").style.color = "#373867";
        document.getElementById("fname").style.border = "1px solid #373867";
        document.getElementById("name-msg").innerHTML = "";
    }

    function focusSurname() {

        if (surnameValidation) {
            document.getElementById("label-surname").style.color = "#49A37B";
            document.getElementById("surname").style.border = "1px solid #49A37B";
            document.getElementById("surname-msg").innerHTML = "";
        } else {
            document.getElementById("label-surname").style.color = "#F13312";
            document.getElementById("surname").style.border = "1px solid #F13312";
            document.getElementById("surname-msg").innerHTML = "Email not valid ";
        }
    }

    function blurSurname() {

        document.getElementById("label-surname").style.color = "#373867";
        document.getElementById("surname").style.border = "1px solid #373867";
        document.getElementById("surname-msg").innerHTML = "";
    }

    function focusDni() {
        
        if (dniValidation) {
            document.getElementById("label-dni").style.color = "#49A37B";
            document.getElementById("dni").style.border = "1px solid #49A37B";
            document.getElementById("dni-msg").innerHTML = "";
        } else {
            document.getElementById("label-dni").style.color = "#F13312";
            document.getElementById("dni").style.border = "1px solid #F13312";
            document.getElementById("dni-msg").innerHTML = "Email not valid ";
        }
    }

    function blurDni() {

        document.getElementById("label-dni").style.color = "#373867";
        document.getElementById("dni").style.border = "1px solid #373867";
        document.getElementById("dni-msg").innerHTML = "";
    }
    
    function focusBirthday() {

        if (birthdateValidation) {
            document.getElementById("label-birthdate").style.color = "#49A37B";
            document.getElementById("birthdate").style.border = "1px solid #49A37B";
            document.getElementById("birthdate-msg").innerHTML = "";
        } else {
            document.getElementById("label-birthdate").style.color = "#F13312";
            document.getElementById("birthdate").style.border = "1px solid #F13312";
            document.getElementById("birthdate-msg").innerHTML = "Email not valid ";
        }
    }

    function blurBirthday() {

        document.getElementById("label-birthdate").style.color = "#373867";
        document.getElementById("birthdate").style.border = "1px solid #373867";
        document.getElementById("birthdate-msg").innerHTML = "";
    }

    function focusNumber() {

        if (numberValidation) {
            document.getElementById("label-pnumber").style.color = "#49A37B";
            document.getElementById("pnumber").style.border = "1px solid #49A37B";
            document.getElementById("phone-msg").innerHTML = "";
        } else {
            document.getElementById("label-pnumber").style.color = "#F13312";
            document.getElementById("pnumber").style.border = "1px solid #F13312";
            document.getElementById("phone-msg").innerHTML = "Email not valid ";
        }
    }

    function blurNumber() {

        document.getElementById("label-pnumber").style.color = "#373867";
        document.getElementById("pnumber").style.border = "1px solid #373867";
        document.getElementById("phone-msg").innerHTML = "";
    }
    
    function focusAddress() {
        
        if (addressValidation) {
            document.getElementById("label-address").style.color = "#49A37B";
            document.getElementById("address").style.border = "1px solid #49A37B";
            document.getElementById("address-msg").innerHTML = "";
        } else {
            document.getElementById("label-address").style.color = "#F13312";
            document.getElementById("address").style.border = "1px solid #F13312";
            document.getElementById("address-msg").innerHTML = "Email not valid ";
        }
    }

    function blurAddress() {
        
        document.getElementById("label-address").style.color  = "#373867";
        document.getElementById("address").style.border = "1px solid #373867";
        document.getElementById("address-msg").innerHTML = "";
    }

    function focusLocation() {
        
        if (locationValidation) {
            document.getElementById("label-location").style.color = "#49A37B";
            document.getElementById("location").style.border = "1px solid #49A37B";
            document.getElementById("location-msg").innerHTML = "";
        } else {
            document.getElementById("label-location").style.color = "#F13312";
            document.getElementById("location").style.border = "1px solid #F13312";
            document.getElementById("location-msg").innerHTML = "Email not valid ";
        }
    }

    function blurLocation() {

        document.getElementById("label-location").style.color = "#373867";
        document.getElementById("location").style.border = "1px solid #373867";
        document.getElementById("location-msg").innerHTML = "";
    }

    function focusPostalCode() {
             
        if (postalCodeValidation) {
            document.getElementById("label-pcode").style.color = "#49A37B";
            document.getElementById("pcode").style.border = "1px solid #49A37B";
            document.getElementById("postal-msg").innerHTML = "";
        } else {
            document.getElementById("label-pcode").style.color = "#F13312";
            document.getElementById("pcode").style.border = "1px solid #F13312";
            document.getElementById("postal-msg").innerHTML = "Email not valid ";
        }
    }

    function blurPostalCode() {

        document.getElementById("label-pcode").style.color = "#373867";
        document.getElementById("pcode").style.border = "1px solid #373867";
        document.getElementById("postal-msg").innerHTML = "";
    }

    function focusEmail() {
             
        if (emailValidation) {
            document.getElementById("label-email").style.color = "#49A37B";
            document.getElementById("email").style.border = "1px solid #49A37B";
            document.getElementById("dni-email").innerHTML = "";
        } else {
            document.getElementById("label-email").style.color = "#F13312";
            document.getElementById("email").style.border = "1px solid #F13312";
            document.getElementById("dni-email").innerHTML = "Email not valid ";
        }
    }

    function blurEmail() {

        document.getElementById("label-email").style.color = "#373867";
        document.getElementById("email").style.border = "1px solid #373867";
        document.getElementById("dni-email").innerHTML = "";
    }

    function focusPassword() {
             
        if (passwordValidation) {
            document.getElementById("label-password").style.color = "#49A37B";
            document.getElementById("password").style.border = "1px solid #49A37B";
            document.getElementById("password-msg").innerHTML = "";
        } else {
            document.getElementById("label-password").style.color = "#F13312";
            document.getElementById("password").style.border = "1px solid #F13312";
            document.getElementById("password-msg").innerHTML = "Email not valid ";
        }
    }

    function blurPassword() {

        document.getElementById("label-password").style.color = "#373867";
        document.getElementById("password").style.border = "1px solid #373867";
        document.getElementById("password-msg").innerHTML = "";
    }

    function focusRPassword() {
             
        if (rPasswordValidation) {
            document.getElementById("rpassord-dni").style.color = "#49A37B";
            document.getElementById("rpassword").style.border = "1px solid #49A37B";
            document.getElementById("rpassword-msg").innerHTML = "";
        } else {
            document.getElementById("rpassord-dni").style.color = "#F13312";
            document.getElementById("rpassword").style.border = "1px solid #F13312";
            document.getElementById("rpassword-msg").innerHTML = "Email not valid ";
        }
    }

    function blurRPassword() {

        document.getElementById("rpassord-dni").style.color = "#373867";
        document.getElementById("rpassword").style.border = "1px solid #373867";
        document.getElementById("rpassword-msg").innerHTML = "";
    }

    function nameValidation() {

    }

    function surnameValidation() {

    }
     
    function dniValidation() {

    }
     
    function birthdateValidation() {

    }
     
    function numberValidation() {

    }
     
    function addressValidation() {

    }
     
    function locationValidation() {

    }
     
    function postalCodeValidation() {

    }
     
    function emailValidation() {

    }
     
    function passwordValidation() {

    }
     
    function rPasswordValidation() {

    }

    function loginClick(e) {
        e.preventDefault();
        var message = 'Info: ';
        var newline = '\r\n';
        
        window.alert(message);
    }
}

    













}    