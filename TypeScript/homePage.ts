// TypeScript file for  homePage.JS

// Adding the background Video
const mkBackground = document.createElement('video');
    mkBackground.setAttribute('id', 'mkBackground')
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
document.body.appendChild(homePageMainNavBar);

// Home Page | Navegation Bar | TOP | Left | Global NAV
const leftGlobalLinks = document.createElement('nav');
leftGlobalLinks.setAttribute('class', 'leftGlobalLinks');
homePageMainNavBar.appendChild(leftGlobalLinks);


    // Home Page | Navegation Bar | TOP | Left | Global NAV | Glob-Language
    const globLanguage = document.createElement('select');
    globLanguage.setAttribute('class', 'globLanguage');
    leftGlobalLinks.appendChild(globLanguage);

        // Home Page | Navegation Bar | TOP | Left | Global NAV | Glob-Language | United States, Europe and UAE
        const regionArray = ["United States", "Europe", "UAE"];

        for (let index = 0; index < regionArray.length; index++) {
            let theReigon = regionArray[index];
            const globLanguageOption = document.createElement('option');
            globLanguageOption.setAttribute('class','globLanguageOption');
            globLanguageOption.textContent = theReigon;
            globLanguage.appendChild(globLanguageOption);
        }



// Home Page | Navegation Bar | TOP | Right | Relative and Socail Media
const rightRelativeandSocialMedia = document.createElement('nav');
rightRelativeandSocialMedia.setAttribute('class', 'rightRelativeandSocialMedia');
homePageMainNavBar.appendChild(rightRelativeandSocialMedia);


