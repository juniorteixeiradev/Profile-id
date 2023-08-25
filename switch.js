
const pegarBotao = document.querySelector("#switch button");
const pegarHtml = document.querySelector("body");
const pegarImg = document.querySelector("#avatar")
    pegarBotao.addEventListener("click", function() {
      pegarHtml.classList.toggle("light");
      if(pegarHtml.classList.contains("light")){
        pegarImg.style.opacity = 0;
          setTimeout(() => {
            pegarImg.setAttribute('src', './assets/avatar-light.png');
            pegarImg.style.opacity = 1;
        }, 300)
      } else {
        pegarImg.style.opacity = 0;
          setTimeout(() => {
            pegarImg.setAttribute('src', './assets/avatar.png');
            pegarImg.style.opacity = 1;
        }, 300)
      }
      


    })

