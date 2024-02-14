// gsap.registerPlugin(ScrollTrigger);

// // _________FIRST GSAP SECTION___________
// // Create a GSAP 1st timeline
// var firstSection = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".container",
//         start: "top 100px",
//         toggleActions: "restart none none reverse",
//         markers: true
//     }
// });

// firstSection.fromTo(".header", {
//     scaleY: 0
// }, {
//     scaleY: 1,
//     duration: 1.5,
//     ease: "power1.inOut",
//     delay: 0,
//     transformOrigin: "0% 100%",
// })
//     .fromTo(".background", {
//         rotation: 5,
//     }, {
//         rotation: 0,
//         duration: 2,
//         ease: "power1.inOut",
//         delay: 0,
//         offset: 0
//     }, 0)
//     .fromTo(".left-mountain", {
//         y: 0
//     }, {
//         y: 150,
//         duration: 2,
//         ease: "power1.inOut",
//         delay: 0,
//         offset: 0
//     }, 0)
//     .fromTo(".middle-mountain", {
//         y: -150
//     }, {
//         y: 150,
//         duration: 2,
//         ease: "power1.inOut",
//         delay: 0,
//         offset: 0
//     }, 0)
//     .fromTo(".balloon", {
//         y: 0
//     }, {
//         y: 150,
//         duration: 2,
//         ease: "power1.inOut",
//         delay: 0,
//         offset: 0
//     }, 0)

// var firstSectionReverseAnimation = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".container",
//         start: "bottom bottom",
//         toggleActions: "restart none none reverse",
//         markers: true
//     }
// });

// firstSectionReverseAnimation.fromTo(".header", {
//     scaleY: 1
// }, {
//     scaleY: 0,
//     duration: 1.5,
//     ease: "power1.inOut",
//     delay: 0,
//     transformOrigin: "0% 100%"
// }, 0)
//     .fromTo(".background", {
//         rotation: 0
//     }, {
//         rotation: 5,
//         duration: 2,
//         ease: "power1.inOut",
//         delay: 0,
//         offset: 0
//     }, 0)
//     .fromTo(".left-mountain", {
//         y: 150
//     }, {
//         y: -150,
//         duration: 2,
//         ease: "power1.inOut",
//         delay: 0,
//         offset: 0
//     }, 0)
//     .fromTo(".middle-mountain", {
//         y: 150
//     }, {
//         y: -150,
//         duration: 2,
//         ease: "power1.inOut",
//         delay: 0,
//         offset: 0
//     }, 0)
//     .fromTo(".balloon", {
//         y: 150
//     }, {
//         y: 0,
//         duration: 2,
//         ease: "power1.inOut",
//         delay: 0,
//         offset: 0
//     }, 0);

// // _________SECOND GSAP SECTION___________
// // _________FOR SECOND SECTION__________
// var secondTimeLine = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".container",
//         start: "140px 100px",
//         toggleActions: "restart none none reverse",
//         markers: true
//     }
// });

// secondTimeLine.fromTo(".left-mountain", {
//     y: -150
// }, {
//     y: -300,
//     duration: 1,
//     ease: "power1.inOut",
//     delay: 0,
//     offset: 0
// }, 0)
//     .fromTo(".middle-mountain", {
//         y: -150
//     }, {
//         y: -300,
//         duration: 1,
//         ease: "power1.inOut",
//         delay: 0,
//         offset: 0
//     }, 0)
//     .fromTo(".horizon-text", {
//         y: 0,
//         scaleY: 0
//     }, {
//         y: -300,
//         scaleY: 1,
//         duration: 1,
//         ease: "power1.inOut",
//         delay: 0,
//         transformOrigin: "0% 100%",
//     }, 0)