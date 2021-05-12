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

//furigana on click =======> en cours

// const rubyTous = document.querySelectorAll("ruby");

// for (var i = 0; i < rubyTous.length; i++) {
//   var ruby = rubyTous[i];
//   var bleuit = function () {
//     this.classList.toggle("blue");
//     var rt = document.querySelector("rt");

//     rt.classList.toggle("blue");

//     // if (this.classList.contains)
//   };
//   ruby.addEventListener("click", bleuit);
// }

// :::::::::::::::::::::::::::::::

const rubyTous = document.querySelectorAll("ruby");

for (var i = 0; i < rubyTous.length; i++) {
  var ruby = rubyTous[i];
  var bleuit = function () {
    this.classList.toggle("blue");
    var rt = document.querySelector("rt");
    rt.classList.toggle("blue");

    // if (this.classList.contains)
  };
  ruby.addEventListener("click", bleuit);
}

// $$$$$$$$$$$$$$$$
