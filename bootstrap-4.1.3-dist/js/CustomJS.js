// Custom JavaScript file
// To hide the navigation bar after click on small screens

// To hide the navigation bar after click on a link
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// To hide the navigation bar after a click anywhere on the body
$(document).ready(function () {
    $("body").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});