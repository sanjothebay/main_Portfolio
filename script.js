/*===== MENU SHOW =====*/ 
const showMenu = ( toggleId, navId) => {
    const toggle = $("#toggleId");
    nav = $("navId")
    
    if (togge && nav) {
        toggle.on("click", () =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   