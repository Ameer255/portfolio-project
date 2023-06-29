// Getting references to required elements
let dropdown = document.querySelectorAll('.dropdown');
let submenu = document.querySelectorAll('.submenu');
let toggleBtn = document.querySelector('#nav-toggle');
let closeBtn = document.querySelector('.close-btn');
let members = document.querySelector('#members');
let teams = document.querySelector('#teams');
let elements = document.querySelectorAll('.animating');
let navSm = document.querySelector('.nav-sm');
let overlay = document.querySelector('.overlay');
let videoContainer = document.querySelector('.yt-video-container');
let videoCloseBtn = document.querySelector('.video-close-btn');
let shown = false;


// function to hide/show nav sm
function navToggle() {
    if (shown) {
        navSm.classList.remove('visible');
        overlay.classList.remove('visible');
        setTimeout(() => {
            navSm.style.display = 'none';
            overlay.style.display = 'none';
        }, 200)
        shown = false;
    }
    else {
        navSm.style.display = 'block';
        overlay.style.display = 'block';
        setTimeout(() => {
            navSm.classList.add('visible');
            overlay.classList.add('visible');
        }, 200)
        shown = true;
    }
    toggleBtn.classList.toggle('nav-toggle');
}

// Toggling navbar on close btn in overlay click
closeBtn.addEventListener('click', navToggle);


// Toggling navbar on toggle btn click
toggleBtn.addEventListener('click', navToggle);

// showing submenu on dropdown click
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', (e) => {
        submenu[e.target.dataset.menu].classList.toggle('menu-visible');

    })
}



let memberCount = 0;
let teamCount = 0;


// function to update values in teams and members

function updateValues() {

    if (memberCount < 60) {
        members.innerHTML = memberCount;
        memberCount++;
    }
    if (teamCount < 15) {
        teams.innerHTML = teamCount;
        teamCount++;
    }
}

// if elements are visible on viewport, start updating values
function anim() {
    let id;
    if (isInViewPort(members)) {
        id = setInterval(updateValues, 150);
    } else {
        clearInterval(id);
    }
}


// function to check if specific element is visible on viewport
function isInViewPort(el) {
    let rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
}


// initializing aniamtions 

AOS.init({
    duration: 1200,
    once: true
})



// triggering anim function when user scrolls
window.addEventListener('scroll', anim)



// automatically activating service items
let counter = 0;
let digitalServices = document.querySelectorAll('.digital-services2>div');

function activate() {

    for (let i = 0; i < digitalServices.length; i++) {
        digitalServices[i].classList.remove('active')
    }
    if (counter < 4 && counter !== 0) {
        digitalServices[counter].classList.add('active');
        counter++;
        console.log('value of counter is ', counter)
    } else {
        counter = 0;
        digitalServices[counter].classList.add('active');
        counter++;
    }
}

activate();

setInterval(activate, 5000);

// toggling youtube video container
document.querySelector('.dashboard-img').addEventListener('click',()=>{
    videoContainer.classList.add('visible');
});

videoCloseBtn.addEventListener('click', ()=>{
    videoContainer.classList.remove('visible');
})
