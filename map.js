<!--<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qqSCEElgfeZj1nyi9WYDYwkYtMmpiMxC&amp;ehbc=2E312F" width="640" height="480"></iframe>-->
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
<script src="https://cdn.jsdelivr.net/gh/windycom/leaflet-kml/L.KML.js"></script>
<script src="https://api.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.2.0/leaflet-omnivore.min.js"></script>
<div id="map" style="width: 100%; height: 400px; z-index: 0;"></div>
<script type="text/javascript">// <![CDATA[
// Make basemap
const map = new L.Map('map', {center: new L.LatLng(-27.5, 153.5), zoom: 4, minZoom: 1, zoomControl: false})
, osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
map.addLayer(osm)



          L.Marker.prototype.options.icon = L.icon({
              iconUrl: "https://cdn.shopify.com/s/files/1/2195/6549/files/R-OnWhite_32x32.png"
          });

          var runLayer = omnivore.kml('http://www.google.com/maps/d/kml?forcekml=1&mid=1qqSCEElgfeZj1nyi9WYDYwkYtMmpiMxC')
          .on('ready', function() {
            map.fitBounds(runLayer.getBounds());
          })
          .bindPopup(function (layer) {
            var description = layer.feature.properties.description
            var link = ""
            if (description) {
              url = description
              //if (!description.startsWith("www")) {
              //  url = ""+description
              //}
              if (!description.startsWith("http")) {
                url = "http://"+description
              }
              //link = linkify(description)
              //link = description.link(url)
              link = "<a href=\""+url+"\" target=\"_blank\">"+description+"</a>"
            }
            return L.Util.template("<h3>"+layer.feature.properties.name+"</h3><p>"+link+"</p>");
          })
          .addTo(map);
// ]]></script>
