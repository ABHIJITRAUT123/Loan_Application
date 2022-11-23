                // EMI Calcuation

let loanAmount = document.getElementById("amount");
// let interestRate = document.getElementById("interest");
// let loanDuration = document.getElementById("loanTenure");
let submit = document.getElementById("calculate");



submit.addEventListener('click',(e)=>{
    e.preventDefault();
    myFun();
    calculateEMI();
})

function myFun(){
  let correctWay = /^[A-Za-Z]+$/;
  let fullName = document.getElementById("name").value;
  
  if(fullName == ""){
    document.getElementById("msg").innerHTML = "Please Fill fullName";
    return false;
  }
  if(fullName.length < 3){
    document.getElementById("msg").innerHTML = "Please Fill min two words";
    return false;
  }
  if(fullName.length > 5){
    document.getElementById("msg").innerHTML = "Please Fill  min 4 chars";
    return false;
  }
  if(fullName.match(correctWay)){
    true;
  }else{
    document.getElementById("msg").innerHTML = "only alphabets are allow";
    return false;
  }
}

function calculateEMI(){
    // First calculate total number of months in loan tenure if selected year
//     let isYear = document.getElementById("year").checked;
//     let isMonth = document.getElementById("month").checked;
//     let noOfMonths=0;
//     if(isYear=="" && isMonth==""){
//         alert("Please select loan tenure type-> Month or year");
//     }else{
//         if(isYear==true){
//             noOfMonths=loanDuration.value * 12 ;
//         }else{
//             noOfMonths=loanDuration.value;
//         }
//         let r = parseFloat(interestRate.value)/12/100;
//         let P = loanAmount.value;
//         let n = noOfMonths;
        
        let r = parseFloat(8.5)/12/100;
        let P = loanAmount.value;
        let n = 15;
        //formula EMI= (P * r * (1 + r)^n ) / ((1+r)^n - 1)
        let EMI = (P*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
        let totalInterest =(EMI * n) - P;
        let totalPayment  = totalInterest + parseFloat(P);
        document.getElementById("emi").innerText = Math.ceil(EMI);
        document.getElementById("totalInterest").innerText= Math.ceil(totalInterest);
        document.getElementById("totalPayment").innerText= Math.ceil(totalPayment);
//     }
}


          // First Name and Email

    let email = document.getElementById("email").value;

    let name = fullName.split(' ');
    let firstName = name[0];

    let deatil = "Dear "+ firstName + "Thank you for your inquiry. A 4 digit verification number has been sent to your email: "+ email +" please enter it in the following box and submit for confirmation:";

export {firstName, email, deatil};
