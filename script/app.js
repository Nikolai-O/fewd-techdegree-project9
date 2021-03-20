const about = document.getElementById('about');
const aboutBtn = document.getElementById('aboutBtn');
const overlay1 = document.getElementById('overlay1');
const modalClose1 = document.getElementById("modalClose1");
const modalClose2 = document.getElementById("modalClose2");
const next = document.getElementById("modalNext");
const previous = document.getElementById("modalPrevious");


window.onscroll = ( e => {
    if (window.scrollY > 1900 & window.matchMedia("(min-width: 768px)").matches) {
        aboutBtn.style.display = "block";
    }
});

window.addEventListener('resize', e => {
    if (window.matchMedia("(max-width: 767px)").matches) {
        aboutBtn.style.display = "none";
        overlay1.style.display = "none";
        overlay2.style.display = "none";
    }
})

function displayModal1() {
    overlay1.style.display = "block";
    overlay2.style.display = "none";
}

function displayModal2() {
    overlay1.style.display = "none";
    overlay2.style.display = "block";
}

aboutBtn.addEventListener('click', e => {
    aboutBtn.style.display = "none";
    displayModal1();
});

next.addEventListener('click', e => {
    displayModal2();
});

previous.addEventListener('click', e => {
    displayModal1();
});

modalClose1.addEventListener('click', e => {
    overlay1.style.display = "none";
});

modalClose2.addEventListener('click', e => {
    overlay2.style.display = "none";
});
