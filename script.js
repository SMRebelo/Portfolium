function toggleMode(){
  const html = document.documentElement // pega o html
  html.classList.toggle("light")

  // tenho que pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar imagem light
    img.setAttribute('src', './assets/avatar-light.svg');// ajustar , modificar um atributo!
    img.setAttribute('alt', 'Foto de perfil durante o dia')
  } else {
    //se tiver dark mode adicionar imagem normal
    img.setAttribute("src", "./assets/avatar-night.svg");
    img.setAttribute("alt", "Foto de perfil durante o Surf")
  }

  strLower = stg.toLowercase 

}
