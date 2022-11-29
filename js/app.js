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

const scrollToSection = (event) => {
    event.preventDefault()
    console.log("scrollToSection")
    const dataNav = event.target.getAttribute("data-nav")
    const query = `section[data-nav="${dataNav}"]`
    console.log(query)
    const section = document.querySelector(query)
    section.scrollIntoView({behavior: "smooth"})
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav()
// Scroll to section on link click

// Set sections as active


