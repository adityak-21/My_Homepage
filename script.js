//**** Preloader ******
// const preloader = document.getElementById('preloader'contactfeeed)
// window.onload = () => {
//     setTimeout(() => {
//         preloader.style.display = "none";
//         main_content.style.display = "block";
//         body.style.backgroundColor = "white";
//     }, 3000)
// }

const main_content = document.getElementById('main_content')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
const feedback = document.getElementById('feedback')
var body = document.getElementsByTagName("BODY")[0];

const age = document.getElementById('age');
const current_year = new Date().getFullYear()
age.innerText = current_year - 2002;
/* scrollspy navabr */
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
})


/*contact_form submission */


function contact_form() {

    console.log("send message clicked");
    contact.style.display = "none";
    feedback.style.display = "block";
    setTimeout(() => {
        contact.style.display = "block";
        feedback.style.display = "none";
    }, 3000)
}

/**
 * Back to top button
 */

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}