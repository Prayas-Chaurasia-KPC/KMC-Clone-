// const next = document.querySelector('.slide-img-next') ;
// const back = document.querySelector('.slide-img-back') ;
// const slider = document.querySelector('.slide-slider');
// const images = document.querySelectorAll('.slider-images') ;
// console.log(slider);

// let slideNumber = 1 ;
// let length = images.length ;



// const nextSlideFnc = ()=>{
//     slider.style.transform = `translateX(-${slideNumber*100}%)` ;
//     // slider.style.transition = 'all 1s ease-in-out' ; 
//     slideNumber++ ;
// }

// const firstSlide = ()=>{
//     slider.style.transform = `translateX(0%)` ;
//     slideNumber = 1 ;
// }
// next.addEventListener('click',()=>{
//   console.log("Next btn cliked") ;
//   slideNumber < length ? nextSlideFnc() :    firstSlide() ;
  
// });


// const prevSlide = ()=>{
//     slider.style.transform = `translateX(-${(slideNumber - 2)*100}%)` ;
//     slideNumber-- ;
// }

// const lastSlide = ()=>{
//     slider.style.transform = `translateX(-${(-lenght)*100}%)` ;
//     slideNumber = length ;
// }

// back.addEventListener('click',()=>{
//   console.log("Back btn cliked") ;
//   slideNumber > 1 ? prevSlide() : lastSlide() ;
// });



const next = document.querySelector('.slide-img-next');
const back = document.querySelector('.slide-img-back');
const slider = document.querySelector('.slide-slider');
const images = document.querySelectorAll('.slider-images');
console.log(slider);

let slideNumber = 1;
const length = images.length;

// Clone the first and last slide
const firstSlideClone = images[0].cloneNode(true);
const lastSlideClone = images[length - 1].cloneNode(true);

slider.appendChild(firstSlideClone);
slider.insertBefore(lastSlideClone, images[1]);

const totalSlides = length + 2; // Including cloned slides

const nextSlideFnc = () => {
    if (slideNumber >= totalSlides - 1) {
        slider.style.transition = "transform 0.5s ease-in-out";
        slideNumber++;
        slider.style.transform = `translateX(-${slideNumber * 100}%)`;

        // After transition, jump to the real first slide
        setTimeout(() => {
            slider.style.transition = "none";
            slideNumber = 1;
            slider.style.transform = `translateX(-${slideNumber * 100}%)`;
        }, 500);
    } else {
        slider.style.transition = "transform 0.5s ease-in-out";
        slideNumber++;
        slider.style.transform = `translateX(-${slideNumber * 100}%)`;
    }
};

const prevSlide = () => {
    if (slideNumber <= 1) {
        slider.style.transition = "transform 0.5s ease-in-out";
        slideNumber--;
        slider.style.transform = `translateX(-${slideNumber * 100}%)`;

        // After transition, jump to the real last slide
        setTimeout(() => {
            slider.style.transition = "none";
            slideNumber = totalSlides - 2;
            slider.style.transform = `translateX(-${slideNumber * 100}%)`;
        }, 500);
    } else {
        slider.style.transition = "transform 0.5s ease-in-out";
        slideNumber--;
        slider.style.transform = `translateX(-${slideNumber * 100}%)`;
    }
};

next.addEventListener('click', () => {
    console.log("Next btn clicked");
    nextSlideFnc();
});

back.addEventListener('click', () => {
    console.log("Back btn clicked");
    prevSlide();
});
