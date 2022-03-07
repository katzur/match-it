![MATCH IT MEMORY GAME](/assets/readme-images/logo.png)

# **MATCH IT** - memory game with geometric fun character shapes
## *by Katarzyna Zurawska*

### [Click here to view the site.](https://katzur.github.io/match-it/)
### [Click here to view the repository.](https://github.com/katzur/match-it)


# Table of Contents:
1. [About the project](#about-the-project)
2. [User Experience(UX)](#user-experience-UX)
   1. [Target Audience](#target-audience)
   2. [User Stories](#user-stories)
   3. [Strategy](#strategy)
   4. [Scope](#scope)
   5. [Structure](#structure)
   6. [Skeleton](#skeleton)
      1. [Wireframes](#wireframes)
   7. [Surface](#surface)
      1. [Colors](#colors)
      2. [Typography](#typography)
      3. [Images and Icons](#images-and-icons)
3. [Features](#features)
   1. [Current Features](#current-features)
   2. [Future Features](#future-features)
4. [Testing](#testing)
    1. [HTML Validator](#html-validator)
    2. [Jigsaw CSS Validator](#jigsaw-css-validator)
    3. [JS HINT](#js-hint)
    4. [Lighthouse accessibility (Chrome DevTools)](#lighthouse-accessibility-chrome-devtools)
    5. [Manual testing](#manual-testing)
    6. [Bugs and Fixes](#bugs-and-fixes)
5. [Deployment](#deployment)
   1. [GitHub Pages](#github-pages)
   2. [Forking Repository](#forking-the-github-repository)
   3. [Cloning the project](#cloning-the-project)
6. [Used technologies and credits](#used-technologies-and-credits)
    1. [Languages](#languages)
    2. [Content](#content)
    3. [Media](#media)
    4. [Other technologies](#other-technologies)
    5. [Credits](#credits)

# About the project
MATCH IT is a fun, simple memory game website. The game itself allows the user to test their memory in short (under 2 min) rounds of pairing cards challenge. By the default the game is dedicated mostly to younger users, due to the illustrative, cheerful style of the game, and possibility to learn about the geometric shapes and colors while playing, although more mature users will find it enteratining as well, due to the timed, competitive nature of the game. 

The idea behind the game is to memorize the cards position on the board, and pair them as fast as possible, before the time runs out. Users can practice by reattempting the game, and try to improve their memory skills to beat their previous time scores, as well as learn about the geometric shapes and colors.

# User Experience (UX)
## Target Audience
* Younger users - ability to train the memory skills, learn about the geometrical shapes and colors
* Memory games enthusiasts
* Users looking for quick entertainment game
* Mature users - looking for alternative methods to improve their memory skills

## User Stories
* First time user:
    - As a first time user I'd like to play a quick, fun game.
    - As a first time user I'd like to learn about the geometrical shapes and colors.
    - As a first time user I'd like to train my memory and try to win the game.
    - As a first time user I'd like the game and page to be easy to navigate.

* Returning user:
    - As a returning user I'd like to navigate the site without any issues on different types of devices.
    - As a returning user I'd like to refresh the knowledge about the geometrical shapes and colors.
    - As a returning user I'd like to be able to improve the memory skills, score and time I finish the game.
    - As a returning user I'd like to be able to remember how to play the game without any problems.

* Game creator:
    - As a game creator I'd like to create fun and interactive game for the users.
    - As a game creator I'd like to allow the younger users to learn about the geometrical shapes and colors while playing.
    - As a game creator I want to ensure the page is easy to navigate.
    - As a game creator I want to ensure the game is easy to navigate and play for the users.
    - As a game creator I want to make sure the users enjoy their time using the page, on any device type.
    - As a game creator I want the users to feel the need of coming back to the created page.

## Strategy
The main goal was to create an easy to navigate ans simple memory game that displays all data in a clear and easy to read way. The webiste provides consistent styling across both pages, provides accessibility on different device types, and ensures that the agame itself runs without any issues. Created code is easy to navigate, and allows implementation of future features.
### Project Goals
* To provide fun and easy to navigate memory game.
* To allow younger users to learn about geometrical shapes and colors.
* To allow the users to practice their memory skills and beat their previous time scores.
* To allow future updates (different cards, more cards, etc)

## Scope:
The scope of MATCH IT memory game is currently defined by the following features:
* Functioning memory game application (18 cards in total - 9 pairs to match).
* Innovative, self-created images within the whole page (hero images, card faces, logo).
* Time counter (100 seconds) that makes the game more competitive and increases user's engagement.
* Pair counter that counts all the matched card pairs which the user found during the game. 
* Button that allows to refresh the game board and reshuffle the cards.
* Pop-up messages at the end of the game (in case of winning or running out of time), allowing the user to replay the game.
* Fully responsive design.
* Simple and easy to navigate page structure and consistent styling.
* Footer with social media links and copyright.
* Favicon that is relating to the game type.
* Links that are functioning and content that is relevant to the page.

Features that are to be considered for future releases:
* Different game options (different card types, more game categories).
* Score points counter that allows the user to score more points based on how quickly cards were matched.
* Difficulty modes.

## Structure
The structure for MATCH IT memory game has been designed to allow all users (without age limit) to have a easy and intuitive access to the game and good experience. A consistent minimalistic design was implemented on both pages. The flow of the pages will feel natural and allow for the user to access game page without any effort.

* **Header**
    * Game logo will act as a link back to the homepage.

![Logo on the game page](/assets/readme-images/logo-readme.jpg)

* **Main Page**
    * Game Invite section, which explains the game type and sets the user's expectation.
    * Animated PLAY button, that cheerfully jumps - drags user's attention and allows them to open the game page section. Intuitive enough even for younger users, who might still not be able to read.

![Game invite section](/assets/readme-images/game-invite-readme.jpg)

* **Footer**
    * Social media icons allowing the user to find the game on Instagram and Facebook platforms.
    * Copyright section.

![Footer section](/assets/readme-images/footer-readme.jpg)

* **Hero Image**
    * Hero image on the main page changes depends on the screen size resolution.
    * Hero images were personally made by the game creator.
    * All of the images stay within the game style and theme.

![Hero images used for main page](/assets/readme-images/hero-images-readme.jpg)

* **Game Area**
    * **Game Header:**
        * Timer - set up automatically to 100 seconds, and counting down to increase user's engagement. Once reached 0 - game pops a game over message.
        * Pairs counter - allows the user to keep track of the amount of pairs found. Once reached out to maximum of 9 points - game pops a congratulations message.
        * Refresh button - allows the user to reload the game board, start new game and reshuffle cards.

![Game Header](/assets/readme-images/game-headings-readme.jpg)

* **Game board:**
    * containing 18 cards in total. 9 types of cards, where 2 cards are having identical face sides. All cards have back side in pink color, and face side with different geometrical shapes in different colors.
    * Game board is fully responsive and cards adjust to the screen size of the user's device. 
    * Once the user hoovers over the card - it slightly moves. Once clicked - gives the card a 3D effect of moving around its Axis.
    * Cards are shuffled on every reload of the game page, click on refresh button, or click on "Try again/ Play again" message on pop-up screen at the end of the game.
    * Only two card faces can be uncovered at the same time. If cards match - they remain open, if not - the back face appears again.

![Game Board](/assets/readme-images/game-board-readme.png)

* **Game Over/ Victory pop-up screen**
    * Game over pop-up - triggered once the remaining time in a game reaches 0. User sees a message "Not enough time? Try again", which allows the user to click on the message and start the game again.

![Game-over pop-up](/assets/readme-images/game-over-readme.png)

    * Victory pop-up - triggered once all the cards were matched and score for pairs reaches 9 points. User sees a message "Hooray! You matched all cards. Play again", which allows the user to click on the message and start the game again.

![Victory pop-up](/assets/readme-images/victory-readme.png)

## Skeleton
### Wireframes
* [Desktop Main Page](/assets/readme-images/wireframe-main-page.jpg)
* [Desktop Game Page](/assets/readme-images/wireframe-game-page.jpg)
* [Mobile Main Page](/assets/readme-images/wireframe-main-mobile.jpg)
* [Mobile Game Page](/assets/readme-images/wireframe-game-mobile.jpg)

## Surface
### Colors
The colors choice selected for the MATCH IT pages is based on the rule of simplicity and modern minimalism. The black background is complimented by more colorful hero image and white, pink and purple colors of the fonts. The whole page have a clean look. All the colors of content and background were intentionally picked to keep the modern, simple design. They compliment each other well and keep great page contrast, which makes it more user-friendly and readable. 

![Website color palette](/assets/readme-images/colors-readme.jpg)
![Contrast checker](/assets/readme-images/contrast-checker-readme.jpg)

### Typography
I have chosen two fonts that have a continual use throughout the design of both pages.
* [Rammetto One](https://fonts.google.com/specimen/Rammetto+One?query=rammetto) - main font that is used on the page for logo, headers, button on the main page and copyright section, as well as game headings (timer and pairs counter). Very easy to read, modern looking font. For the website purpose used bold with extra spacing between the letters for better reading experience.
* [Chewy](https://fonts.google.com/specimen/Chewy?query=chewy) - easy to read sans-serif font that aesthetically compliments Chewy in paragraph elements and pop-up screen at the end of the game.

### Images and icons
* The main source for icons and favicon used throughout the website is [Font Awesome](https://fontawesome.com/).
* Images used for hero images and card faces were created by the game creator (me - Katarzyna Zurawska) using iPad, Apple Pencil, and Procreate illustration app.
* Logo for the game was created by game creator (me - Katarzyna Zurawska) using [VistaCreate page](https://create.vista.com/home/)

# Features:
## Current Features:
* Innovative, self-created images within the whole page (hero images, card faces, logo).
* Time counter (100 seconds) that makes the game more competitive and increases user's engagement.
* Pair counter that counts all the matched card pairs which the user found during the game. 
* Button that allows to refresh the game board and reshuffle the cards.
* Pop-up messages at the end of the game (in case of winning or running out of time), allowing the user to replay the game.
* Fully responsive design.

## Future features:
* Different game options (different card types, more game categories).
* Score points counter that allows the user to score more points based on how quickly cards were matched.
* Difficulty modes.
* Save score to a local High Scores table.

# Testing
## [HTML Validator](https://validator.w3.org/)
No errors were returned when passing through the official W3C validator. [Results](/assets/image-readme/html-validator.jpg)

## [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/validator)
No errors were returned when passing through the official Jigsaw validator. [Results](/assets/image-readme/jigsaw-css.jpg)

## [Lighthouse accessibility (Chrome DevTools)](https://developers.google.com/web/tools/lighthouse/)
I confirmed that the colors and fonts chosen are easily readable and accessible by running it through Lighthouse in DevTools (both mobile and desktop versions).
- [Desktop results](/assets/image-readme/lighthouse-performance-desktop.jpg)
- [Mobile results](/assets/image-readme/lighthouse-performance-mobile.jpg)

## Manual testing
- I manually tested that the website works in different browsers: Chrome, Safari, Firefox.
- I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the devtools device toolbar and manually testing the page on different devices (laptops, tablet, iPhone and three different Android smartphones).
- I manually confirmed that the navigation, header, about us, why to swap, gallery and next swap pages, as well as contact information and newsletter sign up texts are all readable and easy to understand and use.
- I have confirmed that the newsletter form works: requires entry in the email field, will only accept email in the email field, and the submit button works.

# Bugs and fixes
## Solved bugs
- When the file got deployed I discovered that website title shows up on the top of every page in form of text element, that I wasn't able to remove or hide using CSS.
- I discovered that one of the closing tags in head element was not used properly and was missing one of the angle brackets that was influencing the title element to display on the page. Once closed properly – it moved title out of body into its proper function, and fixed the problem.

![Bug before fixing](/assets/image-readme/bug-before.jpg)
![Bug after fixing](/assets/image-readme/bug-after.jpg)






# Technologies
## Languages
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)


