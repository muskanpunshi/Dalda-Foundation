$(document).ready(function () {
    const navbarresponsive = document.querySelector(".nav");
    const menuBtn = document.querySelector(".menu-icon");
    var navbar = document.getElementById("nav");
    var sticky = navbar.offsetTop;
    let show = Boolean(true);



    menuBtn.onclick = () => {
        show = !show
        if (show) {
            navbarresponsive.classList.add("show");
            menuBtn.classList.add("toggle");
        }

        else if (!show) {
            navbarresponsive.classList.remove("show");
            menuBtn.classList.remove("toggle");
        }
    }

    window.onscroll = function () {
        stickyTopNav();
    };
    document.querySelectorAll(".nav-item").forEach((ele) =>
        ele.addEventListener("click", function (event) {
            event.preventDefault();
            document
                .querySelectorAll(".nav-item")
                .forEach((ele) => ele.classList.remove("active"));
            this.classList.add("active")
        })
    );



    function stickyTopNav() {
        const mql = window.matchMedia('(max-width: 768px)');
        let mobileView = mql.matches;
      
        if (mobileView) {
            navbar.classList.remove("sticky");

        } else {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            }

            else {
                navbar.classList.remove("sticky");
            }
        }

    }
    const videos = document.querySelectorAll("video")
    videos.forEach(video => {
        video.addEventListener("mouseover", function () {
            this.play();
        })

        video.addEventListener("mouseout", function () {
            this.pause()
        })

    })
    $('.achieverVideo').owlCarousel({
        loop: true,
        items: 3,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                stagePadding: 30,
            },
            300: {
                items: 1,
                nav: false,
                stagePadding: 10,
            },
            360: {
                items: 1,
                nav: false,
                stagePadding: 20,
            },
            390: {
                items: 1,
                stagePadding: 35,
                nav: false
            },
            768: {
                items: 2,
                nav: false,
                stagePadding: 35,
            },
            1100: {
                items: 2.5,
                nav: false,
            },
            1200: {
                items: 3,
                margin: 10,
            },
        }
    });

    $('.universitylogo').owlCarousel({
        items: 6,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.5,

            },
            330: {
                items: 2
            },
            370: {
                items: 2.5,

            },
            700: {
                items: 3,

            },
            1000: {
                items: 4,
            },
            1200: {
                items: 6
            }
        }
    });
})

