
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", Check);
} else {
  Check();
}



function  Check(){
  console.log('Hello from the popup script!');
  chrome.storage.local.get('exploitDetected', function (result) {
    if (result.exploitDetected) {
     console.log("result recieved")
      document.getElementById('normalContent').style.display = 'none';
    
      document.getElementById('exploitContent').style.display = 'block';
    }
  });
  // chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  //   console.log('Message received in popup script:', message);
  //   if (message.exploitDetected) {
  //     // Show the exploit content and hide the normal content
  //     document.getElementById('normalContent').style.display = 'none';
  //     document.getElementById('exploitContent').style.display = 'block';
  //   }
  // });

  // Handle form submission to report fake contracts
  // const reportForm = document.getElementById('reportForm');
  // const contractAddressInput = document.getElementById('contractAddress');

  // reportForm.addEventListener('submit', function (e) {
  //   e.preventDefault();

  //   // Get the entered contract address
  //   const contractAddress = contractAddressInput.value;

  //   // Send the contract address to your server for reporting
  //   // You can use fetch or any other method to send this data

  //   // Clear the input field
  //   contractAddressInput.value = '';
  //   // Optionally, show a confirmation message or take further actions
  // });
}



// const checkersButton = document.getElementById('checkers');  
  
//   checkersButton.addEventListener('click', function (e) {  
//     e.preventDefault();  
//     console.log('Button clicked!');  });



const verifyWalletBtn = document.querySelector('.form-submit-btn');
verifyWalletBtn.addEventListener("click", () => {

      window.open("http://localhost:3000/", "_blank");

})
const veri = document.querySelector('.form-submit-nil');
veri.addEventListener("click", () => {

      window.open("http://localhost:3000/", "_blank");

})