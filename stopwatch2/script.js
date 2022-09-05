const button = document.getElementById("btn");
const screen = document.getElementById("screen");

let timer;

button.addEventListener("click", () => {
  console.log("clicked");
  button.classList.toggle("active");

  let m = 0;
  let s = 0;
  let cs = 0;

  if(button.classList.contains("active")){
    button.innerText = "멈춤";
    timer = setInterval(() => {
      cs++;

      if(cs >= 100){
        cs = 0;
        s++;
      }
      if(s >= 60){
        s = 0;
        m++;
      }
      if(m >= 60){
        m = 0;
      }
      screen.innerText = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(cs).padStart(2, "0")}`;
    }, 10);
  } else {
    button.innerText = "시작";
    clearInterval(timer);
    screen.innerText = "00:00:00";
  }
});