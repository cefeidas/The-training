function showSlidesLoop(myArray) {
    for (let i=0; i < myArray.length; i++) {
        myArray[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > myArray.length) {
        slideIndex = 1;
    }
    myArray[slideIndex-1].style.display = 'block'
    setTimeout(() => showSlidesLoop(myArray), 2000) 
}

function showSlides(myArray) {
  for (let i = 0; i < myArray.length; i++) {
      myArray[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > myArray.length) {
      slideIndex = myArray.length;
  }
  myArray[slideIndex - 1].style.display = 'block';
  if (slideIndex < myArray.length) {
      setTimeout(() => showSlides(myArray), 2000);
  }
}

function muteOrUnmute(audioFiles) {
  for (let i = 0; i < audioFiles.length; i++) {
    audioFiles[i].muted = !audioFiles[i].muted;
  }
}

function checkFormInputs(event) {
  event.preventDefault();
  let damage = form.elements['damage'].value;
  let speed = form.elements['speed'].value;
  let magic = form.elements['magic'].value;
  if ((parseInt(damage) + parseInt(speed) + parseInt(magic)) > 4) {
    let errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = "<p>Please ensure all your points combined are not greater than 4!</p>";
    errorDiv.style.display = 'block';
  } else if ((parseInt(damage) + parseInt(speed) + parseInt(magic)) < 4) {
    let errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = "<p>Please spend all your available points!</p>";
    errorDiv.style.display = 'block';
  } else if (damage === '3' && speed === '1' && magic === '0'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='310.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '3' && speed === '0' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='301.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '2' && speed === '2' && magic === '0'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='220.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '2' && speed === '1' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='211.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '2' && speed === '0' && magic === '2'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='202.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '3' && magic === '0'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='130.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '2' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='121.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '1' && magic === '2'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='112.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '0' && magic === '3'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='103.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '0' && speed === '3' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='031.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '0' && speed === '2' && magic === '2'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='022.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '0' && speed === '1' && magic === '3'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a class='link' href='310.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  }
}

let slideIndex = 0;
let battle1 = document.querySelectorAll('.battle1');
let slides = document.querySelectorAll('.slides');
let slidesIntro = document.querySelectorAll('.slidesIntro');
let slidesCredits = document.querySelectorAll('.slidesCredits');
let audioFiles = document.querySelectorAll('audio');
let button = document.getElementById("button");
let intro1 = document.getElementById("intro1");
let intro2 =document.getElementById("intro2");
let form = document.getElementById("statsForm");




window.addEventListener("load", () => showSlidesLoop(Array.from(slides)));
if (window.location.pathname === "/introVideo.html") {
  window.addEventListener('load', () => showSlides(Array.from(slidesIntro)));
  }
  if (window.location.pathname === "/credits.html") {
    window.addEventListener('load', () => showSlidesLoop(Array.from(slidesCredits)));
    }
button.addEventListener("click", () => muteOrUnmute(audioFiles));
form.addEventListener('submit', checkFormInputs);