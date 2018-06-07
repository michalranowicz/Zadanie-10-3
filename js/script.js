$(function() {
  //this code will execute after the DOM is loaded
  setInterval(changeSlide, 3000);
  var carouselList = $("#carousel ul");

  function changeSlide() {
    carouselList.animate({ marginLeft: -400 }, 500, moveFirstSlide);
  }
  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");

    lastItem.after(firstItem);
    carouselList.css({ marginLeft: 0 });
  }
  function moveLastSlide() {
    var firstItem = carouselList.find("li:last");
    var lastItem = carouselList.find("li:first");

    lastItem.before(firstItem);
    carouselList.css({ marginLeft: 0 });
  }
  $("#right-button").on("click", moveFirstSlide);
  $("#left-button").on("click", moveLastSlide);
});
