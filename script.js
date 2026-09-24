/* ================= OPENING SCREEN ================= */

function openGift() {

    const screen =
        document.getElementById("opening-screen");

    screen.classList.add("hide");

}


/* ================= 3D GIFT ================= */

function open3DGift() {

    const gift =
        document.getElementById("gift3D");

    const surprise =
        document.getElementById("gift-surprise");

    gift.classList.toggle("open");

    if (gift.classList.contains("open")) {

        setTimeout(function () {

            surprise.style.display = "block";

        }, 700);

    }

}


/* ================= ENVELOPE ================= */

function openEnvelope() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.toggle("open");

}


/* ================= FINAL SURPRISE ================= */

function showSurprise() {

    const message =
        document.getElementById("surpriseMessage");

    message.style.display = "block";

}


/* ================= NIGHT MODE ================= */

function toggleNightMode() {

    document.body.classList.toggle("night-mode");

    const button =
        document.getElementById("nightButton");

    if (document.body.classList.contains("night-mode")) {

        button.innerHTML = "☀️";

    } else {

        button.innerHTML = "🌙";

    }

}


/* ================= MUSIC ================= */

function toggleMusic() {

    const music =
        document.getElementById("backgroundMusic");

    const button =
        document.getElementById("musicButton");

    if (music.paused) {

        music.play();

        button.innerHTML = "🔊";

    } else {

        music.pause();

        button.innerHTML = "🎵";

    }

}


/* ================= SPECIAL DATE COUNTER ================= */

/*
   IMPORTANT:
   Yahan apni special date change karni hai.

   Format:
   "YYYY-MM-DDTHH:MM:SS"

   Example:
   "2025-01-01T00:00:00"
*/

const specialDate =
    new Date("2025-01-01T00:00:00");


function updateCounter() {

    const now =
        new Date();

    const difference =
        now - specialDate;


    if (difference < 0) {

        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";

        return;

    }


    const totalSeconds =
        Math.floor(difference / 1000);


    const days =
        Math.floor(totalSeconds / 86400);


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById("days").innerText =
        days;

    document.getElementById("hours").innerText =
        hours;

    document.getElementById("minutes").innerText =
        minutes;

    document.getElementById("seconds").innerText =
        seconds;

}


setInterval(updateCounter, 1000);

updateCounter();


/* ================= MOUSE 3D TILT ================= */

const cards =
    document.querySelectorAll(".tilt-card");


cards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

    });

});
