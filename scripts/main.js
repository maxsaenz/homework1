const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/beyonce.png") {
    myImage.setAttribute("src", "images/lana.png");
  } else {
    myImage.setAttribute("src", "images/beyonce.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my site, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my site, ${storedName}`;
  }

myButton.onclick = () => {
setUserName();
};

document.querySelector("html").addEventListener("click", function () {
  alert("There's more to come soon!!");
});