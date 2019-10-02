// jshint esversion: 6

class slickSlider {

    /**
     * The slide constructor
     */
    constructor(parent, {
        interval
    }) {
        this.slider = document.querySelector(`${parent} .slick-slider`);
        this.slides = document.querySelectorAll(`${parent} .slick-slider .slick-slide`);
        this.current = 1;
        this.maxScroll = 0;
        this.sliderWidth = 0;
        this.numSlides = this.slides.length;
        this.setMaxScrollNumber.bind(this);

        
        console.log(this.slider, parent);

        // Set the interval and fall back to 6 seconds
        this.interval = interval || 6000;

        // Set the MaxScrollNumber
        this.setMaxScrollNumber();

        this.init();
    }


    setMaxScrollNumber() {
        this.sliderWidth = this.slider.clientWidth;
        // Obtaining the actual width of each slide (as an arbitrary percentage of the slider container's width)
        this.eachSlideWidth = this.slides[0].clientWidth;
        // Obtaining the number of scrolls as a function of the width of eachSlide, the sliderWidth itself and the number of slides within the slider container
        this.maxScroll = Math.ceil(this.numSlides / (this.sliderWidth / this.eachSlideWidth)) - 1;
        console.log(this.maxScroll);
    }

    updateMaxScrollNumberOnWindowResize() {
        window.addEventListener("resize", () => {
            this.setMaxScrollNumber();
        });
    }

    init() {
        // Property Check
        console.log("hi");
        if (this.slider.scrollTo) {
            setInterval(() => {
                if (this.current > this.maxScroll) {

                    this.slider.scrollTo(0, 0);
                    this.current = 1;
                    return;
                }
                this.slider.scrollTo(this.sliderWidth * this.current, 0);
                this.current = this.current + 1;
            }, this.interval);
        }

        this.updateMaxScrollNumberOnWindowResize();
    }

}

export default slickSlider;
