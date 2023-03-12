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


let slides = document.querySelectorAll('.slidesBattle');
let slideIndex = 0;
let audioFiles = document.querySelectorAll('audio');

window.addEventListener("load", () => showSlides(Array.from(slides)));
button.addEventListener("click", () => muteOrUnmute(audioFiles));