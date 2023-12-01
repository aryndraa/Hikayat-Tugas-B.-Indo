var navbar = document.getElementById("pageNav");
var home = document.getElementById("home");
var page1 = document.getElementById("page");
var penjelasan = document.getElementById("hikayat");
var nilai = document.getElementById("nilai");
var profil = document.getElementById("sesi__profil");
var sumber = document.getElementById("sumber");

// hero blur
document.addEventListener("scroll", function () {
  var container = document.getElementById("page1");
  container.style.opacity = 1 - window.scrollY / 480;
});

// nav scroll
document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY > 538;
  var body = document.body;
  if (scrollPosition) {
    navbar.classList.add("active");
    body.classList.add("active");
    home.classList.add("active");
    penjelasan.classList.add("active");
    nilai.classList.add("active");
    profil.classList.add("active");
    sumber.classList.add("active");
    setTimeout(function () {
      page1.classList.add("active");
    }, 0.1);
  } else {
    sumber.classList.remove("active");
    navbar.classList.remove("active");
    nilai.classList.remove("active");
    page1.classList.remove("active");
    home.classList.remove("active");
    body.classList.remove("active");
    penjelasan.classList.remove("active");
    profil.classList.remove("active");
  }
});

function menu() {
  document.getElementById();
}

// font ketik
const words = [
  "Pengertian Hikayat",
  "Ciri-Ciri Hikayat",
  "Karakteristik Hikayat",
  "Nilai-Nilai Hikayat",
  "Struktur HIkayat",
];
let currentWordIndex = 0;
let currentWordElement = document.getElementById("current-word");
let currentCharIndex = 0;

function typeWords() {
  if (currentWordIndex >= words.length) {
    // Jika sudah mengetik semua kata, kembali ke awal
    currentWordIndex = 0;
  }

  const currentWord = words[currentWordIndex];
  const currentChar = currentWord.charAt(currentCharIndex);

  currentWordElement.innerHTML += currentChar;
  currentCharIndex++;

  if (currentCharIndex < currentWord.length) {
    setTimeout(typeWords, 100); // Delay sebelum mengetik karakter berikutnya
  } else {
    currentCharIndex = 0;
    setTimeout(eraseWords, 1500); // Delay sebelum menghapus kata
  }
}

function eraseWords() {
  const currentWord = currentWordElement.innerHTML;
  const length = currentWord.length;

  if (length > 0) {
    currentWordElement.innerHTML = currentWord.slice(0, length - 1);
    setTimeout(eraseWords, 50); // Delay sebelum menghapus karakter berikutnya
  } else {
    currentWordIndex++;
    setTimeout(typeWords, 1000); // Delay sebelum mengetik kata berikutnya
  }
}

typeWords();

// navbar active
function sidebar() {
  var side = document.getElementById("side");
  if (side.classList.contains("active")) {
    side.classList.remove("active");
  } else {
    side.classList.add("active");
  }
}

// darkmode
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");
var swtch = document.getElementById("story");
function drk() {
  swtch.classList.add("dark");
  if (moon.classList.contains("active")) {
    moon.classList.remove("active");
    sun.classList.add("active");
  }
}

function light() {
  swtch.classList.remove("dark");
  if (sun.classList.contains("active")) {
    sun.classList.remove("active");
    moon.classList.add("active");
  }
}

function abstrak() {
  var abstrak = document.getElementById("abstraksi");
  if (abstrak.classList.contains("active")) {
    abstrak.classList.remove("active");
  } else {
    abstrak.classList.add("active");
  }
}

function orientasi() {
  var isi = document.getElementById("orientasi");
  if (isi.classList.contains("active")) {
    isi.classList.remove("active");
  } else {
    isi.classList.add("active");
  }
}

function komplikasi() {
  var isi = document.getElementById("komplikasi");
  if (isi.classList.contains("active")) {
    isi.classList.remove("active");
  } else {
    isi.classList.add("active");
  }
}

function evaluasi() {
  var isi = document.getElementById("evaluasi");
  if (isi.classList.contains("active")) {
    isi.classList.remove("active");
  } else {
    isi.classList.add("active");
  }
}

function resolusi() {
  var isi = document.getElementById("resolusi");
  if (isi.classList.contains("active")) {
    isi.classList.remove("active");
  } else {
    isi.classList.add("active");
  }
}

function koda() {
  var isi = document.getElementById("koda");
  if (isi.classList.contains("active")) {
    isi.classList.remove("active");
  } else {
    isi.classList.add("active");
  }
}

// card
function flip() {
  var card = document.getElementById("nama");
  var img = document.getElementById("img-ca");
  event.preventDefault();
  if (card.classList.contains("flip")) {
    card.classList.remove("flip");
    img.classList.add("active");
  } else {
    card.classList.add("flip");
    img.classList.remove("active");
  }
}

const innerScroller = document.querySelector(".inner-scroller");
const scrollerContent = Array.from(innerScroller.children);

scrollerContent.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  innerScroller.appendChild(duplicatedItem);
});
