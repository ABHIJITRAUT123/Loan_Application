                // EMI Calcuation

let loanAmount = document.getElementById("amount");
let interestRate = document.getElementById("interest");
let loanDuration = document.getElementById("loanTenure");
let submit = document.getElementById("calculate");

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    calculateEMI();
})

function calculateEMI(){
    // First calculate total number of months in loan tenure if selected year
    let isYear = document.getElementById("year").checked;
    let isMonth = document.getElementById("month").checked;
    let noOfMonths=0;
    if(isYear=="" && isMonth==""){
        alert("Please select loan tenure type-> Month or year");
    }else{
        if(isYear==true){
            noOfMonths=loanDuration.value * 12 ;
        }else{
            noOfMonths=loanDuration.value;
        }
        let r = parseFloat(interestRate.value)/12/100;
        let P = loanAmount.value;
        let n = noOfMonths;
        //formula EMI= (P * r * (1 + r)^n ) / ((1+r)^n - 1)
        let EMI = (P*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
        let totalInterest =(EMI * n) - P;
        let totalPayment  = totalInterest + parseFloat(P);
        document.getElementById("emi").innerText = Math.ceil(EMI);
        document.getElementById("totalInterest").innerText= Math.ceil(totalInterest);
        document.getElementById("totalPayment").innerText= Math.ceil(totalPayment);
    }
}


            // Genrate OTP

const generateOtp = () => {
    let otp = "";
    for(let i=0; i<4; i++){
        otp += Math.floor(Math.random()*10);
    }
    return Number(otp);
}
console.log("Generated OTP is :-", generateOtp());




          // First Name and Email

let email = document.getElementById("email").value;
let fullName = document.getElementById("name").value;
let name = fullName.split(' ');
let firstName = name[0];

let deatil = "Dear "+ firstName + "Thank you for your inquiry. A 4 digit verification number has been sent to your email: "+ email +" please enter it in the following box and submit for confirmation:";

export {firstName, email, deatil, otp};
