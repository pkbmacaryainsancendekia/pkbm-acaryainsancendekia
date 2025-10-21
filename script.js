document.getElementById("waForm").addEventListener("submit", function(e){
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const jenjang = document.getElementById("jenjang").value;
  const alamat = document.getElementById("alamat").value;
  const hp = document.getElementById("hp").value;

  const pesan = `Halo, saya ingin mendaftar ke PKBM Acarya Insan Cendekia.%0A
Nama: ${nama}%0A
Jenjang: ${jenjang}%0A
Alamat: ${alamat}%0A
No. HP: ${hp}`;

  const url = `https://wa.me/628970510401?text=${pesan}`;
  window.open(url, "_blank");
});