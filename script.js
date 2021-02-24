/*
let controlSector = window.document.querySelector(".sector-controll")
let inputs = window.document.querySelector(".inputs")
*/

function animationChangeForm(state) {
  if (state === 0) {
    window.document.querySelector(".now").className = 'now forward1'
    window.document.querySelector(".change-sector").className = 'change-sector backward1'
    window.document.querySelector(".inputs").className = 'inputs upward'
    window.document.querySelector(".confirm-form").className = 'confirm-form upbotton'
  } else {
    window.document.querySelector(".now").className = 'now forward0'
    window.document.querySelector(".change-sector").className = 'change-sector backward0'
    window.document.querySelector(".inputs").className = 'inputs downward'
    window.document.querySelector(".confirm-form").className = 'confirm-form downbotton'
  }
  
  setTimeout(changeForm, 300, state)
}

function changeForm(state) {
  if (state === 0) {
    window.document.querySelector(".inputs").innerHTML = `
      <input type="email" id="email" name="email" placeholder="E-mail" required><br>
      <input type="password" id="password" name="password" placeholder="Senha" required>
      <p>Esqueci minha senha</p>
      `
  } else {
    window.document.querySelector(".inputs").innerHTML = `
      <input type="text" id="sname" name="sname" placeholder="Nome da Escola" required><br>
      <input type="email" id="email" name="email" placeholder="Seu e-mail" required><br>
      <input type="password" id="password" name="password" placeholder="Crie uma senha" required>
      <div class="phone">
        <input type="number" id="region" name="region" placeholder="&#43;55" required>
        <input type="number" id="number" name="number" placeholder="00 00000-0000" required>
      </div>
    `
  }

  setTimeout(changeTitle, 700, state)
}

function changeTitle(state) {
  window.document.querySelector(".form").className = 'form'
  if (state === 0) {
    window.document.querySelector(".sector-controll").innerHTML = `
      <div class="now">
        <span>Login</span>
      </div>
        
      <button type="button" class="change-sector" onclick="animationChangeForm(1)">
        <span>Cadastro</span>
      </button>
    `
  } else {
    window.document.querySelector(".sector-controll").innerHTML = `
      <div class="now">
        <span>Cadastro</span>
      </div>
        
      <button type="button" class="change-sector" onclick="animationChangeForm(0)">
        <span>Login</span>
      </button>
    `
  }
  window.document.querySelector(".form").className = 'form'
  window.document.querySelector(".confirm-form").className = 'confirm-form'
  changeButtonText(state)
}

function changeButtonText(state) {
  if (state === 0) {
    window.document.querySelector(".confirm-form").innerHTML = `
      <span>Login</span>
    `
  } else {
    window.document.querySelector(".confirm-form").innerHTML = `
      <span>Cadastrar</span>
    `
  }
}



let position = 0;
function transition() {
  if (position === 0) {
    position += 1
    window.document.querySelector(".carousel-img").innerHTML = `
      <img src="./src/img/image_02.svg" alt="pessoa sentada no sofá mechendo no notebook" class="img2">
    `
    window.document.querySelector(".carousel-controller").innerHTML = `
      <div class="dot"></div>
      <div class="dot active"></div>
    `
  } else {
    position = 0
    window.document.querySelector(".carousel-img").innerHTML = `
      <img src="./src/img/image_01.svg" alt="pessoa sentdada na carteira assitindo aula" class="img1">
    `
    window.document.querySelector(".carousel-controller").innerHTML = `
      <div class="dot active"></div>
      <div class="dot"></div>
    `
  }
  timer();
}


function timer() {
  count = setTimeout(transition, 3500)
}
window.onload = timer();
