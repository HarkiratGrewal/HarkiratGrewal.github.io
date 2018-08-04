"use strict";

(function (content) {

        function ReturnPI() {
                return Math.PI;
				}

        function AboutContent() {
                console.log("%c About Content accessed...", "font-weight:bold; font-size: 20px;");
								var myNumber = ReturnPI();
                console.log("This is PI: " + myNumber);

                var paragraph = document.getElementById("paragraph");

                var mySentence = "";

                paragraph.textContent = mySentence;

                var myArray = [{ name: "Harkirat", age: 19 }, { name: "Dinesh", age: 23 }, { name: "Mike", age: 12 }, { name: "Juan", age: 02 }, { name: "Smyth", age: 43 }];

                var content = document.getElementsByClassName("content");
                console.log("myArray length: " + myArray.length);

                var arrayEmpty = void 0;

                // ternary operator - alternate toggle conditional statement
                arrayEmpty = myArray.length > 0 ? false : true;

                // === checks both value and type where == only checks value
                if (myArray[0].age === 25) {

                        console.log("First Element is Peter");
                }

                // associative arrays create this key / value pair association but there is no iterator
                // which means you can't loop through them
                var myAssociateArray = [];

                myAssociateArray["Name"] = "Harkirat";
                myAssociateArray["Age"] = 19;
                myAssociateArray["StudentNum"] = "300987512";

                console.log(myAssociateArray);
                console.log(myAssociateArray["Name"]);

                var myFavouriteThingsList = ["Video Games", "Watching movies", "Cars", "Astrology", "Helping others"];

                // "hook into" a ul that is empty that has an id of "myFavouriteThings"
                var myFavouritesList = document.getElementById("myFavouriteThings");

                myFavouriteThingsList.forEach(function (thing) {
                        var newItem = document.createElement("li");
                        newItem.textContent = thing;
                        myFavouritesList.appendChild(newItem);
                });

                console.log(myFavouritesList);

                //popping image
                var modal = document.getElementById('myModal');
                
                var img = document.getElementById('myImg');
                var modalImg = document.getElementById("img01");
                var captionText = document.getElementById("caption");
                img.onmouseover = function(){
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                }
                
                var span = document.getElementsByClassName("close")[0];
                
                span.onmouseover = function() { 
                  modal.style.display = "img";
                }
        }

        // properties
        content.AboutContent = AboutContent;
})(content || (content = {}));