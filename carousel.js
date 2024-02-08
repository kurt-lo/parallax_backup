// Select the button element
const carouselBtn = document.querySelector('.carousel-btn');

// Define an array of image URLs for different states
const imageSets = [
    ["./assets/1.jpg", "./assets/2.jpg", "./assets/3.jpg"],
    ["./assets/4.jpg", "./assets/5.jpg", "./assets/6.jpg"],
    ["./assets/7.jpg", "./assets/8.jpg", "./assets/9.jpg"]
];

// Initialize a variable to keep track of the current state
let currentState = 0;

// Function to change images based on the current state
function changeImages() {
    // Get the image URLs for the current state
    const currentImages = imageSets[currentState];

    // Apply animation to each image
    gsap.to(".caro-img-2", { opacity: 0, transform: "translateY(250px)", duration: 0.5 });
    gsap.to(".caro-img-1", { opacity: 0, transform: "translateY(250px)", duration: 0.5 });
    gsap.to(".caro-img-3", { opacity: 0, transform: "translateY(250px)", duration: 0.5, onComplete: () => {
        // Change src attribute of each image
        document.querySelector('.caro-img-1').src = currentImages[0];
        document.querySelector('.caro-img-2').src = currentImages[1];
        document.querySelector('.caro-img-3').src = currentImages[2];

        // Apply animation to each image
        gsap.to(".caro-img-1", { opacity: 1, transform: "translateY(0)", duration: 1 });
        gsap.to(".caro-img-2", { opacity: 1, transform: "translateY(0)", duration: 1 });
        gsap.to(".caro-img-3", { opacity: 1, transform: "translateY(0)", duration: 1 });
    }});
}

// Add event listener for click event
carouselBtn.addEventListener('click', function() {
    // Increment the current state and reset to 0 if it exceeds the number of image sets
    currentState = (currentState + 1) % imageSets.length;
    
    // Change images with animation
    changeImages();
});

// Initial call to change images based on the initial state
changeImages();
