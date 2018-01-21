'use strict';

$(function() {

var slideShow = $(".slide-show");
var slideCount = $(".single-slide").length;
var slideWidth = 1000/slideCount;
var slideIndex = 0;
    
slideShow.css("width", slideCount + "00%");
    
slideShow.find(".single-slide").each(function(index) {
    $(this).css({"width": "slideWidth" + "%", "margin-left":"sideWidth" * index + "%"});
});
    
    console.log(slideCount);
    
});