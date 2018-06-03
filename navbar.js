/*eslint-disable no-unused-vars */

// Object that stores the name and url of a page together
function Page(name, url) {
    this.name = name; // name of the page to be displayed
    this.url = url; // url of the page to be displayed
    
    // Return the name of the page
    this.getName = function () {
        return this.name;
    };
    
    // Return the url of the page
    this.getUrl = function() {
        return this.url;
    };
}

// Generate the navbar. Most of the function goes to generating the string to insert
function navbar() {
    // Initialize the pages
    var homePage = new Page("Home", "index.html");
    var statPage = new Page("D&D 5e Stat Roller", "dnd-roller.html");
    var aboutPage = new Page("About", "about.html");
    var titlePage = new Page("<i>The</i> Title", "excellence.html");
    
    // Store the pages, determine the order of them
    var pages = [homePage, aboutPage, titlePage, statPage];
    var n = pages.length; // number of pages
    
    var nav = "<tr>\
            <th colspan=" + n + ">Navigation</th>\
        </tr>\
        <tr>";
    
    // Add each page into the navbar string
    var p;
    for (p in pages) {
        nav += "<td><a href=\"" + p.getUrl() + "\">" + p.getName() + "</a></td>";
    }
    nav += "</tr>"; // throw in the row end
    
    document.getElementsByClassName("navbar")[0].innerHTML = nav; // push that baby to the page
}