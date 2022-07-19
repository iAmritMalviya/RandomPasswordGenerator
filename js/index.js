console.log("you are in index.js");

$("#success").hide();
$("#failure").hide();
var btn = document.getElementById("btn");
let clear = document.getElementById("clear");

const e = document.getElementById("ddlViewBy");
function show() {
  max = e.options[e.selectedIndex].value;
}
e.onchange = show;
show();

btn.addEventListener("click", function generate() {
  let password = document.getElementById("password");
  let generatepassword = "";
  let character =
    "0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM,./<>?;':\"|[]{}-=_+()*&^%$#@!~";

  let iSmall = document.getElementById("iSmall");
  let iCapital = document.getElementById("iCapital");
  let iAll = document.getElementById("iAll");
  let iNumber = document.getElementById("iNumber");
  let iSymbol = document.getElementById("iSymbol");

  if (
    (iNumber.checked &&
      iSmall.checked &&
      iCapital.checked &&
      iSymbol.checked) ||
    iAll.checked
  ) {
    for (let i = 0; i < max; i++) {
      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iNumber.checked && iSmall.checked && iCapital.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/[^0-9A-Za-z]/g, "");
      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iNumber.checked && iSymbol.checked && iCapital.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/[a-z]/g, "");
      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iNumber.checked && iSmall.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/([^0-9a-z])/g, "");

      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iNumber.checked && iCapital.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/([^0-9A-Z])/g, "");

      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iNumber.checked && iSymbol.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/([a-zA-Z])/g, "");

      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iSmall.checked && iSymbol.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/([0-9A-Z])/g, "");

      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iSmall.checked && iCapital.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/([^a-zA-Z])/g, "");

      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iSymbol.checked && iCapital.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/([a-z0-9])/g, "");

      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iNumber.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/\D/g, "");

      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iSmall.checked) {
    console.log("clicked");

    for (let i = 0; i < max; i++) {
      character = character.replace(/[^a-z]/g, "");
      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iCapital.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/[^A-Z]/g, "");
      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else if (iSymbol.checked) {
    for (let i = 0; i < max; i++) {
      character = character.replace(/[a-z0-9A-Z]/g, "");
      generatepassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    password.value = generatepassword;
  } else {
    password.placeholder = "Alteast select one of those";
  }
});
let copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", () => {
  if (password.value == "") {
    $("#failure").show();
  } else {
    $("#success").show();
    password.select();
    navigator.clipboard.writeText(password.value);
  }
  setTimeout(() => {
    $("#success").hide();
    $("#failure").hide();
  }, 1000);
});

clear.addEventListener("click", () => {
  password.value = "";
});
let iAll = document.getElementById("iAll");
iAll.addEventListener("click", () => {
  iNumber.checked = false;
  iSmall.checked = false;
  iCapital.checked = false;
  iSymbol.checked = false;
});
