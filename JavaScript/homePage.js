"use strict";
// TypeScript file for  homePage.JS
// Adding the background Video
const mkBackground = document.createElement('video');
mkBackground.setAttribute('id', 'mkBackground');
// Setting up the vidoe attributes
mkBackground.setAttribute("autoplay", true);
mkBackground.setAttribute("muted", true);
mkBackground.setAttribute("loop", true);
mkBackground.setAttribute("playsinline", true);
// Add the source element
const source = document.createElement("source");
source.setAttribute("src", "https://cdn-mk1.mortalkombat.com/home/hero.mp4"); // Replace with your video URL
source.setAttribute("type", "video/mp4");
// Append the source to the video
mkBackground.appendChild(source);
// Append the Video in the body of the home page
document.body.appendChild(mkBackground);
// Home Page | Navegation Bar | TOP
const homePageMainNavBar = document.createElement('div');
homePageMainNavBar.classList.add('homePageMainNavBar');
window.document.body.appendChild(homePageMainNavBar);
