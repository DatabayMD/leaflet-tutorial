leaflet-tutorial
================

A tutorial for integrating GeoJSON data from Maryland iMap into a Leaflet web application.

For more information about this repository or if you have any questions, contact gio.doit@maryland.gov

Summary
---

One of the greatest features of [Maryland iMap](http://imap.maryland.gov/Pages/default.aspx) is the wide range of data that can be obtained through it via multiple formats. To better serve the development community, [Maryland iMap](http://imap.maryland.gov/Pages/default.aspx) provides a GeoJSON URL for every dataset on the site. This GeoJSON feed can be easily consumed by mapping libraries and contains geographic points, polygons, lines, etc. called features, and the associated description of each feature. If you are familiar with JSON, GeoJSON is just a standardized specification on top of JSON that is formatted to include geographic data. 

Leaflet is an open source Javascript mapping library that can be used to create online and highly interactive mapping applications. With a good API and a very active community, Leaflet is a great way to take data and display it in a visually appealing manner. It has robust GeoJSON support and, with all of these features combined, it is the perfect library for displaying GeoJSON data from [Maryland iMap](http://imap.maryland.gov/Pages/default.aspx). This repository attempts to make development easier to the uninitiated in the Leaflet world by accomplishing three objectives:

1. Write the boilerplate code so that those new to Leaflet don't have to spend time getting even a blank map to come up on the screen. This is accomplished through providing a proper folder structure, an index.html file that contains needed libraries and HTML structure, a CSS file that sets the height of the map to 100% and gets rid of the default margins, and a map.js file that creates a Leaflet map and adds OpenStreetMap as the base layer.

2. Give a demonstration of how to pull data from the [Maryland iMap data page](http://data.imap.maryland.gov/) in GeoJSON format using jQuery and integrate that data into the map.  A few of the most common style and functionality related alterations such as changing the color of polygons and adding a customized pop-up to each feature are also shown.

3. Comment the code extensively in order to promote understanding of why the website works.

How to Run
---

Clone this repository onto your computer. **For PC, clone it into C:/inetpub/wwwroot. To access the site, in your browser go to localhost/leaflet-turotial/index.html** (if you open it via C:/inetpub/wwwroot/leaflet-turotial/index.html the GeoJSON will not load). The user-defined Javascript code is located in js/map.js, and that is the file that you will want to change in order to make changes to the map. 

To get a GeoJSON URL from [Maryland iMap](http://imap.maryland.gov/Pages/default.aspx), go to the [Maryland iMap Data page](http://data.imap.maryland.gov/) and select a category (or search at the top for a dataset). Once you have found a dataset you would like to integrate, click "Download" and then "API". Copy the GeoJSON URL and paste it into js/map.js, overwriting the current GeoJSON URL.

It is acceptable to use this code as the base for your application.

Useful Links
---

[Leaflet](http://leafletjs.com/)

[Leaflet GeoJSON API](http://leafletjs.com/reference.html#geojson)

[GeoJSON Specification](http://geojson.org/geojson-spec.html)

[jQuery](http://jquery.com/)

[Maryland iMap](http://imap.maryland.gov/Pages/default.aspx)

[Maryland iMap Data](http://data.imap.maryland.gov/)