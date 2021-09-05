/////////////////////////////////////////
// count passenger
const passenger = document.getElementById("passenger");
const countBtn = document.getElementById("count");
const saveBtn = document.getElementById("save");
const counterPsg = document.getElementById("counter-psg");
const resultEl = document.getElementById("result");
let counter = 0;
let arr = [];
passenger.textContent = counter;

//  count the passenger
countBtn.addEventListener("click", (e) => {
  counter++;
  passenger.textContent = counter;
});

//  save the counted passenger result
saveBtn.addEventListener("click", (e) => {
  arr.push(counter);
  counter = 0;
  passenger.textContent = counter;

  const counterItems = arr
    .map((item, index) => {
      return item;
    })
    .join(", ");

  counterPsg.textContent = counterItems;

  const result = arr.reduce((acc, item) => acc + item);
  resultEl.textContent = result;
});
