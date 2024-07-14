// script.js
document.addEventListener("DOMContentLoaded", function() {
    // シミュレーションのために2秒後にコンテンツを表示
    setTimeout(function() {
        document.getElementById("skeleton").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000);
});
