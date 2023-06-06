const HomeBtn = document.querySelector('.app-guide-btn');
const instructionTxt = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop')

function openModal() {
  backdrop.style.display = "block";
  instructionTxt.style.display = "block";
}

function closeModal() {
    backdrop.style.display = "none";
    instructionTxt.style.display = "none";
}

backdrop.addEventListener("click", closeModal)
HomeBtn.addEventListener("click", openModal)





