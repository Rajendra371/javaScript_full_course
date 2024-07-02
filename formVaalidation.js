const displayMsg = (message, id, colorname) => {
   document.getElementById(id).innerHTML = message
   document.getElementById(id).style.color = colorname

}

const firstnameValidation = () => {
   const first_name = document.getElementById('fname').value
   if (first_name == "") {
      displayMsg('fiert name is mondatory', 'fnameMsg', 'red')
      return false
   }

   else if (!first_name.match(/^([a-z])+$/)) {
      displayMsg('fisrtname only conatain lowercasr alphabet ', 'fnameMsg', 'red')
      return false
   }

   else if (first_name.length < 3) {
      displayMsg('first name must be more tha 2 character', 'fnameMsg', 'red')
      return false
   }
   else {
      displayMsg('valid firstname', 'fnameMsg', 'green')
      return true
   }
}



const lastnameValidation = () => {
   const last_name = document.getElementById('lname').value
   if (last_name == "") {
      displayMsg('last name is mondatory', 'lnamMsg', 'red')
      return false
   }
   else if (!last_name.match(/^([a-z])+$/)) {
      displayMsg('lastname only conatain lowercasr alphabet ', 'lnameMsg', 'red')
      return false

   }
   else if (last_name.length < 3) {
      displayMsg('last name must be more tha 2 character', 'lnameMsg', 'red')
      return false
   }
   else {
      displayMsg('valid lastname', 'lnameMsg', 'green')
   }
}



const emailValidation = () => {
   const email = document.getElementById('email').value
   if (email == "") {
      displayMsg('email is mondatory', 'emailMsg', 'red')
      return false
   }
   else if (!email.match(/^([a-zA-Z0-9])[a-z0-9\-\_\. ]+\@+([a-z])+\.+([a-z])+$/)) {
      displayMsg('invalid email format', 'emailMsg', 'red')
      return false
   }


   else {
      displayMsg('valid email', 'emailMsg', 'green')
      return true
   }
}



const pwdValidation = () => {
   const password = document.getElementById('password').value

   if (password == "") {
      displayMsg('password is mondatory', 'psMsg', 'red')
      return false
   }

   else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.[0-9])(?=.*[\@\#\$ \- \_\?]).{8,100}$/)) {
      displayMsg('password must be minimum of 8 character and should be like abc@123', 'psMsg', 'red')
      return false
   }


   else {
      displayMsg('strong password', 'psMsg', 'green')
      return true
   }
}


const cpwdValidation = () => {
   const passwoed = document.getElementById('password').value
   const cpassword = document.getElementById('cpwd').value
   if (cpassword == "") {
      displayMsg('cpasswoed is mondatory', 'cpsMsg', 'red')
      return false
   }
   else if (passwoed !== cpassword) {
      displayMsg('comfirm passwoed and passwoed must be match', 'cpsMsg', 'red')
      return true

   }

   else {
      displayMsg('valid cpassword', 'cpsMsg', 'green')
   }
}
const validForm = () => {
   if (firstnameValidation() && lastnameValidation() && pwdValidation() && cpwdValidation()) {
      return true
   }
   else {
      return false
   }
}



