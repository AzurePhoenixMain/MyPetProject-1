$(function() {
   console.log("rabotaet");
    let header = $("#header"); 
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    chekScroll(scrollPos, introH);

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop(); 
        chekScroll(scrollPos, introH);
    });

    function chekScroll() {

        if ( scrollPos > introH) {
            header.addClass("fixedHeader");
        } else {
            header.removeClass("fixedHeader");
        }

    }


    /*Smooth scroll*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let bloclkID = $(this).data('scroll');
        let blockOffset = $(bloclkID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: blockOffset -70
        }, 700);
    });


    /*navToggle*/
    let nav = $("#nav")
    let navToggle = $("#navToggle")

    $("#navToggle").on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    })


    /*Rewiews = https://kenwheeler.github.io/slick/*/
    let Slider = $("#rewiewsSlider");

    $("#rewiewsSlider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});