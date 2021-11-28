const clock = document.querySelector("#clock");



function getClock() {
    const week = new Array('Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.')
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    const day = week[today.getDay()];

    const hours = String(today.getHours()).padStart(2,'0');
    const min = String(today.getMinutes()).padStart(2,'0');
    const seconds = String(today.getSeconds()).padStart(2,'0');    

    clock.innerText = `${day} ${year}. ${month}. ${date} ${hours}:${min}:${seconds}`;
}

//load되자마자 실행
getClock();
setInterval(getClock, 1000);