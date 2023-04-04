

const introSection = document.querySelector('#intro')
const aboutSection = document.querySelector('#about')
const projectsSection = document.querySelector('#projects')


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

//overlay
// function on() {
//     document.getElementById("overlay").style.display = "block";
// }
//
// function off() {
//     document.getElementById("overlay").style.display = "none";
// }
//
