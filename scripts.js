//Contains Javascript and JQuery elements of the web page
//Kaiwen Wang

var nerfParts = 4;         //Find way to get server to update this in the future
var fstrikeParts = 2;       //Same here
var retalParts = 1;         //and here
var protoParts = 0;         //and here too
var univParts = 1;         //and here

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