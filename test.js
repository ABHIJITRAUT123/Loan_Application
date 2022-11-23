import {firstName, email, deatil} from "script.js";

let confirm_content = document.getElementById("confirm-content");

confirm_content.appendChild(deatil);

            // Genrate OTP

let otp = "";
const generateOtp = () => {
    for(let i=0; i<4; i++){
        otp += Math.floor(Math.random()*10);
    }
    console.log(otp);
}
generateOtp();

let submit = document.getElementById("check");

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    validation();
})

function validation()
{
  let valid = document.getElementById("valid").value;
  let attempt = 0;
  // console.log(valid);

  if(attempt < 4){
      if(valid == otp){
           alert("Validation Successful !");
      }else if(valid !== otp){
            attempt = attempt + 1;
            alert("Validation Failed !");  
      }
  }else{
      alert("Welcome Pixel6 !!");
  }
}
