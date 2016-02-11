//Contains Javascript and JQuery elements of the web page, as well as common page elements
//Kaiwen Wang

var nerfParts = 5;         //Find way to get server to update this in the future
var fstrikeParts = 3;       //Same here
var retalParts = 1;         //and here
var protoParts = 0;         //and here too
var univParts = 1;         //and here

//Generates actions on web page load, which will be most of them
$(document).ready(function() {
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

function printFooter() {
    var sidebar="";
    sidebar += "<br><hr>"
    sidebar += "<small>So this is normally where copyright information goes. Since I don't have any, here's a smiley face :D</small>"
    sidebar += "<br><small>Send questions/suggestions to tacticalcad@gmail.com</small>"
    sidebar += "<br><hr>"

    document.write(sidebar);
}

function printNavbar() {
    var navbar = "";
    navbar += "<nav class=\"navbar navbar-custom\">";
    navbar += "    <div class=\"container-fluid\">";
    navbar += "        <div class=\"navbar-header\">";
    navbar += "            <a class=\"navbar-brand\" href=\"\/TacticalCad\/index.html\">TacticalCAD<\/a>";
    navbar += "        <\/div>";
    navbar += "        <ul class=\"nav navbar-nav\">";
    navbar += "            <li><a href=\"\/TacticalCad\/index.html\">Home<\/a><\/li>";
    navbar += "            <li class=\"dropdown\">";
    navbar += "                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"\/TacticalCad\/lists\/nerf.html\">Nerf<span class=\"caret\"><\/span><\/a>";
    navbar += "                <ul class=\"dropdown-menu\">";
    navbar += "                    <li><a href=\"\/TacticalCad\/lists\/firestrike.html\">Firestrike<\/a><\/li>";
    navbar += "                    <li><a href=\"\/TacticalCad\/lists\/retaliator.html\">Retaliator<\/a><\/li>";
    navbar += "                    <li><a href=\"\/TacticalCad\/lists\/universal.html\">Universal<\/a><\/li>";
    navbar += "                <\/ul>";
    navbar += "            <\/li>";
    navbar += "            <li><a href=\"\/TacticalCad\/lists\/prototypes.html\">Prototypes<\/a><\/li>";
    navbar += "            <li><a href=\"\/TacticalCad\/about.html\">About<\/a><\/li>";
    navbar += "        <\/ul>";
    navbar += "    <\/div>";
    navbar += "<\/nav>";

    document.write(navbar);
}

function printSidebar() {
    var sidebar="";
    sidebar += "<div class=\"bs-sidebar affix\" id=\"sidebar\" style=\"background-color: orange;\">";
    sidebar += "    <br>";
    sidebar += "        <ul>";
    sidebar += "            <li class=\"heading\"><a href=\"\/TacticalCad\/index.html\" id=\"hIndex\" class=\"unselected\">Home<\/a><\/li>";
    sidebar += "            <li><hr><\/li>";
    sidebar += "            <li class=\"heading\"><a href=\"\/TacticalCad\/lists\/nerf.html\" id=\"hNerf\" class=\"unselected\">Nerf Parts<\/a> (<span id=\"nerfCount\">0<\/span>)<\/li>";
    sidebar += "            <li><a href=\"\/TacticalCad\/lists\/firestrike.html\" id=\"hFirestrike\" class=\"unselected\">Firestrike<\/a> (<span id=\"fstrikeCount\">0<\/span>)<\/li>";
    sidebar += "            <li><a href=\"\/TacticalCad\/lists\/retaliator.html\" id=\"hRetaliator\" class=\"unselected\">Retaliator<\/a> (<span id=\"retalCount\">0<\/span>)<\/li>";
    sidebar += "            <li><a href=\"\/TacticalCad\/lists\/universal.html\" id=\"hUniversal\" class=\"unselected\">Universal<\/a> (<span id=\"univCount\">0<\/span>)<\/li>";
    sidebar += "            <li><hr><\/li>";
    sidebar += "            <li class=\"heading\"><a href=\"\/TacticalCad\/lists\/prototypes.html\" id=\"hPrototypes\" class=\"unselected\">Prototypes<\/a> (<span id=\"protoCount\">0<\/span>)<\/li>";
    sidebar += "            <li><hr><\/li>";
    sidebar += "            <li class=\"heading\"><a href=\"\/TacticalCad\/about.html\" id=\"hAbout\" class=\"unselected\">About<\/a><\/li>";
    sidebar += "        <\/ul>";
    sidebar += "    <br>";
    sidebar += "<\/div>";

    document.write(sidebar);
}