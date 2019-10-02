// const slider = document.querySelector(".slide-container");
// const slides = document.querySelectorAll(".slide");
// const slide = slides[0];

// console.log(slider.clientWidth, slide.scrollWidth);

// let current = 1;


// const obj = {
//     maxScroll: 0,
//     sliderWidth: 0
// }



// obj.setMaxScrollNumber = () => {
//     obj.sliderWidth = slider.clientWidth;
//     obj.numSlides = slides.length;
//     // Obtaining the actual width of each slide as an arbitrary percentage( given by the slidePercentageWidth) of
//     obj.eachSlideWidth = slides[0].clientWidth;
//     // Obtaining the number of scrolls as a function of the width of eachSlide, the sliderWidth itself and the number of slides within the slider container
//     obj.maxScroll = Math.ceil(obj.numSlides / (obj.sliderWidth / obj.eachSlideWidth)) - 1;
//     console.log(obj.maxScroll);
// }

// obj.setMaxScrollNumber();



// window.onresize = function () {
//     obj.setMaxScrollNumber();
// }

// // Version 2
// setInterval(() => {
//     if (current > obj.maxScroll) {

//         slider.scrollTo(0, 0);
//         current = 1;
//         return;
//     }
//     slider.scrollTo(obj.sliderWidth * current, 0);
//     current = current + 1;
// }, 4000);



import ss from 'slider';
console.log(ss);