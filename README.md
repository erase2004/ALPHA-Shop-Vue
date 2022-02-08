# ALPHA Shop (Vue)
ALPHA CAMP Season 3 Frontend Assignment 1 rewritten in Vue.js
- - -
## Project Preview
![Desktop Address Step](public/images/preview-1.png)
![Desktop Shipping Step](public/images/preview-2.png)
![Desktop Payment Step](public/images/preview-3.png)
![Desktop Modal](public/images/preview-4.png)
![Desktop Address Step (Dark Theme)](public/images/preview-5.png)
![Desktop Shipping Step (Dark Theme)](public/images/preview-6.png)
![Desktop Payment (Dark Theme)](public/images/preview-7.png)
![Desktop Modal (Dark Theme)](public/images/preview-8.png)
![Mobile Address Step](public/images/preview-9.png)
![Mobile Shipping Step](public/images/preview-10.png)
![Mobile Payment Step](public/images/preview-11.png)
![Mobile Modal](public/images/preview-12.png)
![Mobile Navbar Extended](public/images/preview-13.png)
![console message when modal opened](public/images/preview-14.png)

**reminder**: Modal is imeplemented by view height attritube, so the modal shadow won't cover the whole webpage but the whole browser window.
- - -

## This project is currently built on
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [SASS/SCSS](https://sass-lang.com/)
* [Vue.js](https://vuejs.org/)
* [Vue CLI](https://cli.vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
- - -

## Features of the project
* It supports desktop and mobile layout (display currently switchs on 749.9px)
* It supports theme switch (currently only light and dark theme available)
* Product item amount selection
* Total price calculation and display
* Show summary data on modal and console after confirmation
* Keep user input when page refreshed

- - -

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

- - -

## Project Directory Explanation
    /src               - root directory of source code
    /src/router        - router setting
    /src/views         - view files
    /src/components    - view component files
    /src/utils         - share functions
    /src/styles        - SCSS style
    /src/assets        - root directory of static files
    /src/assets/icons  - SVG icons
    /src/assets/images - pictures
    /public            - static resource
