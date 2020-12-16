
// styled components

// const oi = document.getElementById('oi');

// const conteudoCSS = {
//     content: 'sdiursduirhdioashriuh',
//     zIndex: '999',
//     color: 'red'
// };

// console.log(conteudoCSS);


// function criaOi(informacao){
//     oi.textContent = informacao.content;

    
//     const estiloOi = oi.style;
//     estiloOi.zIndex = informacao.zIndex;
//     estiloOi.color = informacao.color;
    
// }

// criaOi(conteudoCSS);


const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1;

const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

// nextYearContainer.textContent = nextYear;
// nextYearContainer.style.color= "red";

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const inserCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getTimeUnit(seconds)
    minutesContainer.textContent = getTimeUnit(minutes)
    hoursContainer.textContent = getTimeUnit(hours)
    daysContainer.textContent = getTimeUnit(days)
}

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    inserCountdownValues({ days, hours, minutes, seconds })
}

const handleCountdownDisplay = () => {
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000)

