/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("open");

    });


    navMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

        });

    });

}



/* =====================================================
   3D CARD EFFECT
===================================================== */

const tiltCards =
    document.querySelectorAll(".tilt-card");

tiltCards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        const rotateX =
            -((y - centerY) / centerY) * 5;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateZ(10px)`;

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";

    });

});



/* =====================================================
   IMPORTANT
   PROFILE IMAGE DOES NOT ROTATE
===================================================== */

/*
   There is intentionally NO tilt code
   for .profile-image.

   The profile photo stays completely stable.
*/



/* =====================================================
   PARTICLES
===================================================== */

const particleContainer =
    document.getElementById("particles");

if (particleContainer) {

    const particleCount = 70;

    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        const size =
            Math.random() * 3 + 1;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${Math.random() * 8 + 5}s`;

        particle.style.animationDelay =
            `${Math.random() * 5}s`;

        particleContainer.appendChild(
            particle
        );

    }

}



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    observer.observe(element);

});



/* =====================================================
   BACK TO TOP
===================================================== */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener("scroll", function () {

    let current =
        "home";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${current}`) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   MOUSE GLOW
===================================================== */

const mouseGlow =
    document.querySelector(".mouse-glow");

document.addEventListener("mousemove", function (event) {

    if (mouseGlow) {

        mouseGlow.style.left =
            `${event.clientX}px`;

        mouseGlow.style.top =
            `${event.clientY}px`;

    }

});



/* =====================================================
   FLOATING LABEL 3D EFFECT
===================================================== */

const profileScene =
    document.querySelector(".profile-scene");

const floatingLabels =
    document.querySelectorAll(".floating-label");


if (profileScene) {

    profileScene.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                profileScene.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const moveX =
                (x - centerX) / 35;

            const moveY =
                (y - centerY) / 35;


            floatingLabels.forEach(
                function (label, index) {

                    const amount =
                        (index % 3) + 1;

                    label.style.marginLeft =
                        `${moveX * amount}px`;

                    label.style.marginTop =
                        `${moveY * amount}px`;

                }
            );

        }
    );


    profileScene.addEventListener(
        "mouseleave",
        function () {

            floatingLabels.forEach(
                function (label) {

                    label.style.marginLeft =
                        "0px";

                    label.style.marginTop =
                        "0px";

                }
            );

        }
    );

}



/* =====================================================
   PREVENT BROKEN CV LINKS
===================================================== */

document.querySelectorAll(
    'a[href="resume.pdf"]'
).forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Opening resume.pdf"
        );

    });

});