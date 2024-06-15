function displayTime() {
    let datetime = new Date();

    let hr = datetime.getHours();
    let min = datetime.getMinutes();
    let sec = datetime.getSeconds();
    let ampm = hr >= 12 ? 'PM' : 'AM';

    hr = hr % 12;
    hr = hr ? hr : 12; // the hour '0' should be '12'

    document.getElementById("hours").innerText = hr.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = min.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = sec.toString().padStart(2, '0');
    document.getElementById("ampm").innerText = ampm;
}

setInterval(displayTime, 500);
displayTime(); // Initial call to display time immediately
