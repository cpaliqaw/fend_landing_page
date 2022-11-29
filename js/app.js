/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Adapted from https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
        (rect.top >= 0
            || (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)))
        &&
        (rect.left >= 0
            || (rect.right <= (window.innerWidth || document.documentElement.clientWidth)))
    )
}

function distanceFromTop(element) {
    return Math.abs(element.getBoundingClientRect().top)
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () => {
    console.log("Build nav")
    const navbarList = document.querySelector("#navbar__list")
    console.log(navbarList)
    const sections = document.querySelectorAll("section")
    const liArray = []
    for (const section of sections) {
        const dataNav = section.getAttribute("data-nav")
        const li = document.createElement("li")
        liArray.push(li)
        const a = document.createElement("a")
        li.appendChild(a)
        a.setAttribute("class", "menu__link")
        a.setAttribute("data-nav", dataNav)
        a.innerText = dataNav
        a.addEventListener("click", scrollToSection)
    }
    navbarList.replaceChildren(...liArray)
}

// Add class 'active' to section when near top of viewport
const addActiveToSection = () => {
    const sections = document.querySelectorAll("section")
    console.log(`There are ${sections.length} sections`)

    let activeSection =
        document.querySelector["section.active"] 

    const visibleSections = [...sections].filter ( (section) => {
        return isInViewport(section)
    })

    if (visibleSections.length === 1) {
        activeSection = visibleSections[0]
    } else if (visibleSections.length > 1) {
        activeSection = visibleSections[0]
        for (const visibleSection of visibleSections) {
            if (distanceFromTop(visibleSection) < distanceFromTop(activeSection)) {
                activeSection = visibleSection
            }
        }
    } else {
        console.log("No visible sections")
    }

    for (section of sections) {
        if (section === activeSection) {
            console.log("Found active section")
            section.classList.add("active")
        } else {
            console.log("Found inactive section")
            section.classList.remove("active")
        }
    }
}

// Scroll to anchor ID using scrollTO event

const scrollToSection = (event) => {
    event.preventDefault()
    console.log("scrollToSection")
    const dataNav = event.target.getAttribute("data-nav")
    const query = `section[data-nav="${dataNav}"]`
    console.log(query)
    const section = document.querySelector(query)
    section.scrollIntoView({behavior: "smooth"})
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav()
document.addEventListener("scroll", addActiveToSection)
// Scroll to section on link click

// Set sections as active


