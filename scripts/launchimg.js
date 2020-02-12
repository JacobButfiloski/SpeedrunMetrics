function rndmimg() {
    console.log("hi");
    var div = document.getElementById('launchheader');
    var rnd = Math.floor(Math.random() * Math.floor(2));
    //document.getElementById('launchheader').style.backgroundImage = "url(img/launch/" + rnd + ".jpg)";
    document.getElementById('launchheader').setAttribute("style", "background-image: url(img/launch/" + rnd + ".jpg);background-repeat: no-repeat;background-size: cover;background-blend-mode: color; background-color: rgba(0, 0, 0, 0.85) !important;");
}

function playerstatsopen() {
    window.open("player.html")
}