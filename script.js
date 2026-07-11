// =====================
// LOADING ANIMATION
// =====================


let percent = 0;


const loading = setInterval(()=>{


    percent++;


    document.getElementById("percent").innerHTML =
    percent + "%";



    if(percent >= 100){


        clearInterval(loading);



        const loader =
        document.getElementById("loader");



        loader.style.opacity = "0";



        setTimeout(()=>{


            loader.style.display="none";



            document
            .getElementById("letterPage")
            .classList.remove("hidden");



        },1000);



    }


},35);









// =====================
// BUTTON LANJUT
// =====================


const continueButton =
document.getElementById("continueButton");



const openingMusic =
document.getElementById("openingMusic");





continueButton.onclick = function(){



    document
    .getElementById("letterPage")
    .classList.add("hidden");



    document
    .getElementById("opening")
    .classList.remove("hidden");





    // mulai HBS music


    openingMusic.volume = 0.5;



    openingMusic.play()

    .then(()=>{

        console.log(
            "HBS music playing"
        );

    })


    .catch(()=>{

        console.log(
            "Music waiting for interaction"
        );

    });



};











// =====================
// TIUP LILIN
// =====================


const blowButton =
document.getElementById("blowButton");



const flame =
document.getElementById("flame");



const wishText =
document.getElementById("wishText");



const galleryButton =
document.getElementById("galleryButton");








blowButton.onclick=function(){



    // matikan api


    flame.style.opacity="0";



    setTimeout(()=>{


        flame.style.display="none";


    },500);






    // sembunyikan tombol tiup


    blowButton.style.display="none";








    // tampilkan pesan harapan


    wishText.classList.remove("hidden");







    // confetti


    createConfetti();








    // munculkan tombol gallery


    setTimeout(()=>{


        galleryButton.classList.remove("hidden");


    },2000);



};











// =====================
// CONFETTI
// =====================



function createConfetti(){



    const emojis = [


        "💜",

        "✨",

        "🎉",

        "💗",

        "🌸"


    ];





    for(let i=0;i<50;i++){



        const confetti =
        document.createElement("div");



        confetti.innerHTML =
        emojis[
            Math.floor(
                Math.random()*emojis.length
            )
        ];



        confetti.style.position="fixed";


        confetti.style.left =
        Math.random()*100 + "vw";



        confetti.style.top="-30px";



        confetti.style.fontSize =
        Math.random()*20+15+"px";



        confetti.style.zIndex="999";



        confetti.style.animation =
        "fall 3s linear";



        document.body.appendChild(confetti);






        setTimeout(()=>{


            confetti.remove();


        },3000);



    }



}









// =====================
// MASUK GALLERY
// =====================



galleryButton.onclick=function(){



    // hentikan HBS


    openingMusic.pause();


    openingMusic.currentTime = 0;






    // tanda untuk gallery memutar Nuca


    sessionStorage.setItem(

        "playNuca",

        "true"

    );







    window.location.href =

    "gallery.html";



};