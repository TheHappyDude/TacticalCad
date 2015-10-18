//Contains Javascript and JQuery elements of the web page
//Kaiwen Wang

var nerfParts = 10;         //Find way to get server to update this in the future
var fstrikeParts = 5;       //Same here
var retalParts = 5;         //and here
var protoParts = 5;         //and here too
var univParts = 10;         //and here

//Generates actions on web page load, which will be most of them
$(document).ready(function(){
    setCounts();
});


//Sets the badge count on the menu bar
function setCounts() {
    document.getElementById("nerfCount").innerHTML = nerfParts;
    document.getElementById("fstrikeCount").innerHTML = fstrikeParts;
    document.getElementById("retalCount").innerHTML = retalParts;
    document.getElementById("univCount").innerHTML = univParts;
    document.getElementById("protoCount").innerHTML = protoParts;
}

function determineSelected(pageName) {
    var str = "#" + pageName;
    $(str).removeClass("unselected").addClass("selected");
}