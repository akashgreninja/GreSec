if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',afterDOMLoaded);
} else {
    afterDOMLoaded();
}

function afterDOMLoaded() {
    console.log("Hello from the content script!");
  
    // Define a regular expression to match the word "wikipedia"
    const wikipediaPattern = /wikipedia/gi;
  
    // Get the page content as a string
    const pageContent = document.body.innerText;
  
    // Count the number of times the word "wikipedia" appears in the page content
    const wikipediaCount = (pageContent.match(wikipediaPattern) || []).length;
  
    // Log the number of times the word "wikipedia" appears in the page content
    console.log(`The word "wikipedia" appears ${wikipediaCount} times on this page.`);
  }