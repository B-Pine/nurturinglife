const userName = document.querySelector(".username");
const userAge = document.querySelector(".user-age");
const startButton = document.querySelector(".start-button")

startButton.addEventListener('click', () => {
  if (userName.value !== "") {
    if (userAge.value !== "") {
      let name1 = userName.value;
      name1 = name1.charAt(0).toUpperCase() + name1.slice(1);
      alert(`${name1}, Welcome to Nurturing Life Guess Game`);

      window.location.href = "./index.html";

    } else {
      document.querySelector('.age-validator').style.display = "block";


      setTimeout(() => {
        document.querySelector('.age-validator').style.display = "none";
      }, 2000);
    }
    
  } else {
      document.querySelector('.name-validator').style.display = "block";

      setTimeout(() => {
        document.querySelector('.name-validator').style.display = "none";
      }, 2000);
  }
  
})

