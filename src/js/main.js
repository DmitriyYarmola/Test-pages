$(window).ready(function() {



    /*Scroll*/

    let header = $("#header");
    let intro = $("#intro");
    let navBar = $("#navBar");
    let button = $("#button");
    let introH ;
    let headerH ;
    let scrollPos = $(window).scrollTop()


    $(window).on("scroll load resize", function() {

        introH = intro.innerHeight();
        headerH = header.innerHeight();

        scrollPos = $(this).scrollTop();

        

        if ( scrollPos > headerH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
            
        }

        

        
    });

    /*Burger animatet*/

    let burger = $("#burger");

    burger.on("click", function() {
        $(this).toggleClass('menu-icon_active');
    });

    /*Burger*/

    // let navBar = $("#navBar");
    // let button = $("#button");

    burger.on("click", function(e) {
        e.preventDefault();
        
        navBar.toggleClass('navbar-nav_actrive');
    });

  


    /*Scroll Month*/

    $("[data-scroll]").on("click", function(e){
        e.preventDefault();

        let blockId = $(this).data('scroll');

        let elementOffSet =  $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffSet - 22
        }, 3000);

        console.log(elementOffSet);
    });

});