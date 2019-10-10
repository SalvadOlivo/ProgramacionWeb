window.onload = ()=> {

let varM = document.getElementsByClassName("options");
let m = document.getElementById("menu");
let varM2 = varM[0];





function clickMenu(){
    let fb = document.getElementsByClassName("fa-bars");
    let fb1 = fb[0];
    let ft = document.getElementsByClassName("fa-times");
    let fft1 = ft[0];

    fb1.classList.toggle("hide-mobile");
    m.classList.toggle("hide-mobile");
    fft1.classList.toggle("hide-mobile");

}

varM2.addEventListener("click", clickMenu);

}





