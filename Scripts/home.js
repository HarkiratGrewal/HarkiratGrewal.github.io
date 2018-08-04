///IIFE
let content;
(function(content){

    //Accessing About button
    function AboutButtonClick() {
        console.log("Achievements Button Clicked!");
    }

    //Hover over effect
    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    //Hover our effect
    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {
        console.log("%c Achievements Accessed...", "font-weight:bold; font-size: 20px;");
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "Achievements";

        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    // attach HomeContent function to the "content" namespace
    content.HomeContent = HomeContent;

})(content || (content = {}));