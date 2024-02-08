gsap.registerPlugin(ScrollTrigger);

// _________FIRST GSAP SECTION___________
// Create a GSAP 1st timeline
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container", // Trigger when the .header element enters the viewport
        start: "0 100px", // Start position for the 1st timeline
        // start: "120px 100px",
        markers: true // Add markers for debugging
    }
});

// Add animations to the timeline for each class
tl.fromTo(".header", {
    scaleY: 0 // Starting state of scaleY
}, {
    scaleY: 1, // Ending state of scaleY
    duration: 1, // Animation duration in seconds
    ease: "power1.inOut", // Easing function
    delay: 0, // Delay before animation starts in seconds
    transformOrigin: "0% 100%",
})
    .fromTo(".left-mountain", {
        y: 0 // Starting state of translateY
    }, {
        y: 200,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0) // Set a 0-second delay to synchronize with the header animation
    .fromTo(".middle-mountain", {
        y: 0
    }, {
        y: 200,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .fromTo(".background", {
        rotation: 5,
    }, {
        rotation: 0,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0);

// _________SECOND GSAP SECTION___________
// Create a GSAP 2nd timeline
var secondTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "140px 100px",
        markers: true
    }
});

secondTimeLine.to(".header", {
    scaleY: 0,
    duration: 1,
    ease: "power1.inOut",
    delay: 0,
})
    .fromTo(".left-mountain", {
        y: 200
    }, {
        y: -220,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .fromTo(".middle-mountain", {
        y: 200
    }, {
        y: -20,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .fromTo(".right-mountain", {
        y: 200
    }, {
        y: 200,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .fromTo(".horizon-text", {
        y: 600,
        scaleY: 0
    }, {
        y: 0,
        scaleY: 1,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        transformOrigin: "0% 100%",
    }, 0)
    .fromTo(".balloon", {
        y: 0,
        scale: 1
    }, {
        y: -200,
        scale: 1.2, // Ending scale (1.5 times bigger)
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .fromTo(".cloud-left", {
        y: 700,
    }, {
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .fromTo(".cloud-right", {
        y: 700,
    }, {
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)

// _________THIRD GSAP SECTION___________
// Create a GSAP 3rd timeline
var mountainTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "400px 100px",
        markers: true
    }
});

var cloudTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "500px 100px",
        markers: true
    }
});

cloudTimeLine.to(".cloud-right", {
    y: -370,
    duration: 1,
    ease: "power1.inOut",
    delay: 0,
    offset: 0
})
    .to(".cloud-left", {
        y: -370,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .to(".nav-links", {
        color: "black",
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .to(".logo", {
        color: "black",
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .to(".bi-search", {
        fill: "black",
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .fromTo(".the-event", {
        opacity: 0,
        y: 500
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)

var theEventTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "500px 100px",
        toggleActions: "play none none reverse", // Play the animation when entering, reverse it when leaving
        markers: true
    }
});

theEventTimeline.fromTo(".the-event", {
    opacity: 0,
    y: 500
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1.inOut",
    delay: 0,
    offset: 0
}, 0)

mountainTimeLine.to(".left-mountain", {
    y: -370,
    duration: 1,
    ease: "power1.inOut",
    delay: 0,
    offset: 0
})
    .to(".middle-mountain", {
        y: -370,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .to(".right-mountain", {
        y: -370,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)
    .to(".horizon-text", {
        y: -370,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)

// _________FOURTH GSAP SECTION___________
// Create a GSAP 4th timeline
var theEventTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "1050px 100px",
        toggleActions: "play none none reverse",
        markers: true
    }
});

theEventTimeLine.to(".the-event", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
    delay: 0,
    offset: 0
})

var carouselTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "1550px 100px",
        markers: true
    }
});

carouselTimeLine.fromTo(".carousel-bg", {
    y: 150,
}, {
    y: 0,
    duration: 1,
    ease: "power1.inOut",
    delay: 0,
    offset: 0
})

// _________FIFTH GSAP SECTION___________
// Create a GSAP 5th timeline
var carouselReverseTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "2200px 100px",
        toggleActions: "play none none reverse",
        markers: true
    }
});

carouselReverseTimeLine.to(".carousel-section", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
    delay: 0,
    offset: 0
})

var lastTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "2300px 100px",
        toggleActions: "play none none reverse",
        markers: true
    }
});

lastTimeLine.fromTo(".hello", {
    scaleY: 0
}, {
    scaleY: 1,
    duration: 1,
    ease: "power1.inOut",
    delay: 0,
    transformOrigin: "0% 100%",
})
    .fromTo(".last-section-p", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
        transformOrigin: "0% 100%",
    }, 0)
    .fromTo(".last-image", {
        y: 200,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        transformOrigin: "0% 100%",
    }, 0)
    .fromTo(".notified", {
        x: 200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
        transformOrigin: "0% 100%",
    }, 0)
    .fromTo(".all", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2.5,
        ease: "power1.inOut",
        delay: 0,
        transformOrigin: "0% 100%",
    }, 0)