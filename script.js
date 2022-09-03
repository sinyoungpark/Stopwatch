const button = document.getElementById("button");
const screen = document.getElementById("screen");

let timer;

button.addEventListener("click", () => {
  button.classList.toggle("active");

  let h = 0;
  let m = 0;
  let s = 0;

  if(button.classList.contains("active")){
    timer = setInterval(() => {
      let result = "";
      s++;

      if(s >= 60){
        s = 0;
        m++;
      }
      if(m >= 60){
        m = 0;
        h++;
      }
      if(h >= 12){
        h = 0;
      }

      h < 10 ? result += "0" + h + ":" : result += h + ":";
      m < 10 ? result += "0" + m + ":" : result += m + ":";
      s < 10 ? result += "0" + s : result += s;
      screen.innerText = result;
    }, 1000);
    
  } else {
    clearInterval(timer);
    screen.innerText = "00:00:00";
  }
});

