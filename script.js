const controlSector = window.document.querySelector(".sector-controll")
const formData = window.document.querySelector(".form")

function HandleChangeForm(state) {
  console.log('ativa')
  if (state === 0) {
    controlSector.innerHTML = `
      <div class="now">
        <span>Login</span>
      </div>
        
      <button type="button" class="change-sector" onclick="setTimeout(HandleChangeForm(1), 1000)">
        <span>Cadastro</span>
      </button>
    `
    formData.innerHTML = `
      <form action="/" method="get">
        <input type="email" id="email" name="email" placeholder="E-mail" required><br>
        <input type="password" id="password" name="password" placeholder="Senha" required>
        <p>Esqueci minha senha</p>
        <button type="submit" class="confirm-form">
          <span>Login</span>
        </button>
      </form>
    `
  
  } else {
    controlSector.innerHTML = `
      <div class="now">
        <span>Cadastro</span>
      </div>
        
      <button type="button" class="change-sector" onclick="setTimeout(HandleChangeForm(0), 1000)">
        <span>Login</span>
      </button>
    `
    formData.innerHTML = `
      <form action="/" method="get">
        <input type="text" id="sname" name="sname" placeholder="Nome da Escola" required><br>
        <input type="email" id="email" name="email" placeholder="Seu e-mail" required><br>
        <input type="password" id="password" name="password" placeholder="Crie uma senha" required>
        <div class="phone">
          <input type="number" id="region" name="region" placeholder="&#43;55" required>
          <input type="number" id="number" name="number" placeholder="00 00000-0000" required>
        </div>
        <button type="submit" class="confirm-form">
          <span>Cadastrar</span>
        </button>
      </form>
    `
  }
}



let position = 0;
const carouselImg = window.document.querySelector(".carousel-img")
const carouselController = window.document.querySelector(".carousel-controller")

function nextImg() {
  if (position === 0) {
    position += 1
    carouselImg.innerHTML = `<img src="./src/img/image_02.svg" alt="logo da coursify.me">`
    carouselController.innerHTML = `
      <div class="dot"></div>
      <div class="dot active"></div>
    `

  } else {
    position = 0
    carouselImg.innerHTML = `<img src="./src/img/image_01.svg" alt="logo da coursify.me">`
    carouselController.innerHTML = `
      <div class="dot active"></div>
      <div class="dot"></div>
    `
  }
  timer();
}


function timer() {
  count = setTimeout(nextImg, 3000)
}
window.onload = timer();
