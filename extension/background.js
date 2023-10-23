// Define a function that logs a message to the console
function logMessage() {
  console.log("Hello from the background script!");
}

// Call the logMessage function when the extension is installed
chrome.runtime.onInstalled.addListener(logMessage);