import * as User from "../modules/userModule.js";

// Creates a NavBar

function createNavbar() {
    User.init();

    // Gets the User That is Logged

    var user = User.getUserLogged(); 
    
    // Gets the Navbar Div and Creates the userPfp

    var navbar = document.querySelector("#navbar");
    var rectangle = document.createElement("span");
    rectangle.className = "rectangle";

    var userPfp= document.createElement("div");
    userPfp.id= "userPfp";
    userPfp.className= "userPfpFrame"
    userPfp.style.backgroundImage= `url(${user.profilePic})`;

    userPfp.addEventListener("click", function(){
        window.location.href = "../HTML/editProfile.html"
    })

    // Creates the Icon as a Link

    var iconLink = document.createElement("a");
    iconLink.href = "../HTML/homePage.html";

    // Creates the Icon's Image

    var icon = document.createElement("img");
    icon.className= "logo"
    icon.src = "../images/logo/Stellar Escape Logo Final BW R.svg";

    // Adds the Image as Child of the Link

    iconLink.appendChild(icon);
    

    // Adds the Link With the Image to the Navbar

    navbar.appendChild(iconLink);

    // Creates the NavBar's Links

    var links = [
        { text: "Achievements", url: "../HTML/achievementsPage.html" },
        { text: "Leaderboards", url: "../HTML/leaderboards.html" },
        { text: "Forum", url: "../HTML/forum.html" }
    ];

    for (var i = 0; i < links.length; i++) {
        var link = document.createElement("a");
        link.href = links[i].url;
        link.textContent = links[i].text;
        navbar.appendChild(link);
    }

    navbar.appendChild(userPfp);
    navbar.appendChild(rectangle);
}

// Calls the Function to Create the NavBar

createNavbar();