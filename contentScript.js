/* Can access highlighted text of web pages and passing it to background.js to process.
* Can view the console from contentScript.js by right-clicking on Firefox -> Inspect -> Console */
document.addEventListener('mouseup', event => {  
    if(window.getSelection().toString().length){
       let exactText = window.getSelection().toString(); 
       console.log(exactText);
       browser.runtime.sendMessage(exactText);
    }
})