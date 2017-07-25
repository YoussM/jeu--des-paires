//mes variables
var images = document.getElementsByClassName("carte1");
var chapeau = document.getElementsByClassName("img1");
var random = ["img/tete-de-mort1.jpg", "img/tete-de-mort2.jpg", "img/tete-de-mort3.jpg", "img/tete-de-mort4.jpg", "img/cactus.png", "img/piment.png", "img/guitare.jpg", "img/tete-de-mort1.jpg", "img/tete-de-mort2.jpg", "img/tete-de-mort3.jpg", "img/tete-de-mort4.jpg", "img/cactus.png", "img/piment.png", "img/guitare.jpg"];
var tab = [];
var click = 0;

// mon code
function myFunction() {
    random.sort(function() {
        return 0.5 - Math.random();
    });

    // test = random;
    randomize();
}


function randomize() {

    for (let i = 0; i < chapeau.length; i++) {
        // chapeau[i].classList.remove("invisible");
        // images[i].classList.remove("visible");
        document.getElementsByClassName("carte1")[i].src = random[i];
        chapeau[i].addEventListener("click", function() {
            montreCarte(i);
        });
    }
}


function montreCarte(i) {

    click++;
    if (click <= 2) {
        chapeau[i].classList.add("invisible");
        images[i].classList.add("visible");
        chapeau[i].classList.remove("visible");
        images[i].classList.remove("invisible");
        tab.push(images[i], chapeau[i]);
        // console.log(tab, tab.length);
    }

     else {
        stopJeu();
    }
}


function stopJeu() {
    for (var i = 0; i < chapeau.length; i++) {
        chapeau[i].removeEventListener("click", montreCarte);
    }
    compare(i);
}


function compare(o) {

    console.log(tab[0]);
    // if (tab[0].src == tab[2].src) {
    //     gagne();
    // }
    // else {
    //     perdu();
    // }
    if (tab[0].src != tab[2].src) {
        perdu();
    } else {
        gagne();
    }

}


function gagne() {
    setTimeout(function() {
        alert("gagne");
        // chapeau[i].classlist.remove("visible");
        tab = [];
        click = 0;
    }, 1000);
}


function perdu() {
    setTimeout(function() {
        alert("perdu");
        tab[0].classList.remove("visible");
        tab[2].classList.remove("visible");
        tab[0].classList.add("invisible");
        tab[2].classList.add("invisible");
        tab[1].classList.add("visible");
        tab[3].classList.add("visible");
        click = 0;
        tab = [];
    }, 1000);

}
