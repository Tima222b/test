var indexShow;
var region = document.getElementsByClassName("region");

function regionshow(x) {
    show(indexShow = x);
}

function show(x) {   
    for(var i = 0; i < region.length; i++) {
        region[i].style.display = "none";
    }

    region[indexShow].style.display = "block";
}

function hide() {
    for(var i = 0; i < region.length; i++) {
        region[i].style.display = "none";
    }
}






