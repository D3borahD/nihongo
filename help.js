const furigana = document.getElementById("furigana");
const traduction = document.getElementById("french");

const toggleRt = document.querySelectorAll("rt");
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

// Active furigana au click on kangi  <=> CSS/////

const rubyTous = document.querySelectorAll("ruby");

for (var i = 0; i < rubyTous.length; i++) {
  var ruby = rubyTous[i];
  var helpFurigana = function () {
    this.classList.toggle("help-furigana");
  };
  ruby.addEventListener("click", helpFurigana);
}
