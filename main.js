let userName = document.querySelector(".user-input")
let password = document.querySelector(".pass-input")
let userNameMsg = document.querySelector(".username-msg")
let passMsg = document.querySelector(".password-msg")
let passInput = document.querySelector(".signin-status")
let signinBtn = document.querySelector(".signin-button")
// added the using html tags
signinBtn.addEventListener("click" , signIn)

// adding event listeners
function signIn (event) {
event.preventDefault()
const usernamevalue = userName.value ;
const passwordvalue = password.value ;
let sendingData = true ;
if (usernamevalue.length === 0 || usernamevalue.indexOf("@") === -1 || usernamevalue.indexOf("@") === 0 || usernamevalue.indexOf(".") === -1) {
userNameMsg.innerText = "please enter a valid username"
sendingData = false
}
if (passwordvalue.length === 0) {
passMsg.innerText = "please enter a valid password"
}
if (passwordvalue.indexOf(" ") ==! -1 || passwordvalue >= 7) {
    passMsg.innerText = "password must be at least 8 characters and it cannot contain space"
}
if (passMsg.innerText.length > 0  || userNameMsg.innerText.length > 0 ) {
setTimeout(() => {
    userNameMsg.innerText = ""
    passMsg.innerText = ""
    alert("Try Again")

} , 3500)
}
if (sendingData) {
    const body = {
        username : usernamevalue
     ,  passWord : passwordvalue
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
    if(response.ok){
document.querySelector(".signin-status").innerHTML = "SUCCESS!"
    }})
}
}

