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
const sections = document.getElementsByTagName("section");
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
const buildNav= function()
{
	const docFrag = document.createDocumentFragment();
	let i=1;
	for (let section of sections)
	{
		const newLi = document.createElement('li');
        newLi.textContent = section.getAttribute("data-nav");
		newLi.setAttribute("id", `${i}`);
		newLi.setAttribute("data-section", `${section.getAttribute("id")}`);
		docFrag.appendChild(newLi);
		i++;
	}
	document.getElementById("navbar__list").appendChild(docFrag);
}
// Scroll to anchor ID using scrollTO event
const scrollToSection = function(event)
{
	const section= document.getElementById(`${event.target.getAttribute("data-section")}`);
	section.scrollIntoView({behavior: "smooth"});
	event.preventDefault();
}


// Add class 'active' to section when near top of viewport

const atViewPoint= function()
{
	let i=1;
	for (let section of sections)
	{
		const pos = section.getBoundingClientRect();
		if(pos.top >= 0 && pos.bottom <= window.innerHeight*1.55) {
			document.getElementById(`${i}`).classList.add("your-active-section");
		}
		else{
			document.getElementById(`${i}`).classList.remove("your-active-section");
		}
		if(i===4 && pos.bottom<window.innerHeight){
			document.getElementById(`${i}`).classList.add("your-active-section");
		}
			
		i++;
	}
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener("DOMContentLoaded", buildNav);
// Scroll to section on link click
document.addEventListener("click", scrollToSection)


// Set sections as active
window.addEventListener("scroll", atViewPoint);

