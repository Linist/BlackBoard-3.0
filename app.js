$(document).ready(function () {

    /*------loading the content on the mainpage-----*/
    $('.flex-container').load('Content.html');

    /*----------------clickEvent side menu-------------*/
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

    $("#Print").click(function () {
        $('.flex-container').load('Print.html');
    });

    $("#Software").click(function () {
        $('.flex-container').load('Software.html');
    });

    /*--------------clickEvent "Courses"-----------*/

    $("courses").on("click", "coursesDesign", function () {
        $('.flex-container').load('CoursesDesign.html');
    });

    $("#CoursesDesign").click(function () {
        $('index.flex-container').load('CoursesDesign.html');
    });

    $("#coursesDP").click(function () {
        $('.flex-container').load('CoursesDP.html');
    });

    $("#courses3D").click(function () {
        $('.flex-container').load('Courses3D.html');
    });

    /*--------------side menu collapse-----------*/

    $(".hamburger").click(function () {
        $(".wrapper").toggleClass("collapse");
    });

    /*------search animation------*/

    $(".searchbtn").click(function () {
        $(this).toggleClass("bg-blue");
        $(".fas").toggleClass("color-white");
        $(".searchInput").toggleClass("active-width");
    });

    /*-----Dark/white toggle-----------*/


        $(".switch").click(function () {
            $("body").toggleClass("dark-mode");
        });

    /*---------content draggable--------*/
    

        

});