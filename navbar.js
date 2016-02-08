//Contains the navbar DOM so that only one copy is needed for the entire site
//Kaiwen Wang

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

