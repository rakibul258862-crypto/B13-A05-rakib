// console.log('welcome to sing in page ')

document.getElementById('signInBtn').addEventListener('click',() => {
    // step-1 get the  username input and value 
    const userNameInput = document.getElementById("Username-Input");
    const usernameValue =userNameInput.value;
    // console.log(usernameValue);
    // step-2 get the password and value 
    const passwordInput =document.getElementById("password-input");
    const passwordValue =passwordInput.value;
    // console.log(passwordValue);
    // step-3 username input value == get password input value match karbo 
    // if match === false ==> alert ==>'Invalid your information' and if match === true ==> 'loading main section' 
    if(usernameValue === "admin" && passwordValue ===  'admin123'){
        alert('Sing In successful');
        window.location.assign('main.html');
    }else{
        alert('sing in failed');
    }

})