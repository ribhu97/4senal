document.getElementById("button").addEventListener("click", ‌​function () { 
    console.log('init check')
   chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "content.js"});
   });
});