// =====================
// DATA GALLERY
// =====================


let currentPhoto = 1;


const totalPhoto = 59;




const image = document.getElementById("memoryImage");

const caption = document.getElementById("caption");


const prevButton = document.getElementById("prevButton");

const nextButton = document.getElementById("nextButton");


const endButtons = document.getElementById("endButtons");

const homeButton = document.getElementById("homeButton");




const music = document.getElementById("music");


let musicStarted = false;








// =====================
// CAPTION
// =====================


const captions = {


    1:
    "Sebuah cerita kecil yang dimulai dari sini🤏💜",

    2:
    "Di dunia yang selalu berubah,\n ada satu tempat yang tak pernah\n membuatku ingin pergi,\n yaitu disampingmu.\nBukan karena hidup bersamamu\n akan selalu mudah,\n tetapi karena setiap langkah \nterasa lebih ringan ketika \nkita melangkah berdua.",
   
    5:
    "Jika waktu adalah penulis terbaik,\n maka setiap hari bersamamu \nadalah halaman yang tak pernah ingin kulewati.\n Dan jika suatu hari kisah ini menjadi kenangan,\n aku berharap kenangan itu\n tetap dimulai dengan namamu.",

    8:
    "Aku tidak pernah tahu bahwa seseorang bisa mengubah cara pandangku tentang hidup. \nSampai akhirnya semesta mempertemukanku denganmu, \nlalu perlahan mengajarkanku bahwa cinta bukan tentang menemukan yang sempurna, \nmelainkan tentang memilih orang yang sama setiap hari",
    
    10:
    "Senyum manis yang selalu kurindukan❤️",

    18:
    "Ditengah dunia yang terus berjalan, ada satu hal yang membuatku berhenti sejenak. genggaman tanganmu.\n Sederhana, tapi disana \n aku menemukan \nrasa aman, hangat, dan rumah.",
    20:
    "Tidak terasa, banyak cerita sudah kita lewati bersama 💜",


    30:
    "Terima kasih sudah menjadi rumah ternyaman untukku 🤍",


    40:
    "Jarak hanya memisahkan tempat, bukan memisahkan hati yang sudah memilih untuk bersama.❤️",
    
    52:
    "Satu langkah lebih dekat menuju cerita yang ingin kita tulis bersama.",
    55:
    "Aku tidak meminta hidup yang selalu mudah. Aku hanya berharap, disetiap musim kehidupan nanti, aku masih bisa menemukanmu berjalan disampingku, dengan genggaman yang sama eratnya seperti hari ini.",
    57:
    "Ada banyak orang yang datang dan pergi dalam hidupku.\n Tetapi hanya kamu yang membuat kata 'selamanya' \nterdengar begitu mungkin.\n Terima kasih telah memilihku menjadi seseorang yang akan menemanimu menuju masa depan.",
    59:
    "Selamat ulang tahun, Bubub 🎂❤️\n\nTerima kasih sudah hadir dalam hidupku, menjadi tempat berbagi cerita, tawa, dan berbagai perjalanan yang sudah kita lewati.\nSetiap foto disini adalah bukti kecil bahwa banyak kebahagiaan yang aku temukan bersamamu.\nSemoga ini bukan menjadi akhir dari cerita, tapi awal dari lebih banyak kenangan yang akan kita buat bersama.\n\nAku sayang Kamu❤️",

};









// =====================
// UPDATE FOTO
// =====================


function updatePhoto(){


    image.style.opacity = "0";



    setTimeout(()=>{


        image.src =
        "images/foto"
        + currentPhoto
        + ".jpg";



        image.style.opacity = "1";



        updateCaption();


        updateButton();



    },400);



}









// =====================
// UPDATE CAPTION
// =====================


function updateCaption(){


    if(captions[currentPhoto]){


        caption.innerHTML =
        captions[currentPhoto]
        .replace(/\n/g,"<br>");


    }

    else{


        caption.innerHTML = "";


    }


}









// =====================
// UPDATE BUTTON
// =====================


function updateButton(){



    // =====================
    // FOTO PERTAMA
    // =====================


   if(currentPhoto === 1){


    prevButton.style.visibility="hidden";


}

   else{


    prevButton.style.visibility="visible";


}






    // =====================
    // FOTO TERAKHIR
    // =====================


    if(currentPhoto === totalPhoto){


        nextButton.style.display = "none";


        endButtons.classList.remove("hidden");



    }

    else{


        nextButton.style.display = "block";


        endButtons.classList.add("hidden");



    }



}









// =====================
// NEXT BUTTON
// =====================


nextButton.onclick = function(){


    



    if(currentPhoto < totalPhoto){


        currentPhoto++;


        updatePhoto();



    }



};









// =====================
// PREV BUTTON
// =====================


prevButton.onclick = function(){



    if(currentPhoto > 1){


        currentPhoto--;


        updatePhoto();



    }


};









// =====================
// MUSIC START
// =====================


function startMusic(){



    if(!musicStarted){


        music.volume = 0.5;


        music.play()
        .catch(()=>{});


        musicStarted = true;


    }



}









// =====================
// HOME BUTTON
// =====================
// kembali ke foto pertama


homeButton.onclick=function(){


    currentPhoto = 1;



    updatePhoto();



};





// =====================
// INITIAL LOAD
// =====================


updateCaption();

updateButton();


// =====================
// PLAY NUCA MUSIC
// =====================

// =====================
// PLAY NUCA MUSIC
// =====================


window.addEventListener("click", function startNuca(){


    if(!musicStarted){


        music.volume = 0.5;


        music.play()
        .then(()=>{


            console.log(
                "Nuca music playing"
            );


            musicStarted = true;


        })


        .catch(()=>{


            console.log(
                "Music waiting"
            );


        });


    }


}, { once:true });
