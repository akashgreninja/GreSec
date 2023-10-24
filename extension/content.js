if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", GetInitialAddress);
} else {
  afterDOMLoaded();
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

    // Loop through each address and send a request for each one
    addresses.forEach((address) => {
      const contract = {
        address: address,
      };

      fetch("/bad_contract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Contract-Address": address,
        },
        body: JSON.stringify({}),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    });
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
