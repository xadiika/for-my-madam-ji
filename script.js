function moveRandomEl(elm) { 
    elm.style.position = "absolute"; 
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%"; 
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%"; 
    } 
    const moveRandom = document.querySelector("#move-random"); 
    moveRandom.addEventListener("mouseenter", function(e){ 
    moveRandom(e.target);});function showLetter() {
        // Hide the second page
        document.getElementById('page2').classList.add('hidden');
        
        // Show the third page
        document.getElementById('page3').classList.remove('hidden');
      }
      // Function to go to the next page
      function goToNextPage() {
        // Hide the third page
        document.getElementById('page3').classList.add('hidden');
        
        // Show the fourth page
        document.getElementById('page4').classList.remove('hidden');
      }
      // Function to simulate typing animation
      function typeText(element, text, speed, pauseAfterKya) {
        let index = 0;
        let isPaused = false;
      
        function type() {
          if (index < text.length) {
            // Check if the current word is "kya???"
            if (text.substring(index, index + 6) === "kya???") {
              isPaused = true;
              element.innerHTML = text.substring(0, index + 6);
              index += 6;
              setTimeout(() => {
                isPaused = false;
                type();
              }, pauseAfterKya); // Pause for 1 second after "kya???"
            } else {
              element.innerHTML = text.substring(0, index + 1);
              index++;
              setTimeout(type, speed);
            }
          }
        }
      
        type();
      }