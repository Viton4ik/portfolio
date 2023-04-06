

const introSection = document.querySelector('#intro')
const aboutSection = document.querySelector('#about')
const projectsSection = document.querySelector('#projects')

// scroll handle
window.addEventListener('scroll', function() {
    const aboutSectionTop = aboutSection.getBoundingClientRect().top
    // const projectsSectionTop = projectsSection.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    // delay for scrolling
    if (aboutSectionTop < windowHeight) {
        setTimeout(() => {
            // aboutSection.style.opacity = '1'
            // aboutSection.style.transition = 'opacity 1s ease'
            aboutSection.style.animation = 'fadeIn 1s ease-in-out 0.6s forwards'
            setTimeout(() => {
                // projectsSection.style.opacity = '1'
                // projectsSection.style.transition = 'opacity 1s ease'
                projectsSection.style.animation = 'fadeIn 1s ease-in-out 0.5s forwards'
            }, 400)
        }, 200)

    }

    // let scrollTop = window.scrollY
    // let introSectionOffsetTop = introSection.getBoundingClientRect().top
    // let aboutSectionOffsetTop = aboutSection.getBoundingClientRect().top
    // // let introSectionOffsetTop = introSection.offsetTop
    // // let aboutSectionOffsetTop = aboutSection.offsetTop
    // // var section3Top = section3.offsetTop
    // let introSectionOffsetHeight = introSection.offsetHeight
    // let aboutSectionOffsetHeight = aboutSection.offsetHeight
    // // var section3Height = section3.offsetHeight
    //
    // // if (scrollTop >= introSectionOffsetTop && scrollTop < introSectionOffsetTop + introSectionOffsetHeight) {
    //     if (introSectionOffsetTop < windowHeight) {
    //     aboutSection.style.opacity = '1'
    //     aboutSection.style.transition = 'opacity 1s ease'
    //     introSection.style.opacity = '0'
    //     // introSection.style.display = 'block'
    //     // aboutSection.style.display = 'none'
    //     // section3.style.display = 'none'
    // // } else if (scrollTop >= aboutSectionOffsetTop && scrollTop < aboutSectionOffsetTop + aboutSectionOffsetHeight) {
    //     } else if (aboutSectionOffsetTop < windowHeight) {
    //     introSection.style.opacity = '1'
    //     introSection.style.transition = 'opacity 1s ease'
    //     aboutSection.style.opacity = '0'
    //     // introSection.style.display = 'none'
    //     // aboutSection.style.display = 'block'
    //     // section3.style.display = 'none'
    // }
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


// // overlay
// function on() {
//     document.getElementById("overlay").style.display = "block"
//     // document.querySelector(".overlay").style.display = "block"
// }
//
// function off() {
//     document.getElementById("overlay").style.display = "none"
//     // document.querySelector(".overlay").style.display = "none"
// }

// var mySlidesNumber = 'mySlides1'
// var dotNumber = 'dot1'
// overlay
function on(blockName, mySlidesNum) {
    // get set of the slides for the specific block
    let mySlidesNumber = mySlidesNum
    let slideIndex = 1
    showSlides(slideIndex, mySlidesNumber)
    //show the block
    document.getElementById(blockName).style.display = "block"
}

function off(blockName) {
    document.getElementById(blockName).style.display = "none"
}


//slider bar
let mySlidesNumber = 'mySlides1'
let slideIndex = 1
showSlides(slideIndex, mySlidesNumber)

// Next/previous controls
function plusSlides(n, mySlidesNumber) {
    showSlides(slideIndex += n, mySlidesNumber)
}

// Thumbnail image controls
function currentSlide(n, mySlidesNumber, dotNumber) {
    showSlides(slideIndex = n, mySlidesNumber, dotNumber)
}

function showSlides(n, mySlidesNumber) {
    let i;
    let slides = document.getElementsByClassName(`${mySlidesNumber}`)
    let dots = document.getElementsByClassName(`dot`)
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


