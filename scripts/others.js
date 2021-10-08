var toggler = document.getElementById('mytoggler');
var body = document.getElementById('body');
var mynavlinks = document.querySelectorAll('.mynavlinks');
var linkContainer = document.getElementById('linkContainer');
var fancyTxt = document.getElementById('fancyTxt');

mynavlinks.forEach(element => {
    element.addEventListener('click', () => {
        if (linkContainer.classList.contains('show') && window.innerWidth <= '651') {
            console.log('here', linkContainer.style);
            linkContainer.classList.toggle('show');
        }
    });
});

toggler.addEventListener('click', () => {
    linkContainer.classList.toggle('show');
})

window.addEventListener('load', () => {
    fancyTxt.classList.add('show-fancy-text');
});




const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function set_date() {
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    var day = d.getDate();

    var time = document.getElementById('time');
    var dayName = days[d.getDay()];

    time.innerText = day + ", " + month + " " + dayName + " " + year;

};
set_date();

var do_cards = document.querySelectorAll('.whatwedocards');

do_cards.forEach(element => {

    // add about div 
    element.addEventListener('mouseover', () => {
        var childs = element.children;
        childs[1].classList.add('showabtDiv');
    });
    //remove abolut div 
    element.addEventListener('mouseleave', () => {
        var childs = element.children;
        childs[1].classList.remove('showabtDiv');
    });
})


var know = document.querySelector('.mybtn');
know.addEventListener('mouseover', () => {
    var icon = document.querySelector('.icons');
    icon.style.filter = "invert(0)";
});

know.addEventListener('mouseleave', () => {
    var icon = document.querySelector('.icons');
    icon.style.filter = "invert(1)";
});


var contactLinks = document.querySelectorAll('.contactLink');
var contactbox = document.getElementById('contactusBox');

contactLinks.forEach(element => {
    element.addEventListener('click', () => {
        contactbox.classList.toggle('show-contactus');
    });
});
