let displayTime = document.getElementById('time')
let [sec, min, hours] = [0, 0, 0]
let timer = null

function stopwatch() {
    sec++
    if (sec == 60) {
        sec = 0
        min++ 
        if (min == 60) {
            min = 0
            hours++
        }
    }

    let s = sec < 10 ? "0" + sec : sec
    let h = hours < 10 ? "0" + hours : hours
    let m = min < 10 ? "0" + min : min

    displayTime.innerHTML = h +'<span class="fw-bold"> : </span>'+ m +'<span class="fw-bold"> : </span>'+ s
}

function startTimer() {
    if(timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000)
}

function stopTimer() {
    clearInterval(timer)
}

function resetTimer() {
    clearInterval(timer)
    let [sec, min, hours] = [0, 0, 0]
    displayTime.innerHTML = '<p class="lead fs-1">00<span class="fw-bold"> : </span>00<span class="fw-bold"> : </span>00</p>'
}