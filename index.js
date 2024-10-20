const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch("https://rspfer3rw4hr6vp74wr5b63bru0bqrue.lambda-url.us-east-1.on.aws/");
  let data = await response.json();
  counter.innerHTML = ` Views: ${data}`;

}

updateCounter();