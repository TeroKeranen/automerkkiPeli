/////////// Random kuva sivulle /////////////////////

randomNum = Math.trunc(Math.random() * +6); // Luodaan random numero
img = document.querySelector("img"); // valitaan img element
randomImage = "kuvat/auto" + randomNum + ".png"; // luodaan polku kuvalle randomNumeron mukaan
img.setAttribute("src", randomImage); // Asetetaan kuva näytölle

///////////////////////////////////////////////////////////

function testi() {
  function arvaus() {
    // functio arvaus. Jos vastaus on oikein niin tulee uusi kuva esille
    function random() {
      // functio random. Toimii vain silloin kun function arvaus on true.
      randomNum = Math.trunc(Math.random() * +6); //function randomin sisälle luodaan uusi random numero.
      img = document.querySelector("img"); // valitaan taas img elemenet
      randomImage = "kuvat/auto" + randomNum + ".png"; // Tehdään taas kuvan polku
      img.setAttribute("src", randomImage); // Asetetaan uusi kuva
    }

    if (arrayNum === randomNum) {
      console.log("oikein");
      random();

      img.setAttribute("src", randomImage);
      console.log(`arvauksesi : ${arvaa}`);
      console.log(`random numero : ${randomNum}`);
      console.log(`array num numero : ${arrayNum}`);
    } else if (arrayNum !== randomNum) {
      console.log("eiii");
    }
  }

  // Luokaan objecti
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
