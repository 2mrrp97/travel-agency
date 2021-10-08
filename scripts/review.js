const reviews = [
    {
        "img": "./images/cris.jpg",
        "name": "Christina Slater ",
        "occ": "Real estate broker",
        "desc": '" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi consequuntur, fugiat totam maxime laboriosam ullam iste ipsum numquam? Accusamus"'
    },
    {
        "img": "./images/ben.jpg",
        "name": "Benjamin ",
        "occ": "University professor",
        "desc": '"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Eveniet veniam sunt quia inventore suscipit perferendis saepe perspiciatis modi minus minima ea, necessitatibus in, repudiandae culpa magnam, corrupti ipsa ad harum excepturi eius ut corporis unde!"'
    },
    {
        "img": "./images/steph.jpg",
        "name": "Stephanie ",
        "occ": "Musician",
        "desc": '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio ipsam delectus. Assumenda, natus deserunt."'
    },
    {
        "img": "./images/carla.jpg",
        "name": "Carla Harrison ",
        "occ": "Business woman ",
        "desc": '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio ipsam delectus. Assumenda, natus deserunt. necessitatibus in, repudiandae culpa magnam, corrupti ipsa ad harum excepturi eius ut corporis unde!"'
    },
    {
        "img": "./images/usman.jpg",
        "name": "Usman Yusuf",
        "occ": "Stock Broker",
        "desc": '"ipsum dolor sit amet consectetur adipisicing elit.Eveniet veniam sunt quia inventore suscipit perferendis saepe perspiciatis modi minus minima ea, necessitatibus in, repudiandae culpa magnam, corrupti ipsa ad harum excepturi ei!"'
    }
];

let pos = 0;
var btns = document.querySelectorAll('.next-prev-btns');
var dp = document.getElementById('dp');
var user_name = document.getElementById('customer_name');
var occupation = document.getElementById('customer_occu');
var desc = document.getElementById('reviewAbout');



btns.forEach(button => {
    button.addEventListener('click', () => {
        console.log('here', button.dataset.id);
        if (button.dataset.id == "nxt")
            pos = (pos + 1) % reviews.length;
        else
            pos = pos - 1 < 0 ? reviews.length - 1 : pos - 1;


        dp.src = reviews[pos]['img'];
        user_name.innerText = reviews[pos]['name'];
        occupation.innerText = reviews[pos]['occ'];
        desc.innerText = reviews[pos]['desc'];

    });
});