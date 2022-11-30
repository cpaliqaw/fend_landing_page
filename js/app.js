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
function isInViewport(element) {
    const r = element.getBoundingClientRect();
    return (r.top >= 0) || (r.bottom <= (window.innerHeight));
}

function distanceFromTop(section) {
    if (!section) {
        console.error("Called distanceFromTop() on an undefined section.");
        return;
    }
    const sectionH2 = section.firstElementChild.firstElementChild;
    if (!sectionH2 || sectionH2.tagName !== "H2") {
        console.error("Couldn't locate a section's heading.");
        return;
    }
    return sectionH2.getBoundingClientRect().top;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () => {
    console.log("Build nav");
    const navbarList = document.querySelector("#navbar__list");
    console.log(navbarList);
    const sections = document.querySelectorAll("section");
    const liArray = [];
    for (const section of sections) {
        const dataNav = section.getAttribute("data-nav");
        const li = document.createElement("li");
        liArray.push(li);
        const a = document.createElement("a");
        li.appendChild(a);
        a.setAttribute("class", "menu__link");
        a.setAttribute("data-nav", dataNav);
        a.innerText = dataNav;
        a.addEventListener("click", scrollToSection);
    }
    navbarList.replaceChildren(...liArray);
}

// Add class 'active' to section when near top of viewport
const addActiveToSection = () => {
    const sections = document.querySelectorAll("section");
    console.log(`There are ${sections.length} sections`);

    let activeSection =
        document.querySelector["section.active"];
    let activeSectionDistanceFromTheTop =
        distanceFromTop(activeSection);
    let activeSectionDistanceFromTopIsNegative = activeSectionDistanceFromTheTop < 0;

    const visibleSections = [...sections].filter ( (section) => {
        return isInViewport(section);
    })

    if (visibleSections.length === 1) {
        activeSection = visibleSections[0];
        activeSectionDistanceFromTheTop = distanceFromTop(activeSection);
        activeSectionDistanceFromTopIsNegative = activeSectionDistanceFromTheTop < 0;
    } else if (visibleSections.length > 1) {
        activeSection = visibleSections[0];
        activeSectionDistanceFromTheTop =
            distanceFromTop(activeSection);
        activeSectionDistanceFromTopIsNegative = activeSectionDistanceFromTheTop < 0;
        for (const visibleSection of visibleSections) {
            const currentDistanceFromTop = distanceFromTop(visibleSection);
            const currentDistanceFromTopIsNegative = currentDistanceFromTop < 0;
            let isSwitchActive = false;
            if (!currentDistanceFromTopIsNegative && activeSectionDistanceFromTopIsNegative) {
                isSwitchActive = true;
            } else if ((currentDistanceFromTopIsNegative === activeSectionDistanceFromTopIsNegative) &&
                       (Math.abs(currentDistanceFromTop) < Math.abs(activeSectionDistanceFromTheTop))) {
                isSwitchActive = true;
            }
            if (isSwitchActive === true) {
                activeSection = visibleSection;
                activeSectionDistanceFromTheTop = distanceFromTop(activeSection);
                activeSectionDistanceFromTopIsNegative = activeSectionDistanceFromTheTop < 0;
            }
        }
    } else {
        console.log("No visible sections");
    }

    // If no sections visible,
    // keep currently active section,
    // but complain, since this shouldn't currently be possible
    if (visibleSections.length >= 1) {
        for (section of sections) {
            if (section === activeSection) {
                console.log("Found active section");
                section.classList.add("active");
            } else {
                console.log("Found inactive section");
                section.classList.remove("active");
            }
        }
        const activeDataNav = activeSection.getAttribute("data-nav");

        const navAnchors = document.querySelectorAll(".menu__link");
        if (navAnchors.length === 0) {
            console.error("Couldn't find any menu__links.");
        }
        for (navAnchor of navAnchors) {
            if (navAnchor.getAttribute("data-nav") === activeDataNav) {
                console.log("Found active anchor");
                navAnchor.classList.add("active");
            } else {
                console.log("Found inactive anchor");
                navAnchor.classList.remove("active");
            }
        }

        const anchorWithDataNav = document.querySelector(`a[data-nav=${activeDataNav}]`);
        anchorWithDataNav.setAttribute;
    } else {
        console.log("No section of the page is visible");
    }
}

// Scroll to anchor ID using scrollTO event

const scrollToSection = (event) => {
    event.preventDefault();
    console.log("scrollToSection");
    const dataNav = event.target.getAttribute("data-nav");
    const query = `section[data-nav="${dataNav}"]`;
    console.log(query);
    const section = document.querySelector(query);
    section.scrollIntoView({behavior: "smooth"});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
document.addEventListener("scroll", addActiveToSection);
// Scroll to section on link click

// Set sections as active


