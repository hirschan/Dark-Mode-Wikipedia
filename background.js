/* To access the console from here: press "Inspect" from "about:debugging" in Firefox. */

function onCreated() {
    if (browser.runtime.lastError) {
      console.log(`Error: ${browser.runtime.lastError}`);
    } else {
      console.log("Item created successfully");
    }
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  var msg = "";
  
  /* Context menu */
  browser.menus.create({
    id: "search-wiki",
    title: browser.i18n.getMessage("menuItemSelectionLogger"),
    contexts: ["selection"]
  }, onCreated);
  
  /* Listener, receiving info from contentScript.js */
  browser.runtime.onMessage.addListener(notify);

  function notify(message) {
    console.log(message);
    msg = message;
  }
  
  /* The click event listener, opening new tab of highlighted text in Wikipedia */
  browser.menus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
      case "search-wiki":
  
        var wikiWebsite = "https://en.wikipedia.org/wiki/" + msg;
        console.log("Selected text: " + msg);
  
        var creating = browser.tabs.create({url: wikiWebsite });
        creating.then(onCreated, onError);
        break;
    }
  });
  