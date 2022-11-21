import {firstName, email, deatil, otp} from "script.js";

let confirm_content = document.getElementById("confirm-content");

confirm_content.appendChild(deatil);

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    validation();
})

function validation()
{
  let valid = document.getElementById("valid").value;
  
  if(valid == otp)
  {
    let vaildMessage = document.createElement("div").innerText = "Validation Successful!";
  }
  else
  {
    let invalidMessage = document.createElement("div").innerText = "Validation Failed!";
  }
}
