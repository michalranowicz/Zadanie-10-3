$(function() {
  //this code will execute after the DOM is loaded
  setInterval(changeSlide, 3000);
  var $carouselList = $("#carousel ul");

  function changeSlide() {
    $carouselList.fadeIn(5000, moveFirstSlide());
  }
  function moveFirstSlide() {
    var firstItem = $carouselList.find("li:first");
    var lastItem = $carouselList.find("li:last");

    lastItem.after(firstItem);
  }
  function moveLastSlide() {
    var firstItem = $carouselList.find("li:last");
    var lastItem = $carouselList.find("li:first");

    lastItem.before(firstItem);
  }
  $("#right-button").click(function() {
    moveFirstSlide();
  });
  $("#left-button").click(function() {
    moveLastSlide();
  });
});
