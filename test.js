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
  let div = document.getElementById("confirm-content");
  let valid = document.getElementById("valid").value;
  // console.log(valid);

  if(valid === otp){
    let validMessage = "Validation Successful!";
    div.appendChild(validMessage);
  }else{
    let invalidMessage = "Validation Failed!";
    div.appendChild(invalidMessage);
  }
}
