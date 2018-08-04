//IIFE
(function(content) {
  //returns the float value of pie
  function ReturnPI() {
    return Math.PI;
  }


  ///Getting data from the 
  function fetchData() {
    $.getJSON("../Scripts/core/json/paragraphs.json", function(data) {
      $.each(data, function(key, val) {
        $("#myDetails").append("<p>" + val + "</p>");
      });
    });
  }


  ///Target content under AboutContent
  function AboutContent() {

    ///Initializing to check that the app works perfect
    console.log("%c Nice pictures? ", "font-weight:bold; font-size: 20px;");

    //Displaying the pie valie in console
    let myNumber = ReturnPI();
    console.log("My Funky Number: " + myNumber);

    let paragraph = document.getElementById("paragraph");

    let mySentence = "";

    paragraph.textContent = mySentence;

    //Array containing Different objects
    let myArray = [
      { name: "harkirat", age: 19 },
      { name: "Bob", age: 35 },
      { name: "Mike", age: 45 },
      { name: "Juan", age: 55 },
      { name: "Smyth", age: 65 }
    ];

    let content = document.getElementsByClassName("content");
    console.log("myArray length: " + myArray.length);

    let arrayEmpty;

    // ternary operator - alternate toggle conditional statement
    arrayEmpty = myArray.length > 0 ? false : true;

    // === checks both value and type where == only checks value
    if (myArray[0].age === 25) {
      console.log("First Element is Nothing");
    }

    // associative arrays create this key / value pair association but there is no iterator
    // which means you can't loop through them
    let myAssociateArray = [];

    myAssociateArray["Name"] = "Harkirat";
    myAssociateArray["Age"] = 19;
    myAssociateArray["StudentNum"] = "300987512";

    console.log(myAssociateArray);
    console.log(myAssociateArray["Name"]);

    //Array containing MyFavouriteThings
    let myFavouriteThingsList = [
      "Video Games",
      "Movies",
      "Cars",
      "programming"
    ];

    // "hook into" a ul that is empty that has an id of "myFavouriteThings"
    let myFavouritesList = document.getElementById("myFavouriteThings");

    myFavouriteThingsList.forEach(thing => {
      let newItem = document.createElement("li");
      newItem.textContent = thing;
      myFavouritesList.appendChild(newItem);
    });

    //Displaying MyFavouriteThings in console
    console.log(myFavouritesList);

    //fetching the data by calling function
    fetchData();
  }

  // properties
  content.AboutContent = AboutContent;
})(content || (content = {}));
