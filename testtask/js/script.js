$(document).ready(function(){
  $(".our-clients__slides").bxSlider({
    mode: "horizontal",
    captions: false,
    responsive: false,
    controls: true,
    nextText: "",
    prevText: "",
    nextSelector: $(".our-clients__slider-controls--next"),
    prevSelector: $(".our-clients__slider-controls--prev"),
    pager: false
  });
});

$(document).ready(function(){
  $(".advantages__slider").bxSlider({
    mode: "horizontal",
    captions: false,
    responsive: false,
    controls: true,
    nextText: "",
    prevText: "",
    nextSelector: $(".advantages__slider-next"),
    prevSelector: $(".advantages__slider-prev"),
    pagerCustom: '.advantages__slider-pager',
    pager: true
  });
});

function initMap() {
  var myLatLng = {lat: 53.225254, lng: 50.203105};
  var map = new google.maps.Map(document.getElementById("map"), {
    disableDefaultUI: true,
    center: {lat: 53.225254, lng: 50.201061},
    zoom: 17
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
};
