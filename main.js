$(function() {
   console.log("rabotaet");
    /*Fixed Header*/
    let header = $("#header"); /*. для класса*/
    let intro = $("#intro");
    /*let introH = intro.height(); считает без педдинга*/
    let introH = intro.innerHeight(); /* с педдиногм*/
    let scrollPos = $(window).scrollTop(); /*записывает значение верхней границы экрана при скроле*/

    chekScroll(scrollPos, introH);

    $(window).on("scroll load resize"/*при скролле, загрузки страницы, при повороте экрана на устройствах делает следующее*/, function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop(); /*делать так)*/

        console.log(scrollPos); /*показывает обновляемую скролл позицию*/

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


        console.log(blockOffset);

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














