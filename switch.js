
const pegarBotao = document.querySelector("#switch button");
const pegarHtml = document.querySelector("body");
const pegarImg = document.querySelector("#avatar")
    pegarBotao.addEventListener("click", function() {
      pegarHtml.classList.toggle("light");
      
      if(pegarHtml.classList.contains("light")){
        pegarImg.setAttribute('src', './assets/avatar-light.png');
      } else {
        pegarImg.setAttribute('src', './assets/avatar.png');
      }
      


    })

