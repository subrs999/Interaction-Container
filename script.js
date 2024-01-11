window.onscroll = function () {
    scrollRotate1();
    scrollRotate2();
};

function scrollRotate1() {
    let image = document.getElementById("record1");
    image.style.transform = "rotate(" + window.scrollY/4 + "deg)";
}

function scrollRotate2() {
    let image = document.getElementById("record2");
    image.style.transform = "rotate(" + window.scrollY/4 + "deg)";
}