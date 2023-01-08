const arrowLeftBtns = document.querySelectorAll(".left-Arrow");
 const arrowRightBtns = document.querySelectorAll(".right-Arrow");
  const testimonialBox =document.querySelector(".testimonial-box")
   const testimonials =document.querySelector(".testimonial")

//    Testimonial carousel 

arrowLeftBtns.forEach ((arrowLeft) =>  {
    arrowLeft.addEventListener("click", (e) => {
        testimonialBox.scrollLeft -= 375;
    })
})

arrowRightBtns.forEach ((arrowRight) =>  {
    arrowRight.addEventListener("click", (e) => {
        testimonialBox.scrollLeft += 375;
    })
})

const maxScrollLeft = testimonialBox.scrollWidth - testimonialBox.clientWidth

function autoplay() {
    if (testimonialBox.scrollLeft > (maxScrollLeft - 1) ) {
        testimonialBox.scrollLeft -= maxScrollLeft;
    }
    else {
        testimonialBox.scrollLeft += 1;
    }
}

let play = setInterval(autoplay, 50);

for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].addEventListener("mouseover", () => {
        clearInterval(play)
    })
    
    testimonials[i].addEventListener("mouseout", () => {
        let play = setInterval(autoplay, 50);
    })
}
