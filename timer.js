let timerInterval;
let totalSeconds = 0;
let remainingSeconds = 0;

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    if (remainingSeconds === 0) {
        totalSeconds = parseInt(document.getElementById('hoursInput').value || 0) * 3600 +
            parseInt(document.getElementById('minutesInput').value || 0) * 60 +
            parseInt(document.getElementById('secondsInput').value || 0);

        remainingSeconds = totalSeconds;
    }

    timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    remainingSeconds = totalSeconds;
    updateTimer();
}

function updateTimer() {
    if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerText = '00:00:00';
        playAlarmSound(); // Call the function to play the alarm sound
        return;
    }

    let hours = Math.floor(remainingSeconds / 3600);
    let minutes = Math.floor((remainingSeconds % 3600) / 60);
    let seconds = remainingSeconds % 60;

    document.getElementById('timer').innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);

    remainingSeconds--;
}

function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
}

function playAlarmSound() {
    let alarmSound = document.getElementById('alarmSound');
    alarmSound.play();
}
