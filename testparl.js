
// --------abou-------------
var a = document.querySelector(".about-pic");
var b = document.querySelector(".filter2");
var c = document.querySelector(".filter-about");
var d = document.querySelector(".firstname");
var e = document.querySelector(".lastname");
// -----------------------------
let firstnamevalue=window.getComputedStyle(d).top;
let lastnamevalue=window.getComputedStyle(e).top;
// -------------work---------------------------


function setshit(yPos, el) {
   // el.style.transform =" translate3d("+yPos +"px, " + yPos + "px, 0) rotateZ("+yPos*2+"deg)";

   if(el===a)
   {
        el.style.transform =" translate("+yPos+"px,-"+yPos+"px) rotateZ(16deg)";
   }
  else if(el===b)
  {
       el.style.transform ="rotateZ("+yPos+"deg)";
  }
  else if(el===c)
  {
        el.style.transform =" translate("+yPos+"px,"+yPos+"px) rotateZ("+yPos+"deg)";
  }
  else if(el===d)
  {
    let k=firstnamevalue;
    k=k.replace('px',"");

    k=parseInt(k)
    k=k+(2*yPos)
    el.style.top = k+"px";
  }
  else if(el===e)
  {
    let k=lastnamevalue;
    k=k.replace('px',"");

    k=parseInt(k)
    k=k-(2*yPos)
    el.style.top = k+"px";
  }
  // -------------------
  else if(el===sk2)
  {
    let k=sk2value;
    k=k.replace('px',"");

    k=parseInt(k)
    k=k+(2*yPos)
    el.style.top = k+"px";
  }
  else if(el===sk)
  {
    let k=skvalue;
    k=k.replace('px',"");

    k=parseInt(k)
    k=k-(2*yPos)
    el.style.top = k+"px";
  }

}
// var blueSquare = document.querySelector("lastname");
var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

// if(  yScrollPosition>350){
  setshit(yScrollPosition *0.1, a);

  setshit(yScrollPosition *0.3, b);
     setshit(yScrollPosition *0.2, c);
   // }
     setshit(yScrollPosition *0.2, d);
     setshit(yScrollPosition *0.2, e);
     // ---------work--------




   window.requestAnimationFrame(scrollLoop);
}

window.addEventListener("scroll", scrollLoop);
