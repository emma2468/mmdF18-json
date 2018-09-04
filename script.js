let retter;
let destination = document.querySelector(".data_container");
let retFilter = "alle";
let modal = document.querySelector("#modal");


document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson(){
    console.log("jsonHentet");

    let myJson = await fetch("menu.json");
    retter = await myJson.json();
    visRetter();
}

document.querySelectorAll(".menu_item").forEach(knap=>{
    knap.addEventListener("click", filtrering);
})

function filtrering(){
    destination.textContent = "";
    retFilter = this.getAttribute("data-kategori");
    visRetter();
}

function visRetter(){
    console.log("hentRetter");

    let template = document.querySelector(".ret_template");
    let destination = document.querySelector(".data_container");
    document.querySelector("header h1").textContent = retFilter;

    retter.forEach (ret =>{
        if(ret.kategori == retFilter || retFilter=="alle"){
        let klon = template.cloneNode(true).content;
        klon.querySelector("h2").textContent = ret.navn;
        klon.querySelector("img"). src = "babushka_assets/imgs/large/" + ret.billede + ".jpg";

        klon.querySelector(".kortBeskrivelse").textContent = ret.kortbeskrivelse;
        klon.querySelector(".pris").textContent = ret.pris;
        destination.appendChild(klon);}
    })
}
