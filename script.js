```javascript
/* ==================================
   HERO AUTO SLIDER
================================== */


let slides = document.querySelectorAll(".slide");

let index = 0;


function nextSlide(){

    if(slides.length > 0){

        slides[index].classList.remove("active");


        index++;


        if(index >= slides.length){

            index = 0;

        }


        slides[index].classList.add("active");

    }

}


setInterval(nextSlide,5000);





/* ==================================
   DARK / LIGHT MODE
================================== */


const themeButton = document.getElementById("themeToggle");


if(themeButton){


themeButton.onclick = function(){


document.body.classList.toggle("light-mode");



if(document.body.classList.contains("light-mode")){


    localStorage.setItem(
        "theme",
        "light"
    );


    themeButton.innerHTML="☀️";


}else{


    localStorage.setItem(
        "theme",
        "dark"
    );


    themeButton.innerHTML="🌙";


}



}


}




/* LOAD THEME */


if(localStorage.getItem("theme")=="light"){

    document.body.classList.add("light-mode");


    if(themeButton){

        themeButton.innerHTML="☀️";

    }

}







/* ==================================
   KRITIK & SARAN
================================== */


let kritikData = JSON.parse(
    localStorage.getItem("kritik")
) || [];





function tampilkanKritik(){


let tempat = document.getElementById(
    "listKritik"
);



if(tempat){



    if(kritikData.length === 0){


        tempat.innerHTML =
        "<p>Belum ada kritik dan saran.</p>";


    }else{


        tempat.innerHTML="";


        kritikData.slice(-5).reverse()
        .forEach(item=>{


            let box =
            document.createElement("div");


            box.className="kritik-box";



            box.innerHTML=`

            <h4>
            ${item.nama}
            </h4>

            <p>
            ${item.pesan}
            </p>

            `;


            tempat.appendChild(box);


        });



    }


}



}



tampilkanKritik();







/* ==================================
   KONFIGURASI VOTING KETOS
================================== */



const votingConfig = {


    aktif:true,


    mulai:"2026-08-01",


    selesai:"2026-08-07"


};






function cekVoting(){



let area =
document.getElementById(
    "statusVoting"
);



if(area){



if(votingConfig.aktif === false){


    area.innerHTML=
    `
    <h3>
    Belum ada pemilihan Ketua OSIS
    </h3>

    <p>
    Voting sedang tidak tersedia.
    </p>
    `;


    return;


}





let sekarang =
new Date();



let mulai =
new Date(
votingConfig.mulai
);



let selesai =
new Date(
votingConfig.selesai
);






if(sekarang < mulai){



area.innerHTML=
`

<h3>
Pemilihan belum dimulai
</h3>

<p>
Mulai:
${votingConfig.mulai}
</p>

`;



}





else if(sekarang > selesai){



area.innerHTML=
`

<h3>
Pemilihan telah selesai
</h3>

`;



}



else{



area.innerHTML=
`

<h3>
Voting Ketua OSIS sedang berlangsung
</h3>

<p>
Silahkan gunakan hak suara Anda.
</p>

`;



}



}




}



cekVoting();







/* ==================================
   FORM KRITIK
================================== */



let formKritik =
document.getElementById(
"formKritik"
);



if(formKritik){



formKritik.addEventListener(
"submit",
function(e){


e.preventDefault();



let nama =
document.getElementById(
"nama"
).value;



let pesan =
document.getElementById(
"pesan"
).value;



let anonim =
document.getElementById(
"anonim"
).checked;




if(anonim){


nama="Anonim";


}




kritikData.push({


nama:nama,


pesan:pesan


});




localStorage.setItem(
"kritik",
JSON.stringify(kritikData)
);




alert(
"Terima kasih atas kritik dan sarannya!"
);



location.reload();



});



}
```
