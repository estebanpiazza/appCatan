let estadoFondo = true
  
function cambiarFondo(){
  if ( estadoFondo == true){
    estadoFondo = false
  document.body.style.backgroundImage  = "url('negro.png')";
}else{
  estadoFondo = true
  document.body.style.backgroundImage  = "url('https://c4.wallpaperflare.com/wallpaper/854/394/509/landscape-catan-vr-4k-8k-wallpaper-preview.jpg')";
  
}}
  let salidaDados = [0,0,0,0,0,0,0,0,0,0,0,0,0]
  let cantidadesDados 
  let Vmadera = 0
  let Vladrillo = 0
  let Vpiedra = 0
  let Voveja = 0
  let Vtrigo = 0
  function ganador(){
      for (let i = 1; i< 7;i++){
          
          let puntos = document.getElementById("j"+i).value
          if(puntos == 10){
              let nombreGanador = document.getElementById("nombrej"+i).value
              let ganador= ("El ganador es el jugador: "+ nombreGanador) 
              abrirModal(ganador)
          }
      }
  }
  function recursosAgarrar (numero){

      document.getElementById("ultimoDado").innerText = "Ultimo dado: "+numero
      numeroParseado = parseInt(numero)
      
      document.getElementById("cantidad"+numeroParseado).innerText=  parseInt(document.getElementById("cantidad"+numeroParseado).innerText) + 1   
      if (numero != 7){
      let Vmadera  = document.getElementById("m"+numero).value
      let Vladrillo  = document.getElementById("l"+numero).value
      let Vpiedra  = document.getElementById("p"+numero).value
      let Voveja  = document.getElementById("o"+numero).value
      let Vtrigo  = document.getElementById("t"+numero).value
      mensaje = `Recolectas:`
      document.getElementById("Recolectas").innerText = mensaje
      document.getElementById("cantidadMadera").innerHTML= Vmadera
      document.getElementById("cantidadLadrillo").innerHTML= Vladrillo
      document.getElementById("cantidadPiedra").innerHTML= Vpiedra
      document.getElementById("cantidadOveja").innerHTML= Voveja
      document.getElementById("cantidadTrigo").innerHTML= Vtrigo

      
  }else{

      mensaje =  "Contá las cartas, si tenes más de 7 descartá. Si tenes una cantidad impar de cartas, se redondea a tu favor, es decir, hacia abajo.\n  Por ejemplo, si tiene 9 cartas debes devolver 4"
      abrirModal(mensaje)
      
  }
}
/* Set the width of the side navigation to 250px */
function openNav() {
document.getElementById("mySidenav").style.width = "400px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function abrirModal(mensaje) {
  document.getElementById("mensajeGanador").innerText= mensaje
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(mensaje) {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}
