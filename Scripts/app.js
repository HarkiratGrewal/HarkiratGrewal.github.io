/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app;
(function(app) {
  "use strict";

  // About Button Click event handler

  function Start() {
    // local variable
    let title = document.title;

    ///Displaying to console to confirm that the javascript file works.
    console.log(
      "%c javascript works, Nice",
      "font-weight:bold; font-size: 20px;"
    );
    console.log(
      "%c ----------------------------",
      "font-weight:bold; font-size: 20px;"
    );
    console.log("Title: " + title);
    console.log();

    ///try catch any possible error!
    //Try various functions and if any of them doesn't exists, 
    //it skips to catch block and then displays the content from the catch block.
    try {
      switch (title) {
        case "COMP125 - Home":
          content.HomeContent();

          break;

        case "COMP125 - About":
          content.AboutContent();
          break;

        case "COMP125 - Contact":
          content.ContactContent();
          break;

        default:
          throw "Title not Defined";
          break;
      }
    } catch (err) {
      console.log(err);
      console.warn("Oops");
    }

    //injecting files by calling function
    insertHTML("../Scripts/View/content/header.html", "header");
    insertHTML("../Scripts/View/content/footer.html", "footer");
  }

  //Function for inserting header and footer html to all the files
  function insertHTML(sourceURL, destTag) {
    let target = document.querySelector(destTag);

    ///Getting data from the html files and injecting it to page.
    let XHR = new XMLHttpRequest();
    XHR.addEventListener("readystatechange", function() {
      if (this.status === 200) {
        if (this.readyState === 4) {
          target.innerHTML = this.responseText;
          //setActiveNavLink();
        }
      }
    });
    XHR.open("GET", sourceURL);
    XHR.send();
  }

  //window.onload = Start;

  window.addEventListener("load", Start);

  // these are all app properties
  app.Title = document.title;

  let copyright = document.getElementById("--copyright--").lastChild;
  document.getElementById("--copyright--").appendChild(copyright);
})(app || (app = {}));
