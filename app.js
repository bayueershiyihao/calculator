const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

let temp = "";
let inputValue = "";
let boollen = true;
let s1 = 0;

buttons.forEach((e) => {
  e.addEventListener("click", function () {
    const value = e.value;
    if (e.value) {
      inputValue = value;
      temp += Number(inputValue);
      if (boollen) {
        input.value += Number(inputValue);
      } else {
        boollen = true;
        input.value = "";
        input.value += value;
      }
    }
    if (input.value != "") {
      if (e.classList.contains("plus")) {
        boollen = false;
        temp += "+";
      }
      if (e.classList.contains("minus")) {
        input.value = eval(temp);
        boollen = false;
        temp += "-";
      }
      if (e.classList.contains("division")) {
        input.value = eval(temp);
        boollen = false;
        temp += "/";
      }
      if (e.classList.contains("multiply")) {
        input.value = eval(temp);
        boollen = false;
        temp += "*";
      }
      if (e.classList.contains("clear")) {
        temp = "";
        input.value = "";
      }
      if (e.classList.contains("result")) {
        boollen = false;
        input.value = eval(temp);
        s1 = eval(temp);
        temp = s1;
        console.log(temp);
      }
    }
  });
});
