const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/beyonce.jpg") {
    myImage.setAttribute("src", "images/beyonceer2.jpg");
  } else {
    myImage.setAttribute("src", "images/beyonce.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Beyonce is cool, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Beyonce is cool, ${storedName}`;
  }

myButton.onclick = () => {
setUserName();
};