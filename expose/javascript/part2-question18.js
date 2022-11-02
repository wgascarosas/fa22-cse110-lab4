function timeSec() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

window.setInterval(timeSec, 1000);