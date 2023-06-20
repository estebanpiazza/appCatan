
function borrarData() {
localStorage.clear();
localStorage.setItem("cantidad2",0)
localStorage.setItem("cantidad3",0)
localStorage.setItem("cantidad4",0)
localStorage.setItem("cantidad5",0)
localStorage.setItem("cantidad6",0)
localStorage.setItem("cantidad7",0)
localStorage.setItem("cantidad8",0)
localStorage.setItem("cantidad9",0)
localStorage.setItem("cantidad10",0)
localStorage.setItem("cantidad11",0)
localStorage.setItem("cantidad12",0)
/* document.getElementById("valor-generico1").innerText="2";
document.getElementById("valor-generico2").innerText="2";
document.getElementById("valor-generico3").innerText="2";
document.getElementById("valor-generico4").innerText="2";
document.getElementById("valor-generico5").innerText="2";
document.getElementById("valor-generico6").innerText="2";
document.getElementById("j1").value = "2";
  document.getElementById("j2").value = "2";
  document.getElementById("j3").value = "2";
  document.getElementById("j4").value = "2";
  document.getElementById("j5").value = "2";
  document.getElementById("j6").value = "2"; */ 
  document.getElementById("nombrej1").value = "";
  document.getElementById("nombrej2").value = "";
  document.getElementById("nombrej3").value = "";
  document.getElementById("nombrej4").value = "";
  document.getElementById("nombrej5").value = "";
  document.getElementById("nombrej6").value = "";
  document.getElementById("m2").value = "";
  document.getElementById("m3").value = "";
  document.getElementById("m4").value = "";
  document.getElementById("m5").value = "";
  document.getElementById("m6").value = "";
  document.getElementById("m8").value = "";
  document.getElementById("m9").value = "";
  document.getElementById("m10").value = "";
  document.getElementById("m11").value = "";
  document.getElementById("m12").value = "";
  document.getElementById("p2").value = "";
  document.getElementById("p3").value = "";
  document.getElementById("p4").value = "";
  document.getElementById("p5").value = "";
  document.getElementById("p6").value = "";
  document.getElementById("p8").value = "";
  document.getElementById("p9").value = "";
  document.getElementById("p10").value = "";
  document.getElementById("p11").value = "";
  document.getElementById("p12").value = "";
  document.getElementById("t2").value = "";
  document.getElementById("t3").value = "";
  document.getElementById("t4").value = "";
  document.getElementById("t5").value = "";
  document.getElementById("t6").value = "";
  document.getElementById("t8").value = "";
  document.getElementById("t9").value = "";
  document.getElementById("t10").value = "";
  document.getElementById("t11").value = "";
  document.getElementById("t12").value = "";
  document.getElementById("o2").value = "";
  document.getElementById("o3").value = "";
  document.getElementById("o4").value = "";
  document.getElementById("o5").value = "";
  document.getElementById("o6").value = "";
  document.getElementById("o8").value = "";
  document.getElementById("o9").value = "";
  document.getElementById("o10").value = "";
  document.getElementById("o11").value = "";
  document.getElementById("o12").value = "";
  document.getElementById("l2").value = "";
  document.getElementById("l3").value = "";
  document.getElementById("l4").value = "";
  document.getElementById("l5").value = "";
  document.getElementById("l6").value = "";
  document.getElementById("l8").value = "";
  document.getElementById("l9").value = "";
  document.getElementById("l10").value = "";
  document.getElementById("l11").value = "";
  document.getElementById("l12").value = "";
}

function guardar() {
/*    let j1 = document.getElementById("j1").value;
   let j2 = document.getElementById("j2").value; 
   let j3 = document.getElementById("j3").value; 
   let j4 = document.getElementById("j4").value; 
   let j5 = document.getElementById("j5").value; 
   let j6 = document.getElementById("j6").value;  */
  let nombrej1 = document.getElementById("nombrej1").value;
  let nombrej2 = document.getElementById("nombrej2").value;
  let nombrej3 = document.getElementById("nombrej3").value;
  let nombrej4 = document.getElementById("nombrej4").value;
  let nombrej5 = document.getElementById("nombrej5").value;
  let nombrej6 = document.getElementById("nombrej6").value;
  let m2 = document.getElementById("m2").value;
  let m3 = document.getElementById("m3").value;
  let m4 = document.getElementById("m4").value;
  let m5 = document.getElementById("m5").value;
  let m6 = document.getElementById("m6").value;
  let m8 = document.getElementById("m8").value;
  let m9 = document.getElementById("m9").value;
  let m10 = document.getElementById("m10").value;
  let m11 = document.getElementById("m11").value;
  let m12 = document.getElementById("m12").value;
  let p2 = document.getElementById("p2").value;
  let p3 = document.getElementById("p3").value;
  let p4 = document.getElementById("p4").value;
  let p5 = document.getElementById("p5").value;
  let p6 = document.getElementById("p6").value;
  let p8 = document.getElementById("p8").value;
  let p9 = document.getElementById("p9").value;
  let p10 = document.getElementById("p10").value;
  let p11 = document.getElementById("p11").value;
  let p12 = document.getElementById("p12").value;
  let t2 = document.getElementById("t2").value;
  let t3 = document.getElementById("t3").value;
  let t4 = document.getElementById("t4").value;
  let t5 = document.getElementById("t5").value;
  let t6 = document.getElementById("t6").value;
  let t8 = document.getElementById("t8").value;
  let t9 = document.getElementById("t9").value;
  let t10 = document.getElementById("t10").value;
  let t11 = document.getElementById("t11").value;
  let t12 = document.getElementById("t12").value;
  let o2 = document.getElementById("o2").value;
  let o3 = document.getElementById("o3").value;
  let o4 = document.getElementById("o4").value;
  let o5 = document.getElementById("o5").value;
  let o6 = document.getElementById("o6").value;
  let o8 = document.getElementById("o8").value;
  let o9 = document.getElementById("o9").value;
  let o10 = document.getElementById("o10").value;
  let o11 = document.getElementById("o11").value;
  let o12 = document.getElementById("o12").value;
  let l2 = document.getElementById("l2").value;
  let l3 = document.getElementById("l3").value;
  let l4 = document.getElementById("l4").value;
  let l5 = document.getElementById("l5").value;
  let l6 = document.getElementById("l6").value;
  let l8 = document.getElementById("l8").value;
  let l9 = document.getElementById("l9").value;
  let l10 = document.getElementById("l10").value;
  let l11 = document.getElementById("l11").value;
  let l12 = document.getElementById("l12").value;

  /************************************************** */

/*   localStorage.setItem("j1", j1);
  localStorage.setItem("j2", j2);
  localStorage.setItem("j3", j3);
  localStorage.setItem("j4", j4);
  localStorage.setItem("j5", j5);
  localStorage.setItem("j6", j6); */


  localStorage.setItem("nombrej1", nombrej1);
  localStorage.setItem("nombrej2", nombrej2);
  localStorage.setItem("nombrej3", nombrej3);
  localStorage.setItem("nombrej4", nombrej4);
  localStorage.setItem("nombrej5", nombrej5);
  localStorage.setItem("nombrej6", nombrej6);

  localStorage.setItem("m2", m2);
  localStorage.setItem("m3", m3);
  localStorage.setItem("m4", m4);
  localStorage.setItem("m5", m5);
  localStorage.setItem("m6", m6);
  localStorage.setItem("m8", m8);
  localStorage.setItem("m9", m9);
  localStorage.setItem("m10", m10);
  localStorage.setItem("m11", m11);
  localStorage.setItem("m12", m12);

  localStorage.setItem("p2", p2);
  localStorage.setItem("p3", p3);
  localStorage.setItem("p4", p4);
  localStorage.setItem("p5", p5);
  localStorage.setItem("p6", p6);
  localStorage.setItem("p8", p8);
  localStorage.setItem("p9", p9);
  localStorage.setItem("p10", p10);
  localStorage.setItem("p11", p11);
  localStorage.setItem("p12", p12);

  localStorage.setItem("t2", t2);
  localStorage.setItem("t3", t3);
  localStorage.setItem("t4", t4);
  localStorage.setItem("t5", t5);
  localStorage.setItem("t6", t6);
  localStorage.setItem("t8", t8);
  localStorage.setItem("t9", t9);
  localStorage.setItem("t10", t10);
  localStorage.setItem("t11", t11);
  localStorage.setItem("t12", t12);

  localStorage.setItem("o2", o2);
  localStorage.setItem("o3", o3);
  localStorage.setItem("o4", o4);
  localStorage.setItem("o5", o5);
  localStorage.setItem("o6", o6);
  localStorage.setItem("o8", o8);
  localStorage.setItem("o9", o9);
  localStorage.setItem("o10", o10);
  localStorage.setItem("o11", o11);
  localStorage.setItem("o12", o12);

  localStorage.setItem("l2", l2);
  localStorage.setItem("l3", l3);
  localStorage.setItem("l4", l4);
  localStorage.setItem("l5", l5);
  localStorage.setItem("l6", l6);
  localStorage.setItem("l8", l8);
  localStorage.setItem("l9", l9);
  localStorage.setItem("l10", l10);
  localStorage.setItem("l11", l11);
  localStorage.setItem("l12", l12);

localStorage.setItem("cantidad2",document.getElementById("cantidad2").innerText)
localStorage.setItem("cantidad3",document.getElementById("cantidad3").innerText)
localStorage.setItem("cantidad4",document.getElementById("cantidad4").innerText)
localStorage.setItem("cantidad5",document.getElementById("cantidad5").innerText)
localStorage.setItem("cantidad6",document.getElementById("cantidad6").innerText)
localStorage.setItem("cantidad7",document.getElementById("cantidad7").innerText)
localStorage.setItem("cantidad8",document.getElementById("cantidad8").innerText)
localStorage.setItem("cantidad9",document.getElementById("cantidad9").innerText)
localStorage.setItem("cantidad10",document.getElementById("cantidad10").innerText)
localStorage.setItem("cantidad11",document.getElementById("cantidad11").innerText)
localStorage.setItem("cantidad12",document.getElementById("cantidad12").innerText)

}

window.onload = function cargarDatos() {

  document.getElementById("nombrej1").value = localStorage.getItem("nombrej1");
  document.getElementById("nombrej2").value = localStorage.getItem("nombrej2");
  document.getElementById("nombrej3").value = localStorage.getItem("nombrej3");
  document.getElementById("nombrej4").value = localStorage.getItem("nombrej4");
  document.getElementById("nombrej5").value = localStorage.getItem("nombrej5");
  document.getElementById("nombrej6").value = localStorage.getItem("nombrej6");
  document.getElementById("m2").value = localStorage.getItem("m2");
  document.getElementById("m3").value = localStorage.getItem("m3");
  document.getElementById("m4").value = localStorage.getItem("m4");
  document.getElementById("m5").value = localStorage.getItem("m5");
  document.getElementById("m6").value = localStorage.getItem("m6");
  document.getElementById("m8").value = localStorage.getItem("m8");
  document.getElementById("m9").value = localStorage.getItem("m9");
  document.getElementById("m10").value = localStorage.getItem("m10");
  document.getElementById("m11").value = localStorage.getItem("m11");
  document.getElementById("m12").value = localStorage.getItem("m12");
  document.getElementById("p2").value = localStorage.getItem("p2");
  document.getElementById("p3").value = localStorage.getItem("p3");
  document.getElementById("p4").value = localStorage.getItem("p4");
  document.getElementById("p5").value = localStorage.getItem("p5");
  document.getElementById("p6").value = localStorage.getItem("p6");
  document.getElementById("p8").value = localStorage.getItem("p8");
  document.getElementById("p9").value = localStorage.getItem("p9");
  document.getElementById("p10").value = localStorage.getItem("p10");
  document.getElementById("p11").value = localStorage.getItem("p11");
  document.getElementById("p12").value = localStorage.getItem("p12");
  document.getElementById("t2").value = localStorage.getItem("t2");
  document.getElementById("t3").value = localStorage.getItem("t3");
  document.getElementById("t4").value = localStorage.getItem("t4");
  document.getElementById("t5").value = localStorage.getItem("t5");
  document.getElementById("t6").value = localStorage.getItem("t6");
  document.getElementById("t8").value = localStorage.getItem("t8");
  document.getElementById("t9").value = localStorage.getItem("t9");
  document.getElementById("t10").value = localStorage.getItem("t10");
  document.getElementById("t11").value = localStorage.getItem("t11");
  document.getElementById("t12").value = localStorage.getItem("t12");
  document.getElementById("o2").value = localStorage.getItem("o2");
  document.getElementById("o3").value = localStorage.getItem("o3");
  document.getElementById("o4").value = localStorage.getItem("o4");
  document.getElementById("o5").value = localStorage.getItem("o5");
  document.getElementById("o6").value = localStorage.getItem("o6");
  document.getElementById("o8").value = localStorage.getItem("o8");
  document.getElementById("o9").value = localStorage.getItem("o9");
  document.getElementById("o10").value = localStorage.getItem("o10");
  document.getElementById("o11").value = localStorage.getItem("o11");
  document.getElementById("o12").value = localStorage.getItem("o12");
  document.getElementById("l2").value = localStorage.getItem("l2");
  document.getElementById("l3").value = localStorage.getItem("l3");
  document.getElementById("l4").value = localStorage.getItem("l4");
  document.getElementById("l5").value = localStorage.getItem("l5");
  document.getElementById("l6").value = localStorage.getItem("l6");
  document.getElementById("l8").value = localStorage.getItem("l8");
  document.getElementById("l9").value = localStorage.getItem("l9");
  document.getElementById("l10").value = localStorage.getItem("l10");
  document.getElementById("l11").value = localStorage.getItem("l11");
  document.getElementById("l12").value = localStorage.getItem("l12");

  document.getElementById("cantidad2").innerText= localStorage.getItem("cantidad2")
  document.getElementById("cantidad3").innerText=localStorage.getItem("cantidad3")
  document.getElementById("cantidad4").innerText=localStorage.getItem("cantidad4")
  document.getElementById("cantidad5").innerText=localStorage.getItem("cantidad5")
  document.getElementById("cantidad6").innerText=localStorage.getItem("cantidad6")
  document.getElementById("cantidad7").innerText=localStorage.getItem("cantidad7")
  document.getElementById("cantidad8").innerText=localStorage.getItem("cantidad8")
  document.getElementById("cantidad9").innerText=localStorage.getItem("cantidad9")
  document.getElementById("cantidad10").innerText=localStorage.getItem("cantidad10")
  document.getElementById("cantidad11").innerText=localStorage.getItem("cantidad11")
  document.getElementById("cantidad12").innerText=localStorage.getItem("cantidad12")

};
