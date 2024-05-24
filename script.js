// function sum(x,y) {
//     return x + y;
// }

// console.log(2,3);

// let menu_item = document.querySelectorAll(".navigation");

document.querySelector(".header-nav-toggle").addEventListener('click',function(e) {
    e.preventDefault();
    let toggle = document.querySelectorAll(".content-header > nav ul" );
    for(let i = 0; i<toggle.length; i++){
        toggle[i].classList.toggle("navbar");
    }
});