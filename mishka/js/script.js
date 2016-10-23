function initMap() {
  var myLatLng = {lat: 59.936350, lng: 30.321120};
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 59.936343, lng: 30.321770},
    zoom: 16
  });
  var image = "img/icon-map-pin.png";
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: "Mishka"
  });
};

var toggler = document.querySelector(".main-menu__toggler");
var menu = document.querySelector(".main-menu");

menu.classList.remove("main-menu--no-js");

toggler.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu.classList.contains("main-menu--closed")) {
    menu.classList.add("main-menu--opened");
    menu.classList.remove("main-menu--closed");
  }
  else {
    menu.classList.add("main-menu--closed");
    menu.classList.remove("main-menu--opened");
  }
});

var modal = document.querySelector(".add-to-cart");
var overlay = document.querySelector(".overlay");

if (document.querySelector(".product-of-the-week__order-link")) {
  var button = document.querySelector(".product-of-the-week__order-link");
}

else if (document.querySelector(".product-item__buy")) {
  button = document.querySelector(".product-item__buy");
}

button.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("overlay--show");
  modal.classList.add("add-to-cart--show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();

  if (overlay.classList.contains("overlay--show")) {
    overlay.classList.remove("overlay--show");
  }

  if (modal.classList.contains("add-to-cart--show")) {
    modal.classList.remove("add-to-cart--show");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {

    if (overlay.classList.contains("overlay--show")) {
      overlay.classList.remove("overlay--show");
    }

    if (modal.classList.contains("add-to-cart--show")) {
      modal.classList.remove("add-to-cart--show");
    }
  }
});
