# The Training

An online strategy game where you must find the correct combinations of skills to defeat the dragon.

## Table of Contents

- [Game Description](#game-description)
  - [JavaScript Functions](#javascript-functions)
  - [Game Summary](#game-summary)
- [Gameplay](#gameplay)
- [Technologies Used](#technologies-used)
- [License](#license)

## Game Description

The game is designed as a short comic book, using static images that will slide or loop to guide the player through the narrative. The first part is a loop where the player is presented with the title and a message advising them to click anywhere to continue the game flow. Once the player clicks, they will be directed to a new HTML page containing a slideshow to tell the story. The hero and the dragon will be introduced, and the player will understand their task: The hero must train for four months to gain the necessary skills to defeat the dragon.
At the end of the slideshow, the user will be prompted to click anywhere again to be directed to the next page. The next page will be the game itself, where the user will be asked to fill out a form specifying which four skills they want to train. Once the player chooses, they can click the “submit button” with the value: “Let’s fight the dragon!”.
The following results are expected:
- If the total number of selected skill points is less than four, an alert message will pop up: “Please spend all your available points!”
- If the total number of selected skill points is more than four, an alert message will pop up: “Please ensure all your points combined are not greater than 4!”
- If the total number of selected skill points is exactly 4, the player will be directed to a slideshow where a turn-based battle between the hero and the dragon will take place. Only one of the possible battles will result in the victory of the hero.
At the end of the slideshow, a message will prompt the player to click anywhere. This way, they will be redirected to the first page again.
# javascript-functions:
The game uses the following JavaScript functions:

muteOrUnmute(audioFiles)
This function allows the user to mute or unmute every audio file in the game by using an array of audio file items. Here's the code for the function:
function muteOrUnmute(audioFiles) {
  for (let i = 0; i < audioFiles.length; i++) {
    audioFiles[i].muted = !audioFiles[i].muted;
  }
}
function showSlidesLoop(myArray)
This function will trigger every time a loop of slides is needed.
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
function showSlides(myArray) 
This function will trigger every time a loop of slides is needed.


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

function checkFormInputs(event)
This function will trigger when the results of the form are submitted, and will be responsible for the alerts if the provided data in the form is incorrect, or to redirect the user to the appropriate page.
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
    battleStats.innerHTML = "<a href='310.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '3' && speed === '1' && magic === '0'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='310.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '3' && speed === '0' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='301.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '2' && speed === '2' && magic === '0'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='220.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '2' && speed === '1' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='211.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '2' && speed === '0' && magic === '2'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='202.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '3' && magic === '0'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='130.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '2' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='121.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '1' && magic === '2'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='112.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '0' && magic === '3'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='103.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '0' && speed === '3' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='031.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '0' && speed === '2' && magic === '2'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='022.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '0' && speed === '1' && magic === '3'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='310.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  }
}


## Game Summary
The game is a puzzle game where the player must use trial and error to deduce the inner rules of the game. The objective is to find the perfect combination of skill points in order to defeat the opponent.

# Inner Rules
You have 4 months to train.
Every month gives you 1 skill point.
You master a skill in 3 months.
Skills
Damage
You start dealing 1 hit point each turn.
Each extra point allows you to deal +1 points of damage.
Speed
You start attacking once per turn.
If you spend 1 point in speed, you deal one extra attack every 3 turns.
If you spend 2 points in speed, you deal one extra attack every 2 turns.
If you spend 3 points in speed, you deal one extra attack every turn.
Magic
You start with no magic.
If you spend 1 point in magic, you cast a weak spell every 3 turns (you deal 2 points of damage).
If you spend 2 points in magic, you cast a medium spell every 3 turns (you deal 4 points of magic).
If you spend 3 points in magic, you cast a great spell every 3 turns (you deal 4 points of damage and heal 4 points).
Note: A very succinct version of these rules was developed in the early stages of development and can be found below.

</head>
<body>
    <script>
        // Declare prompt variables

        let attack;
        let speed;
        let magic;

        attack = parseInt(prompt('Attack: ', '0'), 10);
        speed = parseInt(prompt('Speed: ', '0'), 10);
        magic = parseInt(prompt('Magic: ', '0'), 10);


        // Declare action-turn variables

        let hero_initial_health_points;
        let dragon_initial_health_points;
        let turn_one_hero_deals_damage;
        let turn_one_dragon_deals_damage;
        let turn_one_hero_health_points;
        let turn_one_dragon_health_points;
        let turn_two_hero_deals_damage;
        let turn_two_dragon_deals_damage;
        let turn_two_hero_health_points;
        let turn_two_dragon_health_points;
        let turn_three_hero_deals_damage;
        let turn_three_hero_magic_damage;
        let turn_three_hero_attack_damage;
        let turn_three_dragon_deals_damage;
        let turn_three_hero_healing_spell;
        let turn_three_hero_health_points;
        let turn_three_dragon_health_points;
        let turn_four_hero_deals_damage;
        let turn_four_dragon_deals_damage;
        let turn_four_hero_health_points;
        let turn_four_dragon_health_points;
        let turn_five_hero_deals_damage;
        let turn_five_dragon_deals_damage;
        let turn_five_hero_health_points;
        let turn_five_dragon_health_points;

        // Define Initial Status

        hero_initial_health_points = 5;
        console.log('Hero initial health: ' + hero_initial_health_points);

        dragon_initial_health_points = 15;
        console.log('Dragon initial health: ' + dragon_initial_health_points);

        // Define Turn One Actions

        if (speed == 3) {
            turn_one_hero_deals_damage = 2* (attack + 1);
        } else {
            turn_one_hero_deals_damage = attack + 1;
        }

        turn_one_dragon_deals_damage = 2

        turn_one_hero_health_points = 5 - turn_one_dragon_deals_damage;
        turn_one_dragon_health_points = 15 - turn_one_hero_deals_damage;

        console.log('Hero Health Points after turn one: ' + turn_one_hero_health_points);
        console.log('Dragon Health Points after turn one: ' + turn_one_dragon_health_points);

        // Define Turn-Two Actions

        if (speed == 3 || speed == 2) {
            turn_two_hero_deals_damage = 2* (attack + 1);
        } else {
            turn_two_hero_deals_damage = attack + 1;
        }
        turn_two_dragon_deals_damage = 2;

        turn_two_hero_health_points = turn_one_hero_health_points - turn_two_dragon_deals_damage;
        turn_two_dragon_health_points = turn_one_dragon_health_points - turn_two_hero_deals_damage;

        console.log('Hero Health Points after turn two: ' + turn_two_hero_health_points);
        console.log('Dragon Health Points after turn two: ' + turn_two_dragon_health_points);

        // Define Turn-Three Actions

        if (speed == 1 || speed == 3) {
            turn_three_hero_attack_damage = 2* (attack + 1);
        } else {
            turn_three_hero_attack_damage = attack + 1;
        }
        if (magic == 1) {
            turn_three_hero_magic_damage = 2;
        } else if (magic == 2 || magic == 3 ) {
            turn_three_hero_magic_damage = 4;
        } else {
            turn_three_hero_magic_damage = 0;
        }
        if (magic == 3) {
            turn_three_hero_healing_spell = 4;
        } else {
            turn_three_hero_healing_spell = 0;
        }


        turn_three_hero_deals_damage = turn_three_hero_attack_damage + turn_three_hero_magic_damage;
        turn_three_dragon_deals_damage = 2;

        turn_three_hero_health_points = turn_two_hero_health_points - turn_three_dragon_deals_damage + turn_three_hero_healing_spell;
        turn_three_dragon_health_points = turn_two_dragon_health_points - turn_three_hero_deals_damage;

        console.log('Hero Health Points after turn three: ' + turn_three_hero_health_points);
        console.log('Dragon Health Points after turn three: ' + turn_two_dragon_health_points);

        // Define Turn-Four Actions

        if (speed == 3 || speed == 2) {
            turn_four_hero_deals_damage = 2* (attack + 1);
        } else {
            turn_four_hero_deals_damage = attack + 1;
        }

        turn_four_dragon_deals_damage = 2

        turn_four_hero_health_points = turn_three_hero_health_points - turn_four_dragon_deals_damage;
        turn_four_dragon_health_points = turn_three_dragon_health_points - turn_four_hero_deals_damage;

        console.log('Hero Health Points after turn four: ' + turn_four_hero_health_points);
        console.log('Dragon Health Points after turn four: ' + turn_four_dragon_health_points);

        // Define Turn-Five Actions

        if (speed == 3)  {
            turn_five_hero_deals_damage = 2* (attack + 1);
        } else {
            turn_five_hero_deals_damage = attack + 1;
        }

        turn_five_dragon_deals_damage = 2

        turn_five_hero_health_points = turn_four_hero_health_points - turn_five_dragon_deals_damage;
        turn_five_dragon_health_points = turn_four_dragon_health_points - turn_five_hero_deals_damage;

        console.log('Hero Health Points after turn five: ' + turn_five_hero_health_points);
        console.log('Dragon Health Points after turn five: ' + turn_five_dragon_health_points);
    </script>
</body>
</html>

## Gameplay

Playing the game is as simple as opening it on a browser and following the instructions. To advance the game flow, you just need to click anywhere when prompted. Once you reach the form page, you need to fill it out according to the instructions and click to see the results. Here is a more detailed explanation of all game features:
# Index page:
On the index page, you have a loop and three options. You can click on the top-left corner to unmute the music, click the credits button to see a slideshow with all the credits, or click anywhere to be redirected to introVideo.html.
# Credits:
On the credits page, you will see a slideshow with the credits. You can exit this page by clicking the last image.
# introVideo:
On the introVideo page, you will see a slideshow with a brief narrative of the game. You can advance to the next page by clicking the last image.
# form.
On the form page, you will be asked to choose where to use your 4 available skill points
# battle pages:
Depending on your chosen combination of skills, you will be redirected to a different page. There are a total of 12 different valid combinations, each leading to a set of turns that represent the rules explained earlier. At the end of this slideshow, you can click on the last image to return to the main page.

## Technologies Used

The following platforms were used to document my work:
# Stack Overflow:
I researched examples of a mute/unmute button, slideshows, and working with arrays.
# w3schools
I learned about arrays, the function Array.from(), foreach(), and the differences between an array, an HTML collection, and a node list, and how to work with each one correctly. It took me some time to understand these concepts. 
# slack
I resolved some doubts and received help from the community here.
# Google Chrome Developer tools
I ensured my program looked good on every computer size, and there were no errors, other than some undefined properties that would defined later on (on another html file)
# pixl
I used pixl to edit the images. I used some of the fonts, images and resources including in this program.

## License
My game uses images and music from creative commons sources.

- The images: All images were created by upklyak and are available on Freepik.
- The battle effects: I used some effects to add to the battle. These effects are images found on opengames.org, uploaded by BenHickling, MetaShinryu, and cdgramos.
- The music: The three different music files were obtained from Opengames.org, uploaded by the user "spring spring".