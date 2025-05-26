// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like");
likeButtons.forEach(function (likeHeart) {
  likeHeart.addEventListener("click", function () {
    mimicServerCall()
      .then(() => {
        const likeButton = this.querySelector(".like-glyph");
        if (likeButton.classList.contains("activated-heart")) {
          // if it has the aivated-heart class, remove the class and change text to empty heart
          console.log("This is the if!");
          likeButton.classList.remove("activated-heart");
          likeButton.textContent = EMPTY_HEART;
        } else {
          likeButton.classList.add("activated-heart");
          likeButton.textContent = FULL_HEART;
          // else adding the class and changing heart to full
          console.log("This is the else!");
        }
      })
      .catch((error) => {
        const errorModal = document.getElementById("modal");
        errorModal.classList.remove("hidden");
        const errorMessage = document.getElementById("modal-message");
        errorMessage.textContent = error;
        setTimeout(function () {
          errorModal.classList.add("hidden");
        }, 3000);
        // setTimeout to add it back after 3 seconds
      }); // error modal
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
