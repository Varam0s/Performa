fetch("/MossyPacksModpacks/assets/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}
