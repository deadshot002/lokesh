// document.querySelector('.close').style.display = 'none';
// document.querySelector('.hamburger').addEventListener("click", () => {
//     document.querySelector('.topbar').classList.toggle('.topbargo');
// })

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

// if (document.getElementById(window).width <= 640) { 
//     function scrollWin(k, y) {
//         window.scrollBy(k, y-100);
//     }        
// }
// switch (x) {
//     case x.matches:

//         break;

//     default:
         function scrollWin(k, y) {
            window.scrollBy(k, y);
            document.getElementById("menu-bar").classList.toggle("change");
            document.getElementById("nav").classList.toggle("change");
            document.getElementById("menu-bg").classList.toggle("change-bg");
        }
//         break;
// }

// document.querySelector("#link1").addEventListener("click", ()=> {
//     document.querySelector('html,body').animate({
//         scrollTop: document.querySelector(".section-1").offset().top},
//         'slow');
// });