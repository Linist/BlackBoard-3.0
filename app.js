$(document).ready(function () {
    $('.flex-container').load('Content.html');
    
    $(".hamburger").click(function () {
        $(".wrapper").toggleClass("collapse");
    });
    
    $("#home").click(function () {
        $('.flex-container').load('Content.html');
    });
    
    $("#profile").click(function () {
        $('.flex-container').load('Profile.html');
    });
    
    $("#courses").click(function () {
        $('.flex-container').load('Courses.html');
    });
    
    $("#timetable").click(function () {
        $('.flex-container').load('Timetable.html');
    });
    
    $("#mail").click(function () {
        $('.flex-container').load('Mail.html');
    });
    
    $("#selfservice").click(function () {
        $('.flex-container').load('Selfservice.html');
    });
    
    $("#lessontask").click(function () {
        $('.flex-container').load('Lessontask.html');
    });
    
    $("#booking").click(function () {
        $('.flex-container').load('Booking.html');
    });
    
    $("#library").click(function () {
        $('.flex-container').load('Library.html');
    });
    
    $(".seachbtn").click(function(){
        $(this).toogleClass("bg-green");
        $(".fas").toogleClass("color-white");
    });
});


