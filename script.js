function Kivalasztas() {
    let eredmenyek = document.getElementById("eredmenyek");

    for (let szam = parseInt(document.getElementById("szamtol").value); szam < parseInt(document.getElementById("szamig").value); szam++) {
        if (document.getElementById("paros").checked && szam % 2 == 0) {
            eredmenyek.appendChild(document.createElement("option")).innerHTML = szam.toString();
        } else if (document.getElementById("paratlan").checked && szam % 2 != 0) {
            eredmenyek.appendChild(document.createElement("option")).innerHTML = szam.toString();
        } else if (document.getElementById("oszthato").checked && szam % parseInt(document.getElementById("sajat").value) == 0) {
            eredmenyek.appendChild(document.createElement("option")).innerHTML = szam.toString();
        }
    }
}