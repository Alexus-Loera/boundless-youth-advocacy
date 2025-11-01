// Add JavaScript code for your web site here and call it from index.html.
let themeButton = document.getElementById("theme-button");
// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");
   
}
themeButton.addEventListener("click", toggleDarkMode);

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const nameInput = document.getElementById("name");
  const hometownInput = document.getElementById("hometown");
  const emailInput = document.getElementById("email");
  const signNowButton = document.getElementById("sign-now-button");
  const signaturesDiv = document.getElementById("signatures");
  const counter = document.getElementById("counter");
  const modal = document.getElementById("thanks-modal"); // Modal container
  const modalTextContainer = document.getElementById("modal-text-container"); // Modal text container

  // Function to handle form submission
  function handleSignPetition() {
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
          nameInput.classList.add("error");
          isValid = false;
      } else {
          nameInput.classList.remove("error");
      }

      // Validate Hometown
      if (!hometownInput.value.trim()) {
          hometownInput.classList.add("error");
          isValid = false;
      } else {
          hometownInput.classList.remove("error");
      }

      // Validate Email
      if (!emailInput.value.trim()) {
          emailInput.classList.add("error");
          isValid = false;
      } else {
          emailInput.classList.remove("error");
      }

      // If validation passes
      if (isValid) {
          // Add a new signature to the list
          const newSignature = document.createElement("p");
          newSignature.textContent = `🖊️ ${nameInput.value} from ${hometownInput.value} supports this petition.`;
          signaturesDiv.appendChild(newSignature);

          // Update counter
          const currentCount = parseInt(counter.textContent.match(/\d+/)[0], 10);
          counter.textContent = `🖊️ ${currentCount + 1} people have signed this petition and support this cause.`;

          // Trigger the modal with user's name
          toggleModal(nameInput.value);

          // Clear form inputs
          nameInput.value = "";
          hometownInput.value = "";
          emailInput.value = "";
      }
  }

  // Define variables outside any function
let scaleFactor = 1; // Used to toggle image size
let modalImage = document.querySelector("#thanks-modal img"); // Select the image in the modal

// Function to scale the image
function scaleImage() {
    // Toggle scale factor between 1 and 0.8
    scaleFactor = scaleFactor === 1 ? 0.8 : 1;

    // Apply the scale transformation to the image
    modalImage.style.transform = `scale(${scaleFactor})`;
}

// Function to toggle the modal
function toggleModal(person) {
  const modal = document.getElementById("thanks-modal");
  const modalTextContainer = document.getElementById("modal-text-container");

  // Set the thank you message
  modalTextContainer.textContent = `Thank you, ${person}, for signing the petition!`;

  // Show the modal
  modal.style.display = "flex";

    // Start the image animation
    let intervalId = setInterval(scaleImage, 500); // Call scaleImage every 500ms (0.5 seconds)

    // Automatically hide the modal after 4 seconds
    setTimeout(() => {
        modal.style.display = "none"; // Hide the modal
        clearInterval(intervalId);   // Stop the animation
    }, 4000); // 4000 milliseconds = 4 seconds
}


  // Add event listener to the button
  signNowButton.addEventListener("click", handleSignPetition);
  
});

document.addEventListener("DOMContentLoaded", () => {
  const closeModalBtn = document.getElementById("close-modal-btn"); // Get the button

  function closeModal() {
    const modal = document.getElementById("thanks-modal"); // Get the modal element
    modal.style.display = "none"; // Hide the modal when the button is clicked
  }

  // Add event listener to the close button
  closeModalBtn.addEventListener("click", closeModal);
});
