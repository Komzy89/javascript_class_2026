let statusEle = document.getElementById("statusText");
let paymentText = document.getElementById('paymentText')

let payment = "declined";

paymentText.textContent = "Payment is ..."

if (payment == "pending") {
  statusEle.style.backgroundColor = "orange";
  statusEle.textContent = 'Pending'
  paymentText.textContent = "Payment is pending"
} else if (payment == "success") {
  statusEle.style.backgroundColor = "green";
  statusEle.textContent = 'Successful'
  paymentText.textContent = "Payment is Successful"
} else {
  statusEle.style.backgroundColor = "red";
  statusEle.textContent = 'Declined'
  paymentText.textContent = "Payment is declined"
}


//Method 2

// let statusEle = document.getElementById("statusText");
// let paymentText = document.getElementById("paymentText");

// let payment = "success";

// paymentText.textContent = "Payment is ...";

// if (payment == "pending") {
//   paymentFnc("Pending", "orange", "Payment is Pending");
// } else if (payment == "success") {
//   paymentFnc("Success", "green", "Payment is Successful");
// } else {
//   paymentFnc("Declined", "red", "Payment is Declined");
// }

// function paymentFnc(status, color, message) {
//   statusEle.style.backgroundColor = color;
//   statusEle.textContent = status;
//   paymentText.textContent = message;
// }
