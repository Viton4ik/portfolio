
const introSection = document.querySelector('#intro')
const aboutSection = document.querySelector('#about')
const projectsSection = document.querySelector('#projects')
const contactSection = document.querySelector('#contact')

// scroll handle
window.addEventListener('scroll', function() {
    const aboutSectionTop = aboutSection.getBoundingClientRect().top
    const introSectionTop = introSection.getBoundingClientRect().top
    const projectsSectionTop = projectsSection.getBoundingClientRect().top
    const contactSectionTop = contactSection.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    // delay for scrolling
    if (aboutSectionTop < windowHeight) {
        setTimeout(() => {
            // aboutSection.style.opacity = '1'
            // aboutSection.style.transition = 'opacity 1s ease'
            aboutSection.style.animation = 'fadeIn 1s ease-in-out 0.6s forwards'
            // setTimeout(() => {
            //     // projectsSection.style.opacity = '1'
            //     // projectsSection.style.transition = 'opacity 1s ease'
            //     projectsSection.style.animation = 'fadeIn 1s ease-in-out 0.5s forwards'
            // }, 150)
        }, 100)

    }

    // if (introSectionTop < windowHeight) {
    //     setTimeout(() => {
    //         introSection.style.animation = 'fadeIn 1s ease-in-out 0.6s forwards'
    //     }, 50)


    if (projectsSectionTop < windowHeight) {
        setTimeout(() => {
            projectsSection.style.animation = 'fadeIn 1s ease-in-out 0.6s forwards'
    }, 100)

    }

    if (contactSectionTop < windowHeight) {
        setTimeout(() => {
            contactSection.style.animation = 'fadeIn 1s ease-in-out 0.6s forwards'
            // contactSection_.style.display = 'block'
        }, 100)
    }

})


// collapsible list
let coll = document.getElementsByClassName("about-collapsible")

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active")
        let content = this.nextElementSibling
        if (content.style.maxHeight){
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + "px"
        }
    })
}

//slides' buttons
function on(blockName, mySlidesNum, myDotsNum) {
    // get set of the slides for the specific block
    let mySlidesNumber = mySlidesNum
    let myDotsNumber = myDotsNum
    let slideIndex = 1
    showSlides(slideIndex, mySlidesNumber, myDotsNumber)
    //show the block
    document.getElementById(blockName).style.display = "block"
}

function off(blockName) {
    document.getElementById(blockName).style.display = "none"
    // to avoid slide bugging
    currentSlide(1, 'mySlides1', 'dot1')
}


//slider bar
let mySlidesNumber = 'mySlides1'
let myDotsNumber = 'dot1'
let slideIndex = 1
showSlides(slideIndex, mySlidesNumber, myDotsNumber)

// Next/previous controls
function plusSlides(n, mySlidesNumber, myDotsNumber) {
    showSlides(slideIndex += n, mySlidesNumber, myDotsNumber)
}

// Thumbnail image controls
function currentSlide(n, mySlidesNumber, myDotsNumber) {
    showSlides(slideIndex = n, mySlidesNumber, myDotsNumber)
}

function showSlides(n, mySlidesNumber, myDotsNumber) {
    let i;
    let slides = document.getElementsByClassName(`${mySlidesNumber}`)
    let dots = document.getElementsByClassName(`${myDotsNumber}`)
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active"
}


