// Getting references to required elements
let dropdown = document.querySelectorAll('.dropdown');
let submenu = document.querySelectorAll('.submenu');
let toggleBtn = document.querySelector('#nav-toggle');
let closeBtn = document.querySelector('.close-btn');
let members = document.querySelector('#members');
let teams = document.querySelector('#teams');
let elements = document.querySelectorAll('.animating');
let shown = false;


// Toggling navbar on close btn in overlay click
closeBtn.addEventListener('click', ()=>{
    document.querySelector('.nav-sm').classList.toggle('visible');
    document.querySelector('.overlay').classList.toggle('visible');
    document.querySelector('.nav-sm').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
    shown = false;
    toggleBtn.classList.toggle('nav-toggle');
})


// Toggling navbar on toggle btn click
toggleBtn.addEventListener('click', ()=>{
    document.querySelector('.nav-sm').classList.toggle('visible');
    if(shown){
        document.querySelector('.nav-sm').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    }else{
        document.querySelector('.nav-sm').style.display = 'block';
        document.querySelector('.overlay').style.display = 'block';
        shown = true;
}
    document.querySelector('.overlay').classList.toggle('visible');
    toggleBtn.classList.toggle('nav-toggle');
})

// showing submenu on dropdown click
for(let i = 0; i<dropdown.length; i++){
    dropdown[i].addEventListener('click', (e)=>{
        submenu[e.target.dataset.menu].classList.toggle('menu-visible');

    })
}



let memberCount = 0;
let teamCount = 0;


// function to update values in teams and members

function updateValues(){

    if(memberCount <60){
    members.innerHTML = memberCount;
    memberCount++;
    }
    if(teamCount<15){
    teams.innerHTML = teamCount;
    teamCount++;
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


// function to add styling to elememnts that are visible
function anim() {
    elements.forEach((el) => {
        if (isInViewPort(el)) {
            el.style.opacity = '1';
            el.style.marginTop = '0';
            el.style.animation = 'show .6s ease-in';
        }
    })


    let id;
    if(isInViewPort(members)){
     id = setInterval(updateValues, 300); 
    } else{
        clearInterval(id);
    }
}

anim();
// triggering anim function when user scrolls
window.addEventListener('scroll', anim)


