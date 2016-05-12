# Chrome POST to URL

This is the skeleton of simple extension cobbled together from stackoverflow
that allows you to specify a URL to post data to, and then another URL to
redirect to after the successful POST request. It is useful any time that you want
to create an extension that will process or scrape data from the current page.

## Usage

Open the file popup.js and replace the following two URLs with where you'd like to
POST to and redirect to:

``` javascript
var postURL = "http://localhost:4567";
var redirectURL = "http://localhost:4567/newurl";
```

Visit `chrome://extensions` in your browser and install this plugin by checking
the developer checkbox, and then loading an unpackaged plugin by pointing at 
the directory where you cloned this repo. 
