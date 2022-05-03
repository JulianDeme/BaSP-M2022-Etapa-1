window.onload = function () {

    //elements

    var num = [0,1,2,3,4,5,6,7,8,9];
    var letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ',
    'o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var symbols = ['+','-','_','@','*'];
    var newline = '\r\n';

    var nameConfirmation = false;
    var surnameConfirmation = false;
    var dniConfirmation = false;;
    var birthDateConfirmation = false;
    var numberConfirmation = false;
    var addressConfirmation = false;
    var locationConfirmation = false;
    var postalCodeConfirmation = false;
    var emailConfirmation = false;
    var passwordConfirmation = false;
    var rPasswordConfirmation = false;
    var buttonConfirmation = false;


    //Event listeners

    var name = document.getElementById("fname");
    var surname = document.getElementById("surname");
    var dni = document.getElementById("dni");
    var birthDate = document.getElementById("birthdate");
    var number = document.getElementById("pnumber");
    var address = document.getElementById("address");
    var location = document.getElementById("location");
    var postalCode = document.getElementById("pcode");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var rPassword = document.getElementById("rpassword");
    var button = document.getElementById("form-button");

    //Functions

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
    button.addEventListener('click', signUpClick);

    //Event functions

    function focusName() {

        document.getElementById("label-fname").style.color = '#373867';
        document.getElementById("fname").style.border = '1px solid #373867';
        document.getElementById("name-msg").innerHTML = '';
    }

    function blurName() {

        if (nameValidation(document.getElementById("fname").value)) {
            document.getElementById("label-fname").style.color = '#49A37B';
            document.getElementById("fname").style.border = '1px solid #49A37B';
            document.getElementById("name-msg").innerHTML = '';
            nameConfirmation = true;
        } else {
            document.getElementById("label-fname").style.color = '#F13312';
            document.getElementById("fname").style.border = '1px solid #F13312';
            document.getElementById("name-msg").innerHTML = 'Name not valid';
            nameConfirmation = false;
        }
    }

    function focusSurname() {

        document.getElementById("label-surname").style.color = '#373867';
        document.getElementById("surname").style.border = '1px solid #373867';
        document.getElementById("surname-msg").innerHTML = '';
    }

    function blurSurname() {

        if (surnameValidation(document.getElementById("surname").value)) {
            document.getElementById("label-surname").style.color = '#49A37B';
            document.getElementById("surname").style.border = '1px solid #49A37B';
            document.getElementById("surname-msg").innerHTML = '';
            surnameConfirmation = true;
        } else {
            document.getElementById("label-surname").style.color = '#F13312';
            document.getElementById("surname").style.border = 'px solid #F13312';
            document.getElementById("surname-msg").innerHTML = 'Surname not valid';
            surnameConfirmation = false;
        }
    }

    function focusDni() {

        document.getElementById("label-dni").style.color = '#373867';
        document.getElementById("dni").style.border = '1px solid #373867';
        document.getElementById("dni-msg").innerHTML = '';
    }

    function blurDni() {
        
        if (dniValidation(document.getElementById("dni").value)) {
            document.getElementById("label-dni").style.color = '#49A37B';
            document.getElementById("dni").style.border = '1px solid #49A37B';
            document.getElementById("dni-msg").innerHTML = '';
            dniConfirmation = true;
        } else {
            document.getElementById("label-dni").style.color = '#F13312';
            document.getElementById("dni").style.border = '1px solid #F13312';
            document.getElementById("dni-msg").innerHTML = 'DNI not valid';
            dniConfirmation = false;
        }
    }

    function focusBirthday() {

        document.getElementById("label-birthdate").style.color = '#373867';
        document.getElementById("birthdate").style.border = '1px solid #373867';
        document.getElementById("birth-msg").innerHTML = '';
    }
    
    function blurBirthday() {

        if (birthdateValidation(document.getElementById("birthdate").value)) {
            document.getElementById("label-birthdate").style.color = '#49A37B';
            document.getElementById("birthdate").style.border = '1px solid #49A37B';
            document.getElementById("birth-msg").innerHTML = '';
            birthDateConfirmation = true;
        } else {
            document.getElementById("label-birthdate").style.color = '#F13312';
            document.getElementById("birthdate").style.border = '1px solid #F13312';
            document.getElementById("birth-msg").innerHTML = 'Date not valid';
            birthDateConfirmation = false;
        }
    }

    function focusNumber() {

        document.getElementById("label-pnumber").style.color = '#373867';
        document.getElementById("pnumber").style.border = '1px solid #373867';
        document.getElementById("phone-msg").innerHTML = '';
    }

    function blurNumber() {

        if (pNumberValidation(document.getElementById("pnumber").value)) {
            document.getElementById("label-pnumber").style.color = '#49A37B';
            document.getElementById("pnumber").style.border = '1px solid #49A37B';
            document.getElementById("phone-msg").innerHTML = '';
            numberConfirmation = true;
        } else {
            document.getElementById("label-pnumber").style.color = '#F13312';
            document.getElementById("pnumber").style.border = '1px solid #F13312';
            document.getElementById("phone-msg").innerHTML = 'Phone number not valid';
            numberConfirmation = false;
        }
    }

    function focusAddress() {
        
        document.getElementById("label-address").style.color  = '#373867';
        document.getElementById("address").style.border = '1px solid #373867';
        document.getElementById("address-msg").innerHTML = '';
    }

    function blurAddress() {
        
        if (addressValidation(document.getElementById("address").value)) {
            document.getElementById("label-address").style.color = '#49A37B';
            document.getElementById("address").style.border = '1px solid #49A37B';
            document.getElementById("address-msg").innerHTML = '';
            addressConfirmation = true;
        } else {
            document.getElementById("label-address").style.color = '#F13312';
            document.getElementById("address").style.border = '1px solid #F13312';
            document.getElementById("address-msg").innerHTML = "Address not valid ";
            addressConfirmation = false;
        }
    }

    function focusLocation() {

        document.getElementById("label-location").style.color = '#373867';
        document.getElementById("location").style.border = '1px solid #373867';
        document.getElementById("location-msg").innerHTML = '';
    }

    function blurLocation() {
        
        if (locationValidation(document.getElementById("location").value)) {
            document.getElementById("label-location").style.color = '#49A37B';
            document.getElementById("location").style.border = '1px solid #49A37B';
            document.getElementById("location-msg").innerHTML = '';
            locationConfirmation = true;
        } else {
            document.getElementById("label-location").style.color = '#F13312';
            document.getElementById("location").style.border = '1px solid #F13312';
            document.getElementById("location-msg").innerHTML = "Location not valid ";
            locationConfirmation = false;
        }
    }

    function focusPostalCode() {

        document.getElementById("label-pcode").style.color = '#373867';
        document.getElementById("pcode").style.border = '1px solid #373867';
        document.getElementById("postal-msg").innerHTML = '';
    }

    function blurPostalCode() {
             
        if (postalCodeValidation(document.getElementById("pcode").value)) {
            document.getElementById("label-pcode").style.color = '#49A37B';
            document.getElementById("pcode").style.border = '1px solid #49A37B';
            document.getElementById("postal-msg").innerHTML = '';
            postalCodeConfirmation = true;
        } else {
            document.getElementById("label-pcode").style.color = '#F13312';
            document.getElementById("pcode").style.border = '1px solid #F13312';
            document.getElementById("postal-msg").innerHTML = "Postal Code not valid ";
            postalCodeConfirmation = false;
        }
    }

    function focusEmail() {

        document.getElementById("label-email").style.color = '#373867';
        document.getElementById("email").style.border = '1px solid #373867';
        document.getElementById("email-msg").innerHTML = '';
    }

    function blurEmail() {
             
        if (emailValidation(document.getElementById("email").value)) {
            document.getElementById("label-email").style.color = '#49A37B';
            document.getElementById("email").style.border = '1px solid #49A37B';
            document.getElementById("email-msg").innerHTML = '';
            emailConfirmation = true;
        } else {
            document.getElementById("label-email").style.color = '#F13312';
            document.getElementById("email").style.border = '1px solid #F13312';
            document.getElementById("email-msg").innerHTML = "Email not valid ";
            emailConfirmation = false;
        }
    }

    function focusPassword() {

        document.getElementById("label-password").style.color = '#373867';
        document.getElementById("password").style.border = '1px solid #373867';
        document.getElementById("password-msg").innerHTML = '';
    }

    function blurPassword() {
             
        if (passwordValidation(document.getElementById("password").value)) {
            document.getElementById("label-password").style.color = '#49A37B';
            document.getElementById("password").style.border = '1px solid #49A37B';
            document.getElementById("password-msg").innerHTML = '';
            passwordConfirmation = true;
        } else {
            document.getElementById("label-password").style.color = '#F13312';
            document.getElementById("password").style.border = '1px solid #F13312';
            document.getElementById("password-msg").innerHTML = "Password not valid ";
            passwordConfirmation = false;
        }
    }

    function focusRPassword() {

        document.getElementById("label-rpassword").style.color = '#373867';
        document.getElementById("rpassword").style.border = '1px solid #373867';
        document.getElementById("rpassword-msg").innerHTML = '';
    }

    function blurRPassword() {
             
        if (rPasswordValidation(document.getElementById("password").value , document.getElementById("rpassword").value)) {
            document.getElementById("label-rpassword").style.color = '#49A37B';
            document.getElementById("rpassword").style.border = '1px solid #49A37B';
            document.getElementById("rpassword-msg").innerHTML = '';
            rPasswordConfirmation = true;
        } else {
            document.getElementById("label-rpassword").style.color = '#F13312';
            document.getElementById("rpassword").style.border = '1px solid #F13312';
            document.getElementById("rpassword-msg").innerHTML = "Passwords do not match";
            rPasswordConfirmation = false;
        }
    }

    function signUpClick(e) {

        e.preventDefault();

        if (nameConfirmation && surnameConfirmation && dniConfirmation && birthDateConfirmation &&
             numberConfirmation && addressConfirmation && locationConfirmation && postalCodeConfirmation && 
             emailConfirmation && passwordConfirmation && rPasswordConfirmation) {
            signUpRequest();
        } else {
            message = 'The following fields are in an incorrect format: ' + newline + notSigningUp();
            window.alert(message);
        }
    }

    // Functions

    function nameValidation(fieldToCheck) {
        
        var letterCounter = 0;

        if (fieldToCheck.length > 3) {
            for (var i = 0; i < fieldToCheck.length; i++) {
                for (var j = 0; j < letters.length; j++) {
                    if (fieldToCheck[i] == letters[j]) {
                        letterCounter+=1;
                    }
                    if (letterCounter === fieldToCheck.length) {
                        return true;
                    }
                }
            }
        }   else {
            return false
        }
    }

    function surnameValidation(fieldToCheck) {
        
        var letterCounter = 0;

        if (fieldToCheck.length > 3) {
            for (var i = 0; i < fieldToCheck.length; i++) {
                for (var j = 0; j < letters.length; j++) {
                    if (fieldToCheck[i] == letters[j]) {
                        letterCounter+=1;
                    }
                    if (letterCounter === fieldToCheck.length) {
                        return true;
                    }
                }
            }
        }   else {
            return false
        }
    }
     
    function dniValidation(fieldToCheck) {
                 
        var numberCounter = 0;

        if ((fieldToCheck.length >= 7) && (fieldToCheck.length <= 8)) {
            for (var i = 0; i < fieldToCheck.length; i++) {
                for (var j = 0; j < num.length; j++) {
                    if (fieldToCheck[i] == num[j]) {
                        numberCounter+=1;
                    }
                    if (numberCounter === fieldToCheck.length) {
                        return true;
                    }
                }
            }
        } else {
            return false
        }
    }
     
    function birthdateValidation(fieldToCheck) {

        var firstValidation = false;
        var secondValidation = false;

        if (fieldToCheck.length != 10) {
            return false;
        } else if ((fieldToCheck[2]!='/') || (fieldToCheck[5]!='/')) {
            return false;
        } else if (isNaN(fieldToCheck[0]) || isNaN(fieldToCheck[1]) || isNaN(fieldToCheck[3]) || isNaN(fieldToCheck[4]) ||
        isNaN(fieldToCheck[6]) || isNaN(fieldToCheck[7]) || isNaN(fieldToCheck[8]) || isNaN(fieldToCheck[9])) {
            return false;
        } else {
            firstValidation = true;
        }

        var section = fieldToCheck.split('/');
        var day = parseInt(section[0], 10);
        var dayValidation = false;
        var month = parseInt(section[1], 10);
        var monthValidation = false;
        var year = parseInt(section[2], 10);
        var yearValidation = false;

        if ((year >= 1904) && (year <= 2004)) {
            yearValidation = true;
        }

        // Leap years

        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            monthLength[1] = 29;
        }

        if ((month >= 1) && (month <= 12)) {
            monthValidation = true;
        }

        if ((day >= 1) && (day <= monthLength[month-1])) {
            dayValidation = true;
        }
        if (dayValidation && monthValidation && yearValidation) {
            secondValidation = true;
        } else {
            secondValidation = false;
        }

        if (firstValidation && secondValidation) {
            return true;
        } else {
            return false;
        }
    }
     
    function pNumberValidation(fieldToCheck) {
                 
        var numberCounter = 0;

        if (fieldToCheck.length == 10) {
            for (var i = 0; i < fieldToCheck.length; i++) {
                for (var j = 0; j < num.length; j++) {
                    if (fieldToCheck[i] == num[j]) {
                        numberCounter+=1;
                    }
                    if (numberCounter === fieldToCheck.length) {
                        return true;
                    }
                }
            }
        }   else {
            return false
        }
    }
     
    function addressValidation(fieldToCheck) {

        var space = false;
        var fieldToCheck2 = fieldToCheck.split(' ').join('');

        for (var i = 0; i < fieldToCheck.length; i++) {
            for (var j = 0; j < symbols.length; j++) {
                if (fieldToCheck[i] == symbols[j]) {
                    return false;
                }
            }
        }
        
        for (var i = 0; i < fieldToCheck.length; i++) {
            if (fieldToCheck.indexOf(' ') >= 0 && isNaN(fieldToCheck[fieldToCheck.indexOf(' ')-1]) &&
             !isNaN(fieldToCheck[fieldToCheck.indexOf(' ')+1])) {
                space =true;
                break;
            }
        }

        if (!space) {
            return false
        }

        if (fieldToCheck2.length < 5) {
            return false;
        } else {
            return true;
        }
    }
     
    function locationValidation(fieldToCheck) {
        
        var letterCounter = 0;
        var fieldToCheckLC = fieldToCheck.toLowerCase();

        if (fieldToCheckLC.length > 3) {
            for (var i = 0; i < fieldToCheckLC.length; i++) {
                for (var j = 0; j < letters.length; j++) {
                    if (fieldToCheckLC[i] == letters[j]) {
                        letterCounter+=1;
                    }
                    if (letterCounter === fieldToCheckLC.length) {
                        return true;
                    }
                }
            }
        }   else {
            return false
        }
    }
     
    function postalCodeValidation(fieldToCheck) {
                 
        var numberCounter = 0;

        if ((fieldToCheck.length >= 4) && (fieldToCheck.length <=5)) {
            for (var i = 0; i < fieldToCheck.length; i++) {
                for (var j = 0; j < num.length; j++) {
                    if (fieldToCheck[i] == num[j]) {
                        numberCounter+=1;
                    }
                    if (numberCounter === fieldToCheck.length) {
                        return true;
                    }
                }
            }
        } else {
            return false
        }
    }
     
    function emailValidation(fieldToCheck) {

        var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (fieldToCheck.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }
     
    function passwordValidation(fieldToCheck) {

        var letterValidation = false;
        var numberValidation = false;

        if (fieldToCheck.length >= 8) {
            for (var i = 0; i < fieldToCheck.length; i++) {
                    for (let j = 0; j < symbols.length; j++) {
                        if (fieldToCheck[i] == symbols[j]) {
                            return false;
                    }
                }
            }
            for (var i = 0; i < fieldToCheck.length; i++) {  
                if (!numberValidation) {
                    for (let j = 0; j < num.length; j++) {
                    if (fieldToCheck[i]==num[j]) {
                        numberValidation = true;
                        break;
                    }   
                } 
                }
            }
            for (var i = 0; i < fieldToCheck.length; i++) {  
            if (!letterValidation) {
                for (let j = 0; j < letters.length; j++) {
                    if (fieldToCheck[i]==letters[j]) {
                        letterValidation = true;
                        break;
                    }
                }
                }
            }

            if (numberValidation && letterValidation) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
     
    function rPasswordValidation(valuePassword, valueRPassword) {

        if (valuePassword === '') {
            return false
        }

        if (valuePassword === valueRPassword) {
            return true;
        } else {
            return false;
        }

    }

    function signingUp() {

        message = newline + 'Name: ' + document.getElementById("fname").value +
        newline + 'Surname: ' + document.getElementById("surname").value +
        newline + 'Dni: ' + document.getElementById("dni").value +
        newline + 'Date of Birth: ' + document.getElementById("birthdate").value +
        newline + 'Phone number: ' + document.getElementById('pnumber').value +
        newline + 'Addres: ' + document.getElementById('address').value +
        newline + 'Location: ' + document.getElementById("location").value +
        newline + 'Postal Code: ' + document.getElementById("pcode").value +
        newline + 'Email: ' + document.getElementById("email").value +
        newline + 'Password: ' + document.getElementById("password").value;
        return message;
    }


        function notSigningUp() {

        if (!nameConfirmation) {
           message1 = '- Name: At least 3 letters long.' + newline;
        } else {
            message1 = '';
        }

        if (!surnameConfirmation) {
            message2 ='- Surname: At least 3 letters long.' + newline;
        } else {
            message2 = '';
        }

        if (!dniConfirmation) {
            message3 ='- DNI: At least 7 numbers long.' + newline;
        } else {
            message3 = '';
        }

        if (!birthDateConfirmation) {
            message4 ='- Birth date: Follow the dd/mm/yyyy format' + newline;
        } else {
            message4= '';
        }

        if (!numberConfirmation) {
            message5 ='- Phone number:  Only 10 numbers long.' + newline;
        } else {
            message5 = '';
        }

        if (!addressConfirmation) {
            message6 ='- Address: At least 5 letters and numbers, with an space in between.' + newline;
        } else {
            message6 = '';
        }

        if (!locationConfirmation) {
            message7 ='- Location: At least 3 letters long' + newline;
        } else {
            message7 = '';
        }

        if (!postalCodeConfirmation) 
        {
            message8 ='- Posta code: At least 4 numbers long, up to 5.' + newline;
        } else {
            message8 = '';
        }

        if (!emailConfirmation) {
            message9 ='- Email: Follow the Employee@trackhenix.com format' + newline;
        } else {
            message9 = '';
        }

        if (!passwordConfirmation) {
            message10 ='- Password: At least 8 letters and numbers.' + newline;
        } else {
            message10 = '';
        }

        if (!rPasswordConfirmation) {
            message11 ='- Passwords do not match.' + newline;
        } else {
            message11 = '';
        }

        message = message1 + message2 + message3 + message4 + message5 + message6 + message7 + message8 + message9 + message10 + message11;
        return message;
    }


    function signUpRequest () {

        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';

        fetch(url + '?name=' + document.getElementById("fname").value +
            '&lastName=' + document.getElementById("surname").value +
            '&dni=' + document.getElementById("dni").value +
            '&dob=' + document.getElementById("birthdate").value +
            '&phone=' + document.getElementById('pnumber').value +
            '&address=' + document.getElementById('address').value +
            '&city=' + document.getElementById("location").value +
            '&zip=' + document.getElementById("pcode").value +
            '&email=' + document.getElementById("email").value +
            '&password=' + document.getElementById("password").value)    
        .then (function(response){
            return response.json();
        })
        .then (function(jsonResponse){
            alert (jsonResponse.msg + signingUp());
            formStorage();
        })
        .catch(function(error){
            console.log('error', error);
        })
    }

    function formStorage () {

        localStorage.setItem("fname", document.getElementById("fname").value);
        localStorage.setItem("surname", document.getElementById("surname").value);
        localStorage.setItem("dni", document.getElementById("dni").value);
        localStorage.setItem("birthdate", document.getElementById("birthdate").value);
        localStorage.setItem('pnumber', document.getElementById('pnumber').value);
        localStorage.setItem('address', document.getElementById('address').value);
        localStorage.setItem("location", document.getElementById("location").value);
        localStorage.setItem("pcode", document.getElementById("pcode").value);
        localStorage.setItem("email", document.getElementById("email").value);
        localStorage.setItem("password", document.getElementById("password").value);
    }
}















