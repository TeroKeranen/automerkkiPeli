/////////// Random kuva sivulle /////////////////////

randomNum = Math.trunc(Math.random() * +15); // Luodaan random numero
console.log(randomNum);
img = document.querySelector("img"); // valitaan img element
randomImage = "kuvat/auto" + randomNum + ".png"; // luodaan polku kuvalle randomNumeron mukaan
img.setAttribute("src", randomImage); // Asetetaan kuva näytölle

oikeinArvattu = 0; // laskin joka laskee oikein arvatut merkit
arvattuOikein = document.querySelector(".correct-answers"); // Valitsee correct answer classin

highScoreSpan = document.querySelector(".highScore-value"); // Valitaan highscore
highScore = 0; // Highscore laskin

//////////////////////////////////////////////////////////

//////////// functio joka asettaa highscore esille//////////
function setHighScore() {
  highScore = oikeinArvattu;
  highScoreSpan.textContent = highScore;
}
//////////////////////////////////////////////////

///////CorrectAnswer functio pisteen laskuun /////////////
function correctAnswers() {
  oikeinArvattu++;
  arvattuOikein.textContent = oikeinArvattu;
}
/////////////////////////////////////////////////////////

////////////////////////Function joka nollaa pelin väärin vastattaessa//////////////////
function setTimer() {
  sekunnit = 5;
  let intervalSet = setInterval(gameOverTimer, 1000);

  function gameOverTimer() {
    oikeinArvattu = 0;
    document.querySelector(
      "h1"
    ).textContent = `Hävisit pelin. Peli alkaa alusta ${sekunnit} sekunnin kuluttua...`;
    sekunnit--;
    document.querySelector("h1").style.fontSize = "40px";

    if (sekunnit < 0) {
      document.querySelector("h1").textContent = "Arvaa automerkki";
      document.querySelector("h1").style.fontSize = "30px";
      document.querySelector(".arvaus").value = "";
      document.querySelector(".correct-answers").textContent = oikeinArvattu;
      clearInterval(intervalSet);
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////Luodaan testi function joka toimii onclickin kauttta //////////////////////////////////
function testi() {
  ///// arvaus function alkaa ////// functio arvaus. Jos vastaus on oikein niin tulee uusi kuva esille
  function arvaus() {
    ////// Random functio alkaa /////// functio random. Toimii vain silloin kun function arvaus on true.
    function random() {
      randomNum = Math.trunc(Math.random() * +15); //function randomin sisälle luodaan uusi random numero.
      img = document.querySelector("img"); // valitaan taas img elemenet
      randomImage = "kuvat/auto" + randomNum + ".png"; // Tehdään taas kuvan polku
      img.setAttribute("src", randomImage); // Asetetaan uusi kuva
      correctAnswers.textContent = oikeinArvattu;
      document.querySelector(".arvaus").value = "";
    }
    ////// Random functio loppuu ///////

    if (arrayNum === randomNum) {
      correctAnswers();
      random();

      if (oikeinArvattu > highScore) {
      }
    } else if (arrayNum !== randomNum) {
      setHighScore();
      setTimer();
    }
  }
  ///// arvaus function loppuu ////

  // Luokaan objecti johon sijoitetaan autot ja annetaan avaimet niille
  const autot = {
    tesla: 0,
    bmw: 1,
    ferrari: 2,
    toyota: 3,
    honda: 4,
    nissan: 5,
    ford: 6,
    porsche: 7,
    lamborghini: 8,
    bentley: 9,
    maserati: 10,
    audi: 11,
    subaru: 12,
    cadillac: 13,
    chrysler: 14,
  };

  let arvaa = document.querySelector(".arvaus").value; // Otetaan arvaus class value talteen
  let arrayNum = autot[arvaa]; // katsoo vastauksen array numeron
  let objectKey = Object.keys(autot)[arrayNum]; // kertoo array2 numeron vastauksen --- Ei tässä tapauksessa tarpeellinen mutta harjoituksen kannalta oli hyvä tajuta tämä toiminto.
  arvaus(); // Arvaus functio joka sisältää random function
}
////////////////////////////////////////////////////////
