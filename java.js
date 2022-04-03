/////////// Random kuva sivulle /////////////////////

randomNum = Math.trunc(Math.random() * +6); // Luodaan random numero
img = document.querySelector("img"); // valitaan img element
randomImage = "kuvat/auto" + randomNum + ".png"; // luodaan polku kuvalle randomNumeron mukaan
img.setAttribute("src", randomImage); // Asetetaan kuva näytölle

///////////////////////////////////////////////////////////
