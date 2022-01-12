// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


//Minha Parte

//Encontrar todos os carrosseis
ascentSlide = document.querySelectorAll(".ascentSlide");
splitSlide = document.querySelectorAll(".splitSlide");
havenSlide = document.querySelectorAll(".havenSlide");
bindSlide = document.querySelectorAll(".bindSlide");
iceboxSlide = document.querySelectorAll(".iceboxSlide");
breezeSlide = document.querySelectorAll(".breezeSlide");
fractureSlide = document.querySelectorAll(".fractureSlide");

//Encontrar todos os dots
dotAscent = document.querySelectorAll(".dotAscent");
dotSplit = document.querySelectorAll(".dotSplit");
dotHaven = document.querySelectorAll(".dotHaven");
dotBind = document.querySelectorAll(".dotBind");
dotIcebox = document.querySelectorAll(".dotIcebox");
dotBreeze = document.querySelectorAll(".dotBreeze");
dotFracture = document.querySelectorAll(".dotFracture");

// Esconder todos os slides
activateAscent(0);
activateSplit(0);
activateHaven(0)
activateBind(0)
activateIcebox(0)
activateBreeze(0)
activateFracture(0)

// Adicionar ouvintes aos dots
dotAscent.forEach(element => {
  element.addEventListener("click", (e) => {
    positionIndex = e.target.dataset.position - 1;
    activateAscent(positionIndex)
  });
})
dotSplit.forEach(element => {
  element.addEventListener("click", (e) => {
    positionIndex = e.target.dataset.position - 1;
    activateSplit(positionIndex)
  });
})
dotHaven.forEach(element => {
  element.addEventListener("click", (e) => {
    positionIndex = e.target.dataset.position - 1;
    activateAscent(positionIndex)
  });
})
dotBind.forEach(element => {
  element.addEventListener("click", (e) => {
    positionIndex = e.target.dataset.position - 1;
    activateAscent(positionIndex)
  });
})
dotIcebox.forEach(element => {
  element.addEventListener("click", (e) => {
    positionIndex = e.target.dataset.position - 1;
    activateAscent(positionIndex)
  });
})
dotBreeze.forEach(element => {
  element.addEventListener("click", (e) => {
    positionIndex = e.target.dataset.position - 1;
    activateAscent(positionIndex)
  });
})
dotFracture.forEach(element => {
  element.addEventListener("click", (e) => {
    positionIndex = e.target.dataset.position - 1;
    activateAscent(positionIndex)
  });
})

// ativar Ascent Slides
function activateAscent(index) {
  // Esconde os slides todos
  ascentSlide.forEach(element => {
    element.style.display = "none";
    return element;
  });

  // Mostra o slide com o index informado
  ascentSlide[index].style.display = "block";

  activateAscentDot(index + 1)
}

function activateAscentDot(position) {
  dotAscent.forEach(element => {
    ePosition = element.dataset.position;
    element.classList.remove("active");

    if (ePosition == position)
      element.classList.add("active");

    return element;
  });
}

// ativar Ascent Slides
function activateSplit(index) {
  // Esconde os slides todos
  splitSlide.forEach(element => {
    element.style.display = "none";
    return element;
  });

  // Mostra o slide com o index informado
  splitSlide[index].style.display = "block";

  activateSplitDot(index + 1)
}

function activateSplitDot(position) {
  dotSplit.forEach(element => {
    ePosition = element.dataset.position;
    element.classList.remove("active");

    if (ePosition == position)
      element.classList.add("active");

    return element;
  });
}

// ativar Haven Slides
function activateHaven(index) {
  // Esconde os slides todos
  havenSlide.forEach(element => {
    element.style.display = "none";
    return element;
  });

  // Mostra o slide com o index informado
  havenSlide[index].style.display = "block";

  activateHavenDot(index + 1)
}

function activateHavenDot(position) {
  dotHaven.forEach(element => {
    ePosition = element.dataset.position;
    element.classList.remove("active");

    if (ePosition == position)
      element.classList.add("active");

    return element;
  });
}

// ativar Bind Slides
function activateBind(index) {
  // Esconde os slides todos
  bindSlide.forEach(element => {
    element.style.display = "none";
    return element;
  });

  // Mostra o slide com o index informado
  bindSlide[index].style.display = "block";

  activateBindDot(index + 1)
}

function activateBindDot(position) {
  dotBind.forEach(element => {
    ePosition = element.dataset.position;
    element.classList.remove("active");

    if (ePosition == position)
      element.classList.add("active");

    return element;
  });
}

// ativar Icebox Slides
function activateIcebox(index) {
  // Esconde os slides todos
  iceboxSlide.forEach(element => {
    element.style.display = "none";
    return element;
  });

  // Mostra o slide com o index informado
  iceboxSlide[index].style.display = "block";

  activateIceboxDot(index + 1)
}

function activateIceboxDot(position) {
  dotIcebox.forEach(element => {
    ePosition = element.dataset.position;
    element.classList.remove("active");

    if (ePosition == position)
      element.classList.add("active");

    return element;
  });
}

// ativar Fracture Slides
function activateFracture(index) {
  // Esconde os slides todos
  fractureSlide.forEach(element => {
    element.style.display = "none";
    return element;
  });

  // Mostra o slide com o index informado
  fractureSlide[index].style.display = "block";

  activateFractureDot(index + 1)
}

function activateFractureDot(position) {
  dotFracture.forEach(element => {
    ePosition = element.dataset.position;
    element.classList.remove("active");

    if (ePosition == position)
      element.classList.add("active");

    return element;
  });
}

// ativar Breeze Slides
function activateBreeze(index) {
  // Esconde os slides todos
  breezeSlide.forEach(element => {
    element.style.display = "none";
    return element;
  });

  // Mostra o slide com o index informado
  breezeSlide[index].style.display = "block";

  activateBreezeDot(index + 1)
}

function activateBreezeDot(position) {
  dotBreeze.forEach(element => {
    ePosition = element.dataset.position;
    element.classList.remove("active");

    if (ePosition == position)
      element.classList.add("active");

    return element;
  });
}

// ações para o privious
function changeSlide(object) {
  slide = object.dataset.slide;
  direction = object.className;

  switch (slide) {
    case "ascent":
      activePosition = parseInt(document.getElementsByClassName('dotAscent active')[0].dataset.position);
      totalPosition = parseInt(document.getElementsByClassName('dotAscent').length);

      if (direction == "prev") {
        if (activePosition == 1)
          activateAscent(totalPosition - 1);
        else
          activateAscent(activePosition - 2);
      }

      if (direction == "next") {
        if (activePosition == totalPosition)
          activateAscent(0);
        else
          activateAscent(activePosition);
      }
      break;
    case "split":
      activePosition = parseInt(document.getElementsByClassName('dotSplit active')[0].dataset.position);
      totalPosition = parseInt(document.getElementsByClassName('dotSplit').length);

      if (direction == "prev") {
        if (activePosition == 1)
          activateSplit(totalPosition - 1);
        else
          activateSplit(activePosition - 2);
      }

      if (direction == "next") {
        if (activePosition == totalPosition)
          activateSplit(0);
        else
          activateSplit(activePosition);
      }
      break;
    case "haven":
      activePosition = parseInt(document.getElementsByClassName('dotHaven active')[0].dataset.position);
      totalPosition = parseInt(document.getElementsByClassName('dotHaven').length);

      if (direction == "prev") {
        if (activePosition == 1)
          activateHaven(totalPosition - 1);
        else
          activateHaven(activePosition - 2);
      }

      if (direction == "next") {
        if (activePosition == totalPosition)
          activateHaven(0);
        else
          activateHaven(activePosition);
      }
      break;
    case "breeze":
      activePosition = parseInt(document.getElementsByClassName('dotBreeze active')[0].dataset.position);
      totalPosition = parseInt(document.getElementsByClassName('dotBreeze').length);

      if (direction == "prev") {
        if (activePosition == 1)
          activateBreeze(totalPosition - 1);
        else
          activateBreeze(activePosition - 2);
      }

      if (direction == "next") {
        if (activePosition == totalPosition)
          activateBreeze(0);
        else
          activateBreeze(activePosition);
      }
      break;
    case "fracture":
      activePosition = parseInt(document.getElementsByClassName('dotFracture active')[0].dataset.position);
      totalPosition = parseInt(document.getElementsByClassName('dotFracture').length);

      if (direction == "prev") {
        if (activePosition == 1)
          activateFracture(totalPosition - 1);
        else
          activateFracture(activePosition - 2);
      }

      if (direction == "next") {
        if (activePosition == totalPosition)
          activateFracture(0);
        else
          activateFracture(activePosition);
      }
      break;
    case "icebox":
      activePosition = parseInt(document.getElementsByClassName('dotIcebox active')[0].dataset.position);
      totalPosition = parseInt(document.getElementsByClassName('dotIcebox').length);

      if (direction == "prev") {
        if (activePosition == 1)
          activateIcebox(totalPosition - 1);
        else
          activateIcebox(activePosition - 2);
      }

      if (direction == "next") {
        if (activePosition == totalPosition)
          activateIcebox(0);
        else
          activateIcebox(activePosition);
      }
      break;
    case "bind":
      activePosition = parseInt(document.getElementsByClassName('dotBind active')[0].dataset.position);
      totalPosition = parseInt(document.getElementsByClassName('dotBind').length);

      if (direction == "prev") {
        if (activePosition == 1)
          activateBind(totalPosition - 1);
        else
          activateBind(activePosition - 2);
      }

      if (direction == "next") {
        if (activePosition == totalPosition)
          activateBind(0);
        else
          activateBind(activePosition);
      }
      break;
  }
}