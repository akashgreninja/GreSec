// Define a function that logs a message to the console
function logMessage() {
  console.log("Hello from the background script!");
}

// Call the logMessage function when the extension is installed
chrome.runtime.onInstalled.addListener(logMessage);



chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.exploitDetected) {
    // Set the red icon when an exploit is detected
    chrome.action.setIcon({ path: "../images/warning32.png" });
    chrome.action.setBadgeText({ text: "!" });

    // Flash the red icon by periodically switching back to the regular icon
    let flashInterval;
    let iconIsRed = true;
    flashInterval = setInterval(() => {
      if (iconIsRed) {
        chrome.action.setIcon({ path: "../images/warning32.png" });
      } else {
        chrome.action.setIcon({ path: "../images/warning32.png" });
      }
      iconIsRed = !iconIsRed;
    }, 1000); // Adjust the interval as needed

    // Optionally, clear the flash interval after a certain time (e.g., 10 seconds)
    setTimeout(() => {
      clearInterval(flashInterval);
      chrome.action.setIcon({ path: "../images/128.png" });
      chrome.action.setBadgeText({ text: "" });
    }, 10000); // Adjust the time as needed
  }
});

