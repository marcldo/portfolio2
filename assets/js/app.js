$(document).ready(function () {
    $(".open-menu").on("click", function () {
        event.preventDefault();
        $(".overlay").addClass("open");
        $(".close-menu").css("visibility", "visible");
        $(".open-menu").css("visibility", "hidden");
        $(".contact-envelope").css("visibility", "hidden");
    });

    $(".close-menu").on("click", function () {
        $(".overlay").removeClass("open");
        $(".close-menu").css("visibility", "hidden");
        $(".open-menu").css("visibility", "visible");
        $(".contact-envelope").css("visibility", "visible");
    });

    $(".overlay a").click(function () {
        event.preventDefault();
        $(".overlay").removeClass("open");
        $(".close-menu").css("visibility", "hidden");
        $(".open-menu").css("visibility", "visible");
        $(".contact-envelope").css("visibility", "visible");
        $("body,html").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000);

    });

    $(".grid-item").hover(function () {
        $(this).find(".grid-item-github").animate({ opacity: 1 })
        $(this).find(".grid-item-launch").animate({ opacity: 1 })

    }, function () {
        $(this).find(".grid-item-github").animate({ opacity: 0 })
        $(this).find(".grid-item-launch").animate({ opacity: 0 })
    }
    );
})