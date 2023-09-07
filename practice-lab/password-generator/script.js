const pwd_range = document.getElementById("length");
const min_length = document.getElementById("min_length");
const max_length = document.getElementById("max_length");

const uppercase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowerCase");
const number = document.getElementById("number");
const symbols = document.getElementById("symbols");
const generate_btn = document.getElementById("generate_btn");
const pwd_result = document.getElementById("pwd_result");
const copy_btn = document.getElementById("copy");

function passwordGenerator() {
  const length = parseInt(pwd_range.value);
  const includeUppercase = uppercase.checked;
  const includeLowerCase = lowerCase.checked;
  const includeNumber = number.checked;
  const includeSymbols = symbols.checked;

  const password = randomPasswordGenerator(
    length,
    includeLowerCase,
    includeUppercase,
    includeSymbols,
    includeNumber
  );
  if (password.length > 0) {
    pwd_result.value = password;
  }
}

function randomPasswordGenerator(
  length,
  includeLowerCase,
  includeUppercase,
  includeSymbols,
  includeNumber
) {
  let charset = [];
  let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerAlpha = upperAlpha.toLowerCase();

  if (includeLowerCase) charset.push(lowerAlpha);
  if (includeUppercase) charset.push(upperAlpha);
  if (includeNumber) charset.push("0123456789");
  if (includeSymbols) charset.push("!@#$%^&*()_+:|<>?/");

  if (charset.length < 1) {
    alert("Please choose the given fields atleast one.");
  }
  let password = [];
  for (let i = 0; i < length; i++) {
    let randomCharIdx = Math.floor(Math.random() * charset.length);
    let selectCharset = charset[randomCharIdx];
    let selectedCharIdx = Math.floor(Math.random() * selectCharset.length);
    let selectedChar = selectCharset[selectedCharIdx];
    password.push(selectedChar);
  }
  return password.join("");
}

generate_btn.addEventListener("click", passwordGenerator);

pwd_range.addEventListener("input", function (e) {
  max_length.innerText = this.value;
  min_length.innerText = this.min;
});

function copyPassword() {
  if (pwd_result.value) {
    navigator.clipboard.writeText(pwd_result.value);
  } else {
    navigator.clipboard.writeText("🥚");
  }
}

copy_btn.addEventListener("click", copyPassword);
