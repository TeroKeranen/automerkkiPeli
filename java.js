/////////// Random kuva sivulle /////////////////////

randomNum = Math.trunc(Math.random() * +6); // Luodaan random numero
img = document.querySelector("img"); // valitaan img element
randomImage = "kuvat/auto" + randomNum + ".png"; // luodaan polku kuvalle randomNumeron mukaan
img.setAttribute("src", randomImage); // Asetetaan kuva näytölle

oikeinArvattu = 0;
ArvattuOikein = document.querySelector(".correct-answers");

highScoreSpan = document.querySelector(".highScore-value"); // Valitaan highscore
highScore = 0;

//////////////////////////////////////////////////////////

function correctAnswers() {
  oikeinArvattu++;
  ArvattuOikein.textContent = oikeinArvattu;
}

///////////////////Luodaan testi function joka toimii onclickin kauttta //////////////////////////////////
function testi() {
  ///// arvaus function alkaa ////// functio arvaus. Jos vastaus on oikein niin tulee uusi kuva esille
  function arvaus() {
    ////// Random functio alkaa /////// functio random. Toimii vain silloin kun function arvaus on true.
    function random() {
      randomNum = Math.trunc(Math.random() * +6); //function randomin sisälle luodaan uusi random numero.
      img = document.querySelector("img"); // valitaan taas img elemenet
      randomImage = "kuvat/auto" + randomNum + ".png"; // Tehdään taas kuvan polku
      img.setAttribute("src", randomImage); // Asetetaan uusi kuva
      correctAnswers.textContent = oikeinArvattu;
    }
    ////// Random functio loppuu ///////

    if (arrayNum === randomNum) {
      correctAnswers();
      random();

      if (oikeinArvattu > highScore) {
        highScore = oikeinArvattu;
      }
    } else if (arrayNum !== randomNum) {
      console.log("eiii");
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
  };

  let arvaa = document.querySelector(".arvaus").value; // Otetaan arvaus class value talteen
  let arrayNum = autot[arvaa]; // katsoo vastauksen array numeron
  let objectKey = Object.keys(autot)[arrayNum]; // kertoo array2 numeron vastauksen --- Ei tässä tapauksessa tarpeellinen mutta harjoituksen kannalta oli hyvä tajuta tämä toiminto.
  arvaus(); // Arvaus functio joka sisältää random function
}
////////////////////////////////////////////////////////
