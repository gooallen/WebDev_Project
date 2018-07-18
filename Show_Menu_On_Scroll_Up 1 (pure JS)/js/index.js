// hide menu bar with pure JS
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        // style.top makes the "navbar" to zero
        document.getElementById("navbar").style.top = "0";
    } else {
        // by changing the value, you will be able to change menu size freely
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}