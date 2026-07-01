// script.js
const data = {
  GIZA: {
    nama: "Giza 💖",
    foto: "giza.jpeg",
    NPM: "2455201077",
    Prodi: "Teknik informatika",
    moto: "Hidup sebahagianya",
  },
  ILMA: {
    nama: "ILMA 🎀",
    foto: "ilma.jpeg",
    NPM: "2455201064",
    Prodi: "Teknik informatika",
    moto: "Belajar baik tanpa tutorial",
  },
  TESSA: {
    nama: "TESSA ✨",
    foto: "tessa.jpeg",
    NPM: "2455201084",
    Prodi: "Teknik informatika",
    moto: "Upgrade diri,bukan ego",
  },
  TANIA: {
    nama: "TANIA 🌷",
    foto: "Tania.jpeg",
    NPM: "2455202052",
    Prodi: "Teknik informatika",
    moto: "Menjadi persi terbaik dari diri sendiri",
  },
  ARINI: {
    nama: "ARINI 🌸",
    foto: "arini.jpeg",
    NPM: "2455201013",
    Prodi: "Teknik Informatika",
    moto: "Berusaha hari ini, menikmati hasilnya nanti",
  },
};
/* MASUK WEBSITE */
function masukWebsite() {
  document.getElementById("menuAwal").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
}
/* PROFIL */
function showData(anggota) {
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("foto").src = data[anggota].foto;
  document.getElementById("nama").innerHTML = data[anggota].nama;
  document.getElementById("isi").innerHTML = `
    🌸 <b>NPM :</b> ${data[anggota].NPM} <br><br>
    📚 <b>Prodi :</b> ${data[anggota].Prodi}
    `;
}
/* MOTO */
function showHobi(anggota) {
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("foto").src = data[anggota].foto;
  document.getElementById("nama").innerHTML = data[anggota].nama;
  document.getElementById("isi").innerHTML = `
    💖 <b>Moto :</b><br><br>
    ${data[anggota].moto}
    `;
}
/* CLOSE */
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
}
