const elements = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Hallo",
    "こんにちは",
    "Namaste",
    "Salam",
    "مرحبًا",
    "Привет",
    "你好"
];

const output = document.getElementById("loader");

let index = 0;

function Loader() {
    if (index < elements.length) {
        output.textContent = elements[index];
        index++;
    } else {
        clearInterval(intervalId);
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }
}

Loader();

const intervalId = setInterval(Loader, 200);





window.onkeydown = function(event) {
  const inputElement = document.getElementById('input');
  
  if (event.keyCode == 32) {
    event.preventDefault();
    
    if (inputElement) {
      let currentValue = inputElement.value;
      inputElement.value = currentValue.slice(0, -1);
    }
  }
  
   if (event.key === "Backspace") {
        event.preventDefault();
        inputElement.value += " ";
    }
}
