//Contains the sidebar DOM so that only one copy is needed for the entire site
//Kaiwen Wang

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