// STORE ALL CHARACTERS IN A VARIABLE

const chars =
  "0123456789abcdefghijklmnopqrstuvwxyz@#$&*%?ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// DECLARE A VARIABLE CALLED PASSWORLENGTH AND ASSIGN IT A VARIABLE OF 8

let passwordLength = 8;

// GET PASSWORD ID'S AND STORE IN A VARIABLE

const passwordOne = document.getElementById("password-one");
// const passwordTwo = document.getElementById('password-two');
// const passwordThree = document.getElementById('password-three');
// const passwordFour = document.getElementById('password-four');

// GET THE SLIDER ID'S AND STORE IN A VARIABLE (INPUT: TYPE: RANGE)

let slideNumber = document.getElementById("slide-number");
const slider = document.getElementById("slider");

// CREATE AN EVENT LISTENER TO LISTEN FOR A CLICK ON THE GENERATE PASSWORDS BUTTON

document.querySelector(".btn").addEventListener("click", function () {
  // SET PASSWORD TO UNDEFINED
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    // PASSWORD IS RANDOM CHARACTERS GENERATED
    password += chars[randomNumber];

    console.log(password);
  }

  passwordOne.innerText = password;
  passwordOne.style.color = "#55f991";
  passwordOne.style.display = "flex";
  passwordOne.style.alignItems = "center";
  passwordOne.style.justifyContent = "center";
  passwordOne.style.padding = "1rem 1.5rem";
  passwordOne.style.fontSize = "20px";
  passwordOne.style.letterSpacing = "4";
});

slider.addEventListener("input", function () {
  slideNumber.innerText = slider.value;

  passwordLength = slider.value;

  console.log(slideNumber);
});

const copyText = document.querySelector(".button-two");

copyText.addEventListener("click", function () {
  const copyInnerText = passwordOne.innerText;

  navigator.clipboard.writeText(copyInnerText).then(function () {
    if (copyInnerText === "") {
      const div = document.createElement("div");

      div.className = "copy";

      div.style.textAlign = "center";
      div.style.marginTop = "2rem";
      div.style.color = "red";

      div.appendChild(document.createTextNode("Please generate a passcode!"));

      const container = document.querySelector(".container");

      container.appendChild(div);

      setTimeout(function () {
        document.querySelector(".copy").remove();
      }, 2000);
      
    } else {
      const div = document.createElement("div");

      div.className = "copy";

      div.style.textAlign = "center";
      div.style.marginTop = "2rem";
      div.style.color = " #10b981";

      div.appendChild(document.createTextNode("Generated code copied......"));

      const container = document.querySelector(".container");

      container.appendChild(div);

      setTimeout(function () {
        document.querySelector(".copy").remove();
      }, 2000);
    }
  });

  console.log(copyInnerText);
});
