const furigana = document.getElementById("furigana");
const romajiAdd = document.getElementById("romaji");
const traduction = document.getElementById("francais");
const toggleRt = document.querySelectorAll("rt");
const toggleRomaji = document.querySelectorAll(".romaji");
const toggleTraduction = document.querySelectorAll(".francais");

//TOGGLE Hiragana
for (var i = 0; i < toggleRt.length; i++) {
  (function (rt) {
    furigana.addEventListener("change", () => {
      rt.classList.toggle("active");
    });
  })(toggleRt[i]);
}

//TOGGLE Traduction
for (var i = 0; i < toggleTraduction.length; i++) {
  (function (francais) {
    traduction.addEventListener("change", () => {
      francais.classList.toggle("active");
    });
  })(toggleTraduction[i]);
}
