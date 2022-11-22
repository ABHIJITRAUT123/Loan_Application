import {firstName, email, deatil} from "./script.js";

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



submit.addEventListener('click',(e)=>{
    e.preventDefault();
    validation();
})

function validation()
{
  let valid = document.getElementById("valid").value;
  
  if(valid == otp){
    let vaildMessage = document.createElement("div").innerText = "Validation Successful!";
  }else{
    let invalidMessage = document.createElement("div").innerText = "Validation Failed!";
  }
}
