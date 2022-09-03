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

      screen.innerText = `${String(h).padStart(2,"0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }, 1000);

  } else {
    clearInterval(timer);
    screen.innerText = "00:00:00";
  }
});

