$(document).ready(function () {
    var selectedvalue = "";

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });

    $('.carousel').carousel({
        interval: 2000,
    });

    // $('.carousel-control-prev').carousel('prev');
    // $('.carousel-control-next').carousel('next');

    var availableTags = [
        "Asp.net MVC",
        "C",
        "C++",
        "COBOL",
        "Java",
        "JavaScript",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#txtSearch").autocomplete({
        source: availableTags,
        autofill: true,
        select: function (e, ui) {
            selectedvalue = ui.item.label;
            $('.modal').modal('show');
            $('#lblselectedValue').text(selectedvalue);
        }
    });

    $('#btnSearch').on('click', function () {
        alert("you have searched for " + selectedvalue);
        $('.modal').modal('show');
        $('#lblselectedValue').text(selectedvalue);
    });

    $('.rowCard').on('click', function () {
        location.href = "/Home/Details";
    })

    var bgimg = ["/images/img1.jpeg", "/images/img2.jpg", "/images/img3.jpg"];
    var len = bgimg.length;
    var imgCnt = 0;
    doScroll(imgCnt);
    setInterval(function () {
        doScroll(imgCnt);
        imgCnt++;
        if (imgCnt >= len) { imgCnt = 0; }
    }, 2000);


    function doScroll(i) {
        $('.bgImg').css("background-image", "url(" + bgimg[i] + ")");
    }

    $('#screen2').hide();
    $('#screen3').hide();

    $('#btnNextScreen1').click(function () {
        $('#screen1').hide();
        $('#screen2').show();
    });

    $('#btnNextScreen2').on('click', function () {
        $('#screen2').hide();
        $('#screen3').show();
    });

    $('#btnNextScreen3').on('click', function () {
        alert("You will recieve information via SMS shortly!, Thank you");
        location.href = "list.html";
    });

    $('#btnBackScreen2').on('click', function () {
        $('#screen2').hide();
        $('#screen1').show();
    });

    $('#btnBackScreen3').on('click', function () {
        $('#screen3').hide();
        $('#screen2').show();
    });

    // window.onhashchange = function() {
    //   this.window.pageYOffset = this.window.pageYOffset + 250;
    // }

    // scroll function

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    window.setTimeout(function () {
        $('#preloader').hide();
    }, 1500);
});
