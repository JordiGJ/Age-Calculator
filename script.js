// get elements
const date = document.querySelector("#date");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");
const showYears = document.querySelector("#showYears");

const calculateAge = (e) => {
  e.preventDefault();
  const today = new Date();
  const birth = date.value;
  // user clicks without giving any information
  if (birth === "") {
    alert("Please fill all the fields");
    return;
  }
  const [year, month, day] = birth.split("-");
  const dateToCalculate = new Date(year, month - 1, day);
  const difference = today.getTime() - dateToCalculate.getTime();
  const millisecondsInAYear = 365 * 24 * 60 * 60 * 1000;
  const output = Math.floor(difference / millisecondsInAYear);
  if (output < 0) {
    alert("You should have been born first");
    return;
  }
  result.textContent = output;
  showYears.textContent = output > 1 ? "years" : "year";
};

calculate.addEventListener("click", calculateAge);
