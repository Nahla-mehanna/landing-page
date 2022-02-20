
//Define Global Variables
const sections = document.querySelectorAll("section");
const ulList = document.getElementById("navbar__list");
//fragment for performance.
const fragment = document.createDocumentFragment();
//End Global Variables

//I used one main function with for of loop to do almost everything to make my code less complicated.
//My idea was to make all the project requirements with less complicated easy to understand small lines of code.
//inside the mainFunction the for of loop to create for every section li lists and adding to each li (a element )
//and for every a element adding the menu-link class, the href and textContent
//Also I added fragment for performance.
//starting the mainFunction
function mainFunction(){
  for(const section of sections){
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.classList.add("menu__link");
    anchor.href = `#${section.id}`;
    anchor.textContent = section.dataset.nav;
    anchor.addEventListener("click", e =>{
    e.preventDefault();
    section.scrollIntoView({behavior:"smooth"});
    });
    li.appendChild(anchor);
    fragment.appendChild(li);
  };
  ulList.appendChild(fragment);
};
//Ending the mainFunction

//calling the mainFunction
mainFunction();

//starting helper function to add the your-active-class to
//the section if it is in the view port
window.addEventListener( 'scroll', ()=>{
for(const section of sections){
if (section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top <= 300){
  // if it's active add the class
  section.classList.add("your-active-class");
} else {
  // if it's not active remove the class
  section.classList.remove("your-active-class");
}
}
});
//ending of the helper Function


//button to scroll to the top of the page
const goUpButton = document.getElementById("go-up-button");
window.onscroll = function () {
  if (window.pageYOffset >= 400) {
    goUpButton.style.display = "block";
  }else {
    goUpButton.style.display = "none";
  }
};

goUpButton.onclick = function () {
  window.scrollTo(0, 0);
};
