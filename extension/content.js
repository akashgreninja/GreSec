if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", GetInitialAddress);
} else {
  GetInitialAddress();
}

function GetInitialAddress() {
  console.log("Hello from the content script!");

  // Define a regular expression to match a contract or wallet address
  const addressPattern = /(0x[a-fA-F0-9]{40})/g;

  // Get the page content as a string
  const pageContent = document.body.innerText;

  // Find all occurrences of a contract or wallet address in the page content
  const addresses = pageContent.match(addressPattern);

  // Log the number of addresses found and the addresses themselves
  if (addresses) {
    console.log(`Found ${addresses.length} addresses:`);
    console.log(addresses);

    fetch(`http://127.0.0.1:4001/is_contract_blacklisted/${addresses[0]}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
  
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "Heist" || data.message === "Exploit") {
          chrome.runtime.sendMessage({ exploitDetected: true });
        }
      })
      .catch((error) => console.error(error));

    // Loop through each address and send a request for each one
    // addresses.forEach((address) => {
     
    // });
  } else {
    console.log("No addresses found.");
  }
}

function showWarning() {
  const element = document.querySelector("div");
  if (element) {
    element.style.border = "2px solid red";
  }
}
