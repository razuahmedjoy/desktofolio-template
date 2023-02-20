const musicIcon = document.querySelector(".icon-menu .fa-music");
const musicIcon2 = document.querySelector(".mobile-bottom-menu .icon-menu .fa-music");
const musicBox = document.querySelector(".music-box");
const closeMusicBox = document.querySelector(".cros-music-box");
const playIcon = document.querySelectorAll(".music-buttons span i")[1];

// To show About Section

const about1 = document.querySelector(".head-about");
const about2 = document.querySelector(".menu-about");
const aboutBox = document.querySelector(".about-container");
const aboutClosebtn = document.querySelector(".about-close");


about1.addEventListener("click", () => {

    serviceBox.classList.remove('show');
    contactBox.classList.remove('show');
    portfolioBox.classList.remove('show');

    aboutBox.classList.toggle('show');
})
about2.addEventListener("click", () => {
    serviceBox.classList.remove('show');
    contactBox.classList.remove('show');
    portfolioBox.classList.remove('show');

    aboutBox.classList.toggle('show');
})
aboutClosebtn.addEventListener("click", () => {
    aboutBox.classList.remove('show');
})

// To show portfolio section

const portfolio1 = document.querySelector(".head-portfolio");
const portfolio2 = document.querySelector(".menu-portfolio");
const portfolioBox = document.querySelector(".portfolio-container");
const portfolioClosebtn = document.querySelector(".portfolio-close");


portfolio1.addEventListener("click", () => {
    aboutBox.classList.remove('show');
    serviceBox.classList.remove('show');
    contactBox.classList.remove('show');

    portfolioBox.classList.toggle('show');
})
portfolio2.addEventListener("click", () => {
    aboutBox.classList.remove('show');
    serviceBox.classList.remove('show');
    contactBox.classList.remove('show');

    portfolioBox.classList.toggle('show');
})
portfolioClosebtn.addEventListener("click", () => {

    portfolioBox.classList.remove('show');
})


//Service area on off
const service1 = document.querySelector(".head-services");
const service2 = document.querySelector(".menu-services");
const serviceBox = document.querySelector('.service-container');
const serviceClosebtn = document.querySelector(".service-close");

service1.addEventListener("click", () => {
    aboutBox.classList.remove('show');
    portfolioBox.classList.remove('show');
    contactBox.classList.remove('show');

    serviceBox.classList.toggle("show")
})
service2.addEventListener("click", () => {
    aboutBox.classList.remove('show');
    portfolioBox.classList.remove('show');
    contactBox.classList.remove('show');

    serviceBox.classList.toggle("show")
})

serviceClosebtn.addEventListener("click", () => {
    serviceBox.classList.remove('show');
})



//Contact Show OFF/ON...

const contact1 = document.querySelector(".head-contact");
const contact2 = document.querySelector(".menu-contact");
const contactBox = document.querySelector(".contact-container");
const contactClosebtn = document.querySelector(".contact-close");

contact1.addEventListener("click", () => {
    aboutBox.classList.remove('show');
    serviceBox.classList.remove('show');
    portfolioBox.classList.remove('show');

    contactBox.classList.toggle("show")



})
contact2.addEventListener("click", () => {
    aboutBox.classList.remove('show');
    serviceBox.classList.remove('show');
    portfolioBox.classList.remove('show');

    contactBox.classList.toggle("show")
})

contactClosebtn.addEventListener("click", () => {
    contactBox.classList.remove('show');
})


//Home button
const home1 = document.querySelector(".head-home")
const home2 = document.querySelector(".menu-home")

home1.addEventListener("click", () => {
    aboutBox.classList.remove('show');
    serviceBox.classList.remove('show');
    portfolioBox.classList.remove('show');
    contactBox.classList.remove('show');

})
home2.addEventListener("click", () => {
    aboutBox.classList.remove('show');
    serviceBox.classList.remove('show');
    portfolioBox.classList.remove('show');
    contactBox.classList.remove('show');

})


//Music box
musicIcon.addEventListener("click", () => {
    musicBox.classList.toggle("show-music-box");
})
musicIcon2.addEventListener("click", () => {

    musicBox.classList.toggle("show-music-box");
})

closeMusicBox.addEventListener("click", () => {
    musicBox.classList.remove("show-music-box");
})

let played = 0;
playIcon.addEventListener("click", () => {
    if (played === 0) {
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
        played = 1;
    }
    else {
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        played = 0;
    }
})



// code for Jquery progress bar

$('#html').circleProgress({
    value: 0.8,
    size: 70,
    startAngle: 29.9,
    lineCap: "round",
    fill: {
        gradient: ["#E54C21", "#F16524"],


    }

});

$('#css').circleProgress({
    value: 0.7,
    size: 70,
    startAngle: 29.9,
    lineCap: "round",
    fill: {
        gradient: ["#146EB0", "#31A4D5"],


    }

});

$('#js').circleProgress({
    value: 0.7,
    size: 70,
    startAngle: 29.9,
    lineCap: "round",
    fill: {
        gradient: ["#D2D531", "#f2f55c"],


    }

});

$('#bootstrap').circleProgress({
    value: 0.7,
    size: 70,
    startAngle: 29.9,
    lineCap: "round",
    fill: {
        gradient: ["#8512FB", "#7952B3"],


    }

});
$('#react').circleProgress({
    value: 0.6,
    size: 70,
    startAngle: 29.9,
    lineCap: "round",
    fill: {
        gradient: ["#61DAFB", "#61DAFB"],


    }

});
$('#node').circleProgress({
    value: 0.6,
    size: 70,
    startAngle: 29.9,
    lineCap: "round",
    fill: {
        gradient: ["#026e00", "#1ec21c"],


    }

});
$('#python').circleProgress({
    value: 0.8,
    size: 70,
    startAngle: 29.9,
    lineCap: "round",
    fill: {
        gradient: ["#FED348", "#396EA0"],


    }

});
$('#django').circleProgress({
    value: 0.9,
    size: 70,
    startAngle: 29.9,
    lineCap: "round",
    fill: {
        gradient: ["#092D1F", "#092D1F"],


    }

});
$('#git').circleProgress({
    value: 0.8,
    size: 70,
    startAngle: 29.9,
    lineCap: "round",
    fill: {
        gradient: ["#E84E31", "#E84E31"],


    }

});


// function sendMail() {
//     // console.log("hi");
//     const params = {
//         from_name: document.getElementById("from_name").value,
//         email_id: document.getElementById("email_id").value,
//         message: document.getElementById("message").value
//     }
//     const contactForm = document.getElementById("contact_form")

//     emailjs.sendForm("service_0acravf", "template_w9ml7xd", contactForm, "tx1UOetHy5nsmGixK").then(res=>{
//         if (res.status === 200){
//             alert("Email sent");
//         }
//     });

// }