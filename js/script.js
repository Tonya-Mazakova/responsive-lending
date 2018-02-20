$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        prevText: "",
        nextText: ""
    });

    $('.slick-slider').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        /*centerMode: true,*/
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true
                }
            },
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }]
    });

    let lastTarget;
    document.getElementById("main-slider-tabs").addEventListener('click', function (e) {
        let target = e.target;
        if (lastTarget) {
            lastTarget.classList.remove("active");
        }
        target.classList.add("active");
        lastTarget = target;
    });

});

//drop-down menu of header
$(document).ready(function () {
    $('.nav-menu-item').hover(function () {
        $(this).children('ul').stop(false, true).slideDown(300)
    }, function () {
        $(this).children('ul').stop(false, true).slideUp(100)
    })
});

$(document).ready(function () {
    $(".menu-button").click(function () {
        $(".nav-menu").slideToggle(300);
    });
});
