ymaps.ready(init);
var myMap,
  myPlacemark;

function init(){
  myMap = new ymaps.Map ("map", {
    center: [59.939236, 30.327998],
      zoom: 16
  });

  myPlacemark = new ymaps.Placemark([59.939383, 30.322745], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/icon_map_marker.png",
    iconImageSize: [218, 142]
  });

  myMap.geoObjects.add(myPlacemark);
}

var link = document.getElementById("feedback-link");
var popup = document.getElementById("feedback");
var feedback_close = document.getElementById("feedback_close");
var overlay = document.getElementById("overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback--show");
  overlay.classList.add("overlay--show");
});
feedback_close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback--show");
  overlay.classList.remove("overlay--show");
});

var toggle_1 = document.getElementById("slider__toggle_1");
  var toggle_2 = document.getElementById("slider__toggle_2");
  var toggle_3 = document.getElementById("slider__toggle_3");
  var slide_1 = document.getElementById("slide_1");
  var slide_2 = document.getElementById("slide_2");
  var slide_3 = document.getElementById("slide_3");
  var wrapper = document.getElementById("index_page");

toggle_1.addEventListener("click", function(event) {
  slide_1.classList.add("slide--show");
  slide_2.classList.remove("slide--show");
  slide_3.classList.remove("slide--show");
  wrapper.classList.add("index-page--bg-1");
  wrapper.classList.remove("index-page--bg-2");
  wrapper.classList.remove("index-page--bg-3");
  toggle_1.classList.add("slider-controls__toggle--active");
  toggle_2.classList.remove("slider-controls__toggle--active");
  toggle_3.classList.remove("slider-controls__toggle--active");
});

toggle_2.addEventListener("click", function(event) {
  slide_2.classList.add("slide--show");
  slide_1.classList.remove("slide--show");
  slide_3.classList.remove("slide--show");
  wrapper.classList.add("index-page--bg-2");
  wrapper.classList.remove("index-page--bg-1");
  wrapper.classList.remove("index-page--bg-3");
  toggle_2.classList.add("slider-controls__toggle--active");
  toggle_1.classList.remove("slider-controls__toggle--active");
  toggle_3.classList.remove("slider-controls__toggle--active");
});

toggle_3.addEventListener("click", function(event) {
  slide_3.classList.add("slide--show");
  slide_1.classList.remove("slide--show");
  slide_2.classList.remove("slide--show");
  wrapper.classList.add("index-page--bg-3");
  wrapper.classList.remove("index-page--bg-1");
  wrapper.classList.remove("index-page--bg-2");
  toggle_3.classList.add("slider-controls__toggle--active");
  toggle_1.classList.remove("slider-controls__toggle--active");
  toggle_2.classList.remove("slider-controls__toggle--active");
});
