console.log(localStorage.getItem("key"));
function guardar() {
    let input;
     input = document.getElementById("m2").value;
    console.log(input)
    localStorage.setItem("key", input);
    console.log(localStorage.getItem("key"));
    
}
window.onload = function(){
    let valor = localStorage.getItem("key")
    console.log("hola:" +valor )
    document.getElementById("m2").value = valor
}
localStorage.clear()
{/* <input type="text" id="userInput" onfocusout="guardarData()"></input> */}

    /* function noGuarda(){
        let datosAGuardar = {
        j1:document.getElementById("nombrej1").value,
        m2:document.getElementById("m2").value,
        m3:document.getElementById("m3").value,
        m4:document.getElementById("m4").value,
        m5:document.getElementById("m5").value,
        m6:document.getElementById("m6").value,
        m8:document.getElementById("m8").value,
        m9:document.getElementById("m9").value,
        m10:document.getElementById("m10").value,
        m11:document.getElementById("m11").value,
        m12:document.getElementById("m12").value,
        p2:document.getElementById("p2").value,
        p3:document.getElementById("p3").value,
        p4:document.getElementById("p4").value,
        p5:document.getElementById("p5").value,
        p6:document.getElementById("p6").value,
        p8:document.getElementById("p8").value,
        p9:document.getElementById("p9").value,
        p10:document.getElementById("p10").value,
        p11:document.getElementById("p11").value,
        p12:document.getElementById("p12").value,
        t2:document.getElementById("t2").value,
        t3:document.getElementById("t3").value,
        t4:document.getElementById("t4").value,
        t5:document.getElementById("t5").value,
        t6:document.getElementById("t6").value,
        t8:document.getElementById("t8").value,
        t9:document.getElementById("t9").value,
        t10:document.getElementById("t10").value,
        t11:document.getElementById("t11").value,
        t12:document.getElementById("t12").value,
        o2:document.getElementById("o2").value,
        o3:document.getElementById("o3").value,
        o4:document.getElementById("o4").value,
        o5:document.getElementById("o5").value,
        o6:document.getElementById("o6").value,
        o8:document.getElementById("o8").value,
        o9:document.getElementById("o9").value,
        o10:document.getElementById("o10").value,
        o11:document.getElementById("o11").value,
        o12:document.getElementById("o12").value,
        l2:document.getElementById("l2").value,
        l3:document.getElementById("l3").value,
        l4:document.getElementById("l4").value,
        l5:document.getElementById("l5").value,
        l6:document.getElementById("l6").value,
        l8:document.getElementById("l8").value,
        l9:document.getElementById("l9").value,
        l10:document.getElementById("l10").value,
        l11:document.getElementById("l11").value,
        l12:document.getElementById("l12").value,
        }
        
        
        function guardar(){
        let datosAGuardar = {
        j1:document.getElementById("nombrej1").value,
        m2:document.getElementById("m2").value,
        m3:document.getElementById("m3").value,
        m4:document.getElementById("m4").value,
        m5:document.getElementById("m5").value,
        m6:document.getElementById("m6").value,
        m8:document.getElementById("m8").value,
        m9:document.getElementById("m9").value,
        m10:document.getElementById("m10").value,
        m11:document.getElementById("m11").value,
        m12:document.getElementById("m12").value,
        p2:document.getElementById("p2").value,
        p3:document.getElementById("p3").value,
        p4:document.getElementById("p4").value,
        p5:document.getElementById("p5").value,
        p6:document.getElementById("p6").value,
        p8:document.getElementById("p8").value,
        p9:document.getElementById("p9").value,
        p10:document.getElementById("p10").value,
        p11:document.getElementById("p11").value,
        p12:document.getElementById("p12").value,
        t2:document.getElementById("t2").value,
        t3:document.getElementById("t3").value,
        t4:document.getElementById("t4").value,
        t5:document.getElementById("t5").value,
        t6:document.getElementById("t6").value,
        t8:document.getElementById("t8").value,
        t9:document.getElementById("t9").value,
        t10:document.getElementById("t10").value,
        t11:document.getElementById("t11").value,
        t12:document.getElementById("t12").value,
        o2:document.getElementById("o2").value,
        o3:document.getElementById("o3").value,
        o4:document.getElementById("o4").value,
        o5:document.getElementById("o5").value,
        o6:document.getElementById("o6").value,
        o8:document.getElementById("o8").value,
        o9:document.getElementById("o9").value,
        o10:document.getElementById("o10").value,
        o11:document.getElementById("o11").value,
        o12:document.getElementById("o12").value,
        l2:document.getElementById("l2").value,
        l3:document.getElementById("l3").value,
        l4:document.getElementById("l4").value,
        l5:document.getElementById("l5").value,
        l6:document.getElementById("l6").value,
        l8:document.getElementById("l8").value,
        l9:document.getElementById("l9").value,
        l10:document.getElementById("l10").value,
        l11:document.getElementById("l11").value,
        l12:document.getElementById("l12").value,
        }
      
        console.log(datosAGuardar)
        //https://www.acontracorrientech.com/local-storage-en-javascript-guia-completa/
    }} */