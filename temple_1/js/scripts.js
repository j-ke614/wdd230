function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');   
    document.getElementById('hamburgerBtn').classList.toggle('open');   
}

const openNav = document.getElementById('hamburgerBtn')
openNav.onclick = toggleMenu;

const latestUp = document.querySelector('#latestUp');

const update = document.lastModified

latestUp.innerHTML = update

//date
const currentDate = document.querySelector('#currentDate');
const currentYear = document.querySelector('#currentYear');

const now = new Date()
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
const Year = now.getFullYear()

currentDate.innerHTML = fulldate
currentYear.innerHTML = Year