# Milestone Project 2 - Visit Kingston

![Desktop Demo](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/images/ms2_mockup.gif "Desktop Demo")

View live project [here](https://tmuat.github.io/Visit-Kingston/).

---
## Description

This is a fictitious site created as part of a full stack web development course with [code institute](codeinstitute.net).

This site was designed, created and built by myself to showcase taking a project from inception to functioning website. The website was built and designed with a mobile-first view point, with the aim of creating a well designed, easy to navigate website that is repsonive to all devices. The idea behind the site was to create an interactive and enticing page to provide information for those wanting to visit the Royal Borough of Kingston Upon Thames in South London. The site currently features 3 pages; 'Home', 'About Kingston' and 'Contact Us'. The main information sections fall within the 'About Kingston' page, with 3 areas within; Food & Drink, Places To Stay and Attractions.  

To build the site I have put into practice the knowledge and skills acquired from the first five modules of the full stack course; namely HTML Fundamentals, CSS Fundamentals, User Centric Frontend Development, JavaScript Fundamentals and Interactive Frontend Development.

---

## Contents

- [UX](#ux)
    - [Purpose](#purpose)
    - [User Stories](#user-stories)
    - [Design](#design)
        - [Colour Scheme](#colour-scheme)
        - [Fonts](#fonts)
    - [Wireframes](#wireframes)
- [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks and External Resources](#frameworks-and-externalresources)
- [Testing](#testing)
    - [WC3 Validation](#wc3-validation)
    - [Lighthouse Accessibility](#lighthouse-accessibility)
    - [JSHint](#jshint)
    - [Responsivley](#responsivley)
    - [Manual Testing](#manual-testing)
    - [User Story Testing](#user-story-testing)
    - [Fixed Bugs](#fixed-bugs)
    - [Known Bugs](#known-bugs)
- [Deployment](#deployment)
    - [Github Deployment](#github-deployment)
    - [Clone](#clone)
- [Credits](#credits)
    - [Code](#code)
    - [Media](#media)
        - [Misc](#misc)
        - [Content](#content)
        - [Images](#images)
    - [Acknowledgements](#acknowledgements)
    - [Disclaimer](#disclaimer)

---

## UX

### Purpose

---

As briefly stated in the description; the purpose of this site is to provide Kingston Upon Thames, Surrey with a website for individuals looking to visit the town; with key information on Food & Drink, Places To Stay & Attractions. Each area included a number of suggestions with links to external sites should the site visitor require more information. 

---

### User Stories

---

#### User:

- As a user of this website, first and foremost I would like to be presented with a well designed site that will allow me to navigate the site in an easy manor.
- As a user of this website I would like to be able to find information of places to eat and/or drink in Kingston.
- As a user of this website I would like to be able to find information of places I can stay overnight in and around Kingston.
- As a user of this website I would like to be able to find information about different attractions in and around Kingston.
- As a user of this website I would like to be able to access more information about different venues/attractions (i.e. Links to external websites).
- As a user of this website I would like to be able to find and view locations on a map to allow me to plan my time in Kingston.
- As a user of this website I would like to be able to contact the makers of the website in case of any questions or suggestions.
- As a user of this website I would like to be able to access the social media links of the website.

---

### Design

---

#### Colour Scheme

The two main colours across the site are white and dark blue. The specific dark blue was chosen to match the dark blue within the Royal Borough of Kingston coat of arms. The specific coat of arms for Kingston can be found [here](https://en.wikipedia.org/wiki/Kingston_upon_Thames_London_Borough_Council#/media/File:Kingston_upon_Thames.svg).

I picked the colour scheme to compliment the coat of arms and provide a simple and easy on the eye UX whilst also allowing me to differentiate pages with either a white or dark blue background.

The hex codes for the two main colours are #FFFFFF and #03487E.

---

#### Fonts

The main font used on the site is Noto Serif. It was chosen after experimenting with a number of fonts on [google fonts](fonts.google.com); it provided a visually pleasing font which stood out against both the dark blue and white backgrounds.

---

#### Landing Imagery

The imagery chosen for the landing screen was used to highlight multiple positive aspects kington has to offer and to entice the user to dig deeper into what they can do when visiting kingston.

---

### Wireframes

The wireframes for phone, tablet and desktop can be found by clicking [here](https://github.com/Tmuat/milestone-project-2/tree/master/assets/wireframes).

[Return to Contents](#contents)

---

## Features

### Existing Features

---

- Logo
    - This is the boroughs logo, which ties in the colour scheme being used (blue and white) and provides the user with a link back to the home page

- Navbar 
    - The site features a consistent navbar across all pages. It includes the site logo along with 3 links to the 3 main pages. The navbar collapses into a hamburger icon on smaller screens to maximise screen space.
    - The navbar is stuck to the top of the screen, meaning however far down the page the user scrolls they can always access the sites navigation links.

- Favicon
    - The site features a favicon consisting of the sites initias ('VK') styled in the chosen font with the sites blue theme as a background.

- Footer
    - The site features a consistent footer across all screen sizes; it includes links to all pages of the website for ease of navigation. 
    - The footer also has 4 social media links styled as the respective sites logo.
    - The footer lastly highlights the developer.

- Hero Images
    - There can be found on the two main content pages; all the images showcase aspects of Kingston Upon Thames.
    - To increase the 'sales pitch' of Kingston Upon Thames, the home screen hero image is included in a carousel to showcase 6 images in total.

- Map Intergration
    - Below the home screen hero image is a API to google maps, including list of venues/attractions as well as the ability to filter.
    - The map includes information on all the makers, allowing the user to navigate to the venue/attractions site should they want more info.

- Back To Top button
    - The site features a back to top button which becomes visible once the user has scrolled over 20px down either the home page or about kingston page.
    - This feature allows the user to quickly return to the top of the page; this is most useful on the 'About Kingston' page as there is a lot of info.

- Scroll animations
    - The 'About Kingston' page features a number of scroll animations to spark the intrest of the user as they scroll

- Card Carousel Suggestions
    - The 'About Kingston' page features a number of carousels to highlight potential venues and attractions the user may be interested in.
    - The card carousels present the information in a easy to digest fashion, whilst also allowing the user control of the scroll of the carousel to select options.

- Contact Form
    - This enables the user to contact the website team in an easy and manageable way; they can ask questions and make suggestions.
    - The user gets a response to notify them when the email has been sent.

---

### Features Left to Implement

---

- More sections
    - With the nature of a travel site, there is countless more sections that can be added to continue to add to the user experience and information offered to those wanting to visit Kingston.

- Intergration to a booking site
    - Allow users to book hotels/meals directly on the site as opposed to having to be directed off the site

- Differing markers on map
    - Put different colour markers on the maps depending on the genre to allow the user to visually distinguish locations of venues/attractions

- Price info
    - Add price info for attractions to give users more information for informed choices

[Return to Contents](#contents)

---

## Technologies Used

### Languages

---

Across the site 3 languages were used:

- HTML5
    - This was used to form the structure of each page
- CSS3
    - This was used to add syling to all html elements
- JavaScript
    - This was was to make pages interactive (e.g. google maps)

---

### Frameworks and External Resources

---

A number of external frameworks, code libraries and programs were incorportated into the Visit Kingston site. These are listed below with code attribution within each segment of the live site and in the credits section towards the end of this README.

- [Bootstrap 4.5.2](https://getbootstrap.com/)
    - Bootstrap formed the skeleton of the website; the bootstrap grid system and classes formed the underlying structure of the site

- [Font Awesome 4.7.0](https://fontawesome.com/)
    - Font Awesome was used to add icons across the site for a more intuitive user experience

- [JQuery 3.5.1](https://jquery.com/)
    - JQuery was used across the different pages of the site to create interactive elements without the need for huge volumes of Javascript coding

- [Popper.js 1.16.1](https://popper.js.org/)
    - Popper was used with Bootstrap to create a responsive navbar element

- [Google Maps API](https://developers.google.com/maps/documentation/)
    - The Google Maps API was used to create a map with markers of places to eat & drink, stay overnight and attractions to see

- [Animate On Scroll 2.3.1](https://michalsnik.github.io/aos/)
    - Animate on scroll was used on the 'About Kingston' page to add affects to titles and dividers

- [EmailJS](https://www.emailjs.com/)
    - EmailJS was used to automate the sending of emails in the contact section

- [Hover.css](https://ianlunn.github.io/Hover/)
    - Hover.css was used to create hover affects for the menu items in the navbar. The license can be found [here](https://github.com/Tmuat/milestone-project-2/blob/master/assets/licenses/hover-css.txt)

- [Gitpod](https://gitpod.io/)
    - Gitpod was the development environment used to code this site, gitpods terminal was used to synchronise with Github

- [Github](https://github.com/)
    - Github was used to store all components of this site during and after the build

- [Git](https://git-scm.com/)
    - Git was the version control system utilised for the build of this project

- [Figma](https://www.figma.com/)
    - Figma was used to create the wireframes prior to the build commencing

- [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to find and import the selected font for the site

- WC3 [HTML](https://validator.w3.org/) & [CSS](https://jigsaw.w3.org/css-validator/) Validator
    - Both the CSS & HTML validators were used to check code for compliance with recognised standards

- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse#devtools)
    - Was used to check the accessibility of the site

- [JSHint](https://jshint.com/)
    - Was used to validate all Javascript codes

- [Responsivley](https://responsively.app/)
    - Responsivley was used to check the responsiveness of the site (see testing below)


[Return to Contents](#contents)

---

## Testing

### WC3 Validation

---

In order to check that all the HTML & CSS were in compliance of the recognised standards, all code was passed through the [W3C](https://www.w3.org/) validators. Specifically the [HTML validator](https://validator.w3.org/) and the [CSS validator](https://jigsaw.w3.org/css-validator/validator.html.en). The results of these tests can be found in the links below:

- [Home (index.html)](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/validation/index_validation.png)
- [About Kingston (about-kingston.html)](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/validation/about_kingston_validation.png)
- [Contact (contact.html)](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/validation/contact_validation.png)
- [CSS](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/validation/css_validation.png)

---

### Lighthouse Accessibility

---

[Google Lighthouse](https://developers.google.com/web/tools/lighthouse#devtools) testing was used to ensure the Visit Kingston was accessible for all users. The results can be found in the links below:

- [Home (index.html)](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/lighthouse/index_lighthouse.png)
- [About Kingston (about-kingston.html)](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/lighthouse/about_kingston_lighthouse.png)
- [Contact (contact.html)](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/lighthouse/contact_lighthouse.png)

---

### JSHint

---

All Javascript codes were passed through the [JSHint](https://jshint.com/) validator with all corrections made.

---

### Responsivley

---

[Responsivley](https://responsively.app/) was used used to check the responsiveness of the site across multiple devices at the same time.

![responsiveness testing](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/responsiveness/responsive1.gif "responsiveness testing")

![responsiveness testing 2](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/responsiveness/responsive2.gif "responsiveness testing 2")

---

### Manual Testing

Along with the automated testing, the site was put through a whole selection of manual user testing. A brief summary of this manual testing can be found below:

- Home Page
    - Navbar 
        - Navbar loads up and displays logo, site name and 3 navigation links
        - Navbar is responsive and switches to a hamburger icon on smaller sizes
        - All 3 links work and take the user to the desired page
        - On hover the hover.css animations work for the 3 links
        - Clicking the logo in the top left takes the user back to the home screen
        - On smaller sizes, the hamburger icon expands the menu in a dropdown fashion
        - On scroll the navbar stays attached to the top of the screen
    - Hero Carousel
        - Verify that the hero images load up and the carousel starts on page load
        - Check the hero text changes from being positioned on the left to taking the middle of the screen
        - The hero text moves from left aligned to centre on smaller screens
        - The background images change to dedicated small background images on small devices
    - Maps Section
        - Check the maps loads up without faults and the correct zoom and long/lat are loaded
        - Verify the map is loaded with all markers
        - Verify the list alongside the map is loaded with all venues/attractions
        - Check that on marker click, an info window is loaded with required information
        - Check that on row click, the info window in the map is opened
        - Check that the map filter alters the markers on the map dependent on selection
        - Check that on small screens the list is not shown
    - Footer
        - Ensure that all links work to the respective pages
        - Check the social media links access the correct web pages
        - Ensure the links change to a stack on smaller screen sizes
    - Back To Top button
        - Ensure the button appears on scroll
        - Verify on click it takes the user back to the top of the page

- About Kingston Page
    - Navbar
        - Same testing as home page
    - Hero image
        - Verify the landing image loads
        - Check the image is responsive and covers 100vw
        - Check the hero text centers and fills the screen on the small screen sizes
    - About Kingston sections
        - Ensure that the AOS animations work when moving down the page
        - Ensure the text and container margins are responsive
        - Check to ensure the card carousels appear and act as expected
        - Check the user can control the card carousels
        - Check the card carousels aren't shown on small screen sizes
        - On the cards, the user can access all the links to external sites
        - Check the 'View on map' buttons take the user to the home page and loads at the map
    - Footer
        - As above in home page section
    - Back To Top button
        - As above in home page section

- Contact Page
    - Navbar
        - Same testing as home page
    - Background
        - Ensure the background loads and covers the screen
        - Check the background overlay is in place and completely covers the background image
    - Contact Form
        - Check the contact form is adaptive to all screen sizes
        - Check the form fields are able to be typed into
        - Check the form 'required' enforces the user to input the correct information
        - On successful form submission a success message is displayed to the user
        - On a form submission error, a warning message is displayed
        - The success/warming message is able to be cleared off the screen
    - Footer
        - As above in home page section
---

### User Story Testing

---

Testing the user stories from the [UX Section](#ux).

- "As a user of this website, first and foremost I would like to be presented with a well designed site that will allow me to navigate the site in an easy manor."
    - When the site is first loaded they are presented with a simple blue navbar; including a logo and site name, alongside 3 links to the 3 pages.
    - The current page is underlined to avoid any confusion as to which page the user is on.
    - On smaller devices the navbar is collapsed but accessible through a burger icon in the top right.
    - Should users be near the bottom of the page, the footer includes navigation links too.
    - The hero image carousel highlights some of the positive aspects of Kingston.
    - The site features a consistent theme, showing a well presented site.
    - The site features a back to top icon to allow the user to quickly get themselves back to the top of the page.

- "As a user of this website I would like to be able to find information of places to eat and/or drink in Kingston."
    - When the user navigates to the 'About Kingston' page and scroll to the 'Food & Drink' section. They are then presented with a short write up about what Kingston offers
    - Users are presented with a carousel of suggestions, including 'name', 'address' and 'website'.
    - Users can use a 'View On Map' button to be taken to the google map and access the markers for each location.

- "As a user of this website I would like to be able to find information of places I can stay overnight in and around Kingston."
    - Following on from the section above, the 'Places To Stay' section includes a write up about different places to stay
    - The suggesstions include both low cost and high end places to stay
    - In keeping with a consistent theme, the users can use the 'View On Map' button to then view clickable markers on the map

- "As a user of this website I would like to be able to find information about different attractions in and around Kingston."
    - Again in keeping with the flow of the website, the last of the 3 sections on the 'About Kingston' gives information on attractions
    - There is a brief write up to summarise some of the attractions available
    - Users are then presented with a button to take them to the map or look at a carousel of suggestions

- "As a user of this website I would like to be able to access more information about different venues/attractions (i.e. Links to external websites)."
    - On all the suggestion carousels there is links to the external websites for the users that want to find more information
    - When searching using the map, on all but small screens there is a list displayed with the 'name', 'address' and 'website' 
    - On top of the list links; when a user clicks on a marker they are also displayed with an info card showing all the options in the list to the side

- "As a user of this website I would like to be able to find and view locations on a map to allow me to plan my time in Kingston."
    - On the home page there is a intergrated map, including list of map markers and info. On the map there is the option to filter results to genres of the users choice

- "As a user of this website I would like to be able to contact the makers of the website in case of any questions or suggestions."
    - The user can quickly navigate to the clearly marked contact page
    - From here the user is presented with a contact form which can be submitted
    - Upon submission the user gets a success message or error message

- "As a user of this website I would like to be able to access the social media links of the website."
    - On all pages the user can view the social media links in the footer
    - The footer is the same across designs to ensure consistent navigation of the site whichever page they are on.

---

### Fixed Bugs

---

- Issue with image paths when pushing to github pages 
    - Fixed relative file paths - [commit](https://github.com/Tmuat/milestone-project-2/commit/b919a8b3231827775bc591c06d037c9eed6f0379)
- Navbar was not 'sticky' on page scroll
    - Added class to keep navbar at the top of the screen - [commit](https://github.com/Tmuat/milestone-project-2/commit/52aef10e3cd4ec559d54cb5dfe7c2d388d3c294d)
- Multiple info windows able to be opened when clicking on a marker on the map
    - Added JS to check if an info window is already open - [commit](https://github.com/Tmuat/milestone-project-2/commit/fd1e9610bf25153b55cc067fc95e58f2cc4cfcc8)
- When using Animate on scroll, "slide-left" was being buggy with the animation causing overflow issues.
    - I could have adapted the document HTML & Body to "overflow-x: hidden"; however, I simply changed the amimation to "slide-up" - [commit](https://github.com/Tmuat/milestone-project-2/commit/4212662fd7169d464b4f6d64b243ba00b8836fcc)
- Bootstrap styling on carousel images overriding class 100vw sizing
    - Bootstrap coding removed as redundant - [commit](https://github.com/Tmuat/milestone-project-2/commit/b8cf5dc9b72920ea588555a666f3517e61cd1180)
- When navbar was changed to sticky, it caused my email send/error alert to be hidden behind the navbar
    - Added custom css to force the alert down - [commit](https://github.com/Tmuat/milestone-project-2/commit/841115d10ed78c795591721f0470dd1ee1ff4d66)
- Images appearing squashed on small devices
    - Added stand alone background images for small devices - [commit](https://github.com/Tmuat/milestone-project-2/commit/2eb3c4ed54931b3546110a11c5afba4ac60b7db6)

---

### Known Bugs

---

- When clicking a row on the maps table, you can open multiple info windows within the map

- Slow load speeds (tested through [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)), some reccomendations include caching images which isnt currently possible with Github pages.

[Return to Contents](#contents)

---

## Deployment

This project is currently being hosted by GitHub Pages; in order to to clone the site yourself, please follow the sub-section ["Clone"](#clone)

---

### Github Deployment

---

To deploy this site to Github pages, the following steps were taken.

1. Sign in to Github and select the repository to be deployed - [here](https://github.com/Tmuat/milestone-project-2)

2. Once in the repository, select the settings as highlighted below in green.

![deployment step 1](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/deployment/deploying1.png "deployment step 1")

3. In the settings menu, scrol down until you get to the github pages section (highlighted in green below)

4. Make sure to select the master branch from the source dropdown menu; following this select the save option

5. You will then have to scroll down to github pages again

![deployment step 2](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/deployment/deploying2.png "deployment step 2")

6. Here you can see the site successfully deployed and copy/click the url

![deployment step 3](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/deployment/deploying3.png "deployment step 3")

For more information on deploying through Github pages, please click [here](https://github.com/marketplace/actions/deploy-to-github-pages).

---

### Clone

---

Should you wish to fork the project, please follow the below steps.

1. Sign in to Github and select the repository to be deployed - [here](https://github.com/Tmuat/milestone-project-2)

2. Click the code button near the top of the repository (highlighted in green below)

![clone step 1](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/deployment/clone1.png "clone step 1")

3. From here you can either download as a zip file to load into an IDE of your choice or you can copy the url using the clipboard icon

![clone step 2](https://github.com/Tmuat/milestone-project-2/blob/master/assets/media/deployment/clone2.png "clone step 2")

4. To use the link, in your Git terminal line, use the command "git clone" followed by the url copied.

```
$ git clone https://github.com/Tmuat/milestone-project-2.git
```

For more information about cloning with github please click [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

[Return to Contents](#contents)

---

## Credits

### Code

---

- Code for the navbar on the site came from [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/).
- Code for the Hover Wobble Skew came from [Hover.css](https://ianlunn.github.io/Hover/).
- Code for the Carousel came from [Bootstrap](https://getbootstrap.com/docs/4.0/components/carousel/).
- Code for the dropdown menu on the maps page came from [Bootstrap](https://getbootstrap.com/docs/4.5/components/dropdowns/).
- Code for the Google Maps API comes from [Google Developers](https://developers.google.com/maps/documentation/) & [Code Institute](https://codeinstitute.net/).
- Code for Google Maps marker drops came from [Google Developers](https://developers.google.com/maps/documentation/javascript/examples/marker-animations-iteration).
- Code for Google Maps info windows came from [Google Developers](https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple).
- Code for the back to top button came from [W3Schools](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top).
- Code for using EmailJS came from [EmailJS](https://www.emailjs.com/docs/sdk/installation/) with the tutorial from [Code Institute](https://codeinstitute.net/).
- Code for the email alerts came from [Bootstrap](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing).
- Code for the card carousel came from [Codeply](https://www.codeply.com/go/EIOtI7nkP8/bootstrap-carousel-with-multiple-cards).
- Code for the Facebook social media icon came from [Font Awesome](https://fontawesome.com/icons/facebook-square?style=brands).
- Code for the Instagram social media icon came from [Font Awesome](https://fontawesome.com/icons/instagram-square?style=brands).
- Code for the Youtube social media icon came from [Font Awesome](https://fontawesome.com/icons/youtube-square?style=brands).
- Code for the Twitter social media icon came from [Font Awesome](https://fontawesome.com/icons/twitter-square?style=brands).
- Code for the internet globe symbol came from [Font Awesome](https://fontawesome.com/icons/globe?style=solid).
- Code for the left and right arrows for the card carousel came from [Font Awesome](https://fontawesome.com/icons/chevron-circle-right?style=solid) and [Font Awesome](https://fontawesome.com/icons/chevron-circle-left?style=solid).
- Code for the icons on the contact page all came from [Font Awesome](https://fontawesome.com/), specifically these icons [user](https://fontawesome.com/icons/user?style=solid), [envelope](https://fontawesome.com/icons/envelope?style=regular), [tag](https://fontawesome.com/icons/tag?style=solid) and [sticky note](https://fontawesome.com/icons/sticky-note?style=regular).

---

### Media

---

- #### Misc
    - The favicon was produced using a [favicon generator](favicon.io/favicon-generator/), it incorporates the main colour of the site with the sites initials.
    - The mockup at the start of the README.md was created using [multi-mockup](https://techsini.com/multi-mockup) - I then created the gif myself.

---

- #### Content
    - The text for the About Kingston - Food & Drink section came from [inKingston](https://www.inkingston.co.uk/food-drink).
    - The text for the About Kingston - Attractions section came from [inKingston](https://www.inkingston.co.uk/accommodation) but was slightly adapted.
    - All other content was the work of the developer.

---

- #### Images
  The images used on this site came from a vaiety of sources.
  
    - The home screen first landing image was taken from [google images](https://www.google.com/). It showcases the Kingston Upon Thames riverside.
    - The christmas market image was taken from ['In Kingston'](https://www.inkingston.co.uk/).
    - The shopping centre image was taken from [The Surrey Comet](https://www.surreycomet.co.uk/news/10978786.apple-store-robbed-and-staff-member-assaulted-in-bentall-centre-kingston/).
    - The image of the Rose Theatre (Stormzy performing) also came from [The Surrey Comet](https://www.surreycomet.co.uk/news/18185060.stormzy-lights-kingstons-rose-theatre/).
    - The christmas lights image was also taken from [The Surrey Comet](https://www.surreycomet.co.uk/news/11592062.get-ready-for-christmas-lights-switch-on-in-kingston/).
    - The Rotunda image was taken from [Rotunda Kingston](https://www.rotundakingston.co.uk/leasing/).
    - The hotel image was taken from [White Hart Hotel](https://www.whiteharthoteluk.co.uk/).
    - The park image was taken from [Royal Parks](https://www.royalparks.org.uk/); specifically of Bushy Park.
    - The images used as a dividers came from [unsplash](https://unsplash.com/); with the exception of the Hampton Court Ice Rink and the christmas market.
    - The image used as a divider for attractions was taken from [Hampton Court Ice Rink](https://hamptoncourtpalaceicerink.co.uk/).
    - Other images were sourced from [google images](https://www.google.com/).
    - The loading gif was created at [loading.io](https://loading.io/).

---

### Acknowledgements

---

I would like to thank my mentor Oluwafemi Medale for his help keeping me on the right lines. I would like to thank all the people that kindly sat and reviewed my site through production.

---

### Disclaimer

---

This project was created for educational use only.

[Return to Contents](#contents)
