var theNavigation = document.getElementById("nav")
var theNavigationContainer = document.getElementById("nav-container")
var stuck = "is-fixed-top";
var theHeader = document.getElementById("hero").offsetHeight

// window.onscroll = function() {myFunction()};

function myFunction() {
  if ( document.documentElement.scrollTop > theHeader) {
    theNavigation.classList.add(stuck);
    theNavigationContainer.classList.add(stuck);
  } else {
    theNavigation.classList.remove(stuck);
    theNavigationContainer.classList.remove(stuck);
  }
}
// function myFunction() {
//   if ( document.documentElement.scrollTop > 50) {
//     document.getElementById("nav-logo").className = "minimize";
//     document.getElementById("logo-container").className = "minimize";
//     document.getElementById("navbarBurger").classList.add("minimize");
//   } else {
//     document.getElementById("nav-logo").className = "";
//     document.getElementById("logo-container").className = "";
//     document.getElementById("navbarBurger").classList.remove("minimize");
//   }
// }

document.getElementById("navbarBurger").addEventListener('click', () => {
    document.getElementById("navbar-menu").classList.toggle("is-active");
    document.getElementById("navbarBurger").classList.toggle("is-active");
})


