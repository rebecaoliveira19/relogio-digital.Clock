const hours = document.querySelector('#hours')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

setInterval(() => {
    let date = new Date()
    let dHour = date.getHours()
    let dMinute = date.getMinutes()
    let dSec = date.getSeconds()
    
    hours.innerHTML = `${formatTime(dHour)}`
    min.innerHTML = `${formatTime(dMinute)}`
    sec.innerHTML = `${formatTime(dSec)}`

}, 1000)

function formatTime(time){
    return time < 10 ? "0"  + time : time

}