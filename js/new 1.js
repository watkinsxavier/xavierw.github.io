<!DOCTYPE html>
<html>
<head>
    <title> GeoTag Interactive Mapping Exercise</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin="" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
</head>
<style>

.sidebar {
  position: absolute;
  left: 0px;
  width: 250px;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 20px;
  font-size: 16px;
  border: solid;
  background-color: #add8e6;
}
.main-heading {
    font-size: 15px;
}
</style>
<body>
  <div class="sidebar">
  <font color="#3D9970"><center><h2 id="main-heading" >GeoTag Mapping</h2></center></font>
  <div>

<div class="row">
  <div class="column">
    <center> <img src="https://media.licdn.com/dms/image/v2/C4D1BAQGNTBGdfGk5xw/company-background_10000/company-background_10000/0/1583735481069/university_of_north_carolina_at_chapel_hill_cover?e=2147483647&v=beta&t=XJy1RwnHMYlnRtwxIKDUhE3e36sWElXz4_qZZdVxU7c" alt="Temple Logo" style="width:60%"> </center>
  </div>
  <font color="MidnightBlue"><center><h3> I love interactive maps!</h3></center></font>
  </div>

<h1> University of North Carolina at Chappel Hill </h1>
<h2> Academic Building Spotlight: George Watts Alumni Center </h2>
<h3> Located at the heart of Carolina, adjacent to Kenan Stadium, the George Watts Hill Alumni Center occupies a prominent spot on the historic student footpath connecting the north and south campuses. Since its opening in 1993, the center has grown into a vibrant hub for alumni, offering 63,000 square feet of versatile space. It serves as the welcoming home where alumni can always return, while also functioning as the central office for Carolina Alumni and hosting a wide variety of events, programs and activities that celebrate and engage the Carolina community. Whether for reunions, networking or special events, the George Watts Hill Alumni Center is a cornerstone of the Tar Heel experience, bridging the past, present and future of Carolina pride. </h3>   <<<< UPDATE THIS TO A BRIEFLY DESCRIBE YOUR MAP TO A NEW AUDIENCE

<footer>
       <p> Share this template! <br> https://github.com/mckeont/GeoTag </p>
</footer>

    <div id="map" style=" position: fixed; right: 0; left: 300px; top: 0; bottom: 0 "></div>

    <!-- JS IMPORTS -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
<script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <script src= "http://leaflet.github.io/Leaflet.heat/dist/leaflet-heat.js"></script>
    <script src='https://npmcdn.com/@turf/turf/turf.min.js'></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script src= "js/setup.js"></script>
    <script src= "js/georgewatts.js"></script>  <<<< UPDATE THIS TO YOUR NEW BUILDING LAYER

    <script>

// Create a style variable
    var myStyle = {
    radius: 5,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.7
};

//Load in geojson
    var georgewatts =   L.geoJSON(georgewatts, {   <<<< UPDATE THIS TO YOUR NEW BUILDING LAYER
          style: myStyle
        }).bindPopup(function (layer) {
       return "" + layer.feature.properties.name
    }).addTo(map).bringToBack();

// Make a simple circle   
var circle = L.circle([39.983219999796114, -75.15256557830536], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(map);

// Make a shape  <<<< UPDATE THIS TO CREATE A NEW SHAPE IN YOUR STUDY EXTENT
var polygon = L.polygon([
    [39.982739776172565, -75.15452518555603],
    [39.98265756770085, -75.15402093032024],
    [39.982254744759665, -75.15411748983348],
    [39.98227118655885, -75.15448227021682],
    [39.98195057076098, -75.15454664322564],
    [39.98204100101016, -75.1547290334173],
    [39.982739776172565, -75.15456810089525]
]).addTo(map);

// Add a marker
L.marker([39.983219999796114, -75.15356557830536]).addTo(map);
    </script>

</body>
</html>

What to submit: ZIP your project folder which contains: image folder with YOURIMAGE.png; js folder with   setup.js, YOURLAYER.js ; and your index.html. 

image.png

image.png

image.png

Host your code on Github to create a shareable URL link.
Great way to make a map-based holiday card, or share points of interest after a hike, vacation, or anything really
Extra Credit: Copy into notepad and update the following cheesesteak map with your favorite cheesesteak spot. Find the yelp score, update the background color, and add your name.

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Web Mapping Starter Template</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />

    <!-- Leaflet CSS (without integrity/crossorigin for local use) -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">

    <style>
        body {
            margin: 0;
            padding: 0;
            background: #f4f142;
            font-family: Lato, sans-serif;
            color: #0D0000;
        }

        header {
            padding: 6px 10%;
        }

        h1 {
            display: inline-block;
            margin-right: 20px;
            color: #0D0000;
        }

        h2 {
            display: inline-block;
            color: #001323;
        }

        #map {
            width: 80%;
            height: 540px;
            margin: 10px auto;
        }

        footer {
            padding: 6px 10%;
            width: 80%;
        }

        p {
            font-size: 1em;
            color: #0D0000;
        }
    </style>
</head>

<body>
    <header>
        <h1>Philly Cheesesteak Map</h1>
        <h2>Explore & Learn!</h2>
    </header>

    <div id='map'></div>

    <footer>
        <p>By Your Name Here!</p>
    </footer>

    <!-- Script at the very end ensures Leaflet is loaded before this runs -->
    <script>
        // Create the map
        var map = L.map('map', {
            center: [39.9331904, -75.1614319],
            zoom: 13,
        });

 var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
});
tiles.addTo(map);


        // Cheesesteak shop data
        var cs = ["Oregon Steaks", "Genos", "Jims", "Tims", "Jimmy G's", "Cleavers"];
        var csCoord = [
            [39.9161561, -75.1668297],
            [39.9331904, -75.169],
            [39.94156, -75.1514984],
            [39.9416746, -75.2193495],
            [39.966211, -75.1625537],
            [39.9514014, -75.1728076]
        ];
        var csStar = [3.5, 3.5, 4, 4, 4, 4.5];
        var csReviews = [89, 2424, 121, 133, 232, 264];

        // Loop through the spots and add popups
        for (var i = 0; i < cs.length; i++) {
            var yelpFactor = yelp(csStar[i], csReviews[i]);
            var popup = "<b>" + cs[i] + "</b><br>" +
                "<b>Yelp Factor</b>: " + yelpFactor.toLocaleString();
            L.marker(csCoord[i])
                .addTo(map)
                .bindPopup(popup);
        }

        // Function to calculate Yelp factor
        function yelp(star, reviews) {
            return star * reviews;
        }
        
    </script>

</body>
</html>

