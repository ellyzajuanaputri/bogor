const db = JSON.parse(localStorage.getItem("dataKuliner"));

function buatCard(item){

return `

<div class="card">

<img src="${item.gambar}">

<h3>${item.nama}</h3>

<p>${item.deskripsi}</p>

<p><b>${item.harga}</b></p>

</div>

`;

}

function tampilKategori(jenis,idContainer){

const container=document.getElementById(idContainer);

if(!container) return;

container.innerHTML="";

db[jenis].forEach(item=>{

container.innerHTML+=buatCard(item);

});

}

document.addEventListener("DOMContentLoaded",()=>{

tampilKategori("makanan","makananContainer");

tampilKategori("minuman","minumanContainer");

});
