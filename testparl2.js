

// -------------work---------------------------
var art = document.querySelector(".art");
var books = document.querySelector(".books");
var sk = document.querySelector(".sketch");
var sk2 = document.querySelector(".sketch2");
//---------------contact----------------------
let icons =document.querySelector(".icons");
let h1 =document.querySelector(".contact h1");

// -------------------------------------
let artvalue=window.getComputedStyle(art).right;
let booksvalue=window.getComputedStyle(books).left;
let skvalue=window.getComputedStyle(sk).top;
let sk2value=window.getComputedStyle(sk2).top;
// ---------------------------------------
let iconsval=window.getComputedStyle(icons).top;
let h1val=window.getComputedStyle(h1).top;

function setshit2(yPos, el) {
   // el.style.transform =" translate3d("+yPos +"px, " + yPos + "px, 0) rotateZ("+yPos*2+"deg)";

  // -------------------
   if(el===art)
  {
    let k=artvalue;
    k=k.replace('px',"");

    k=parseInt(k)-700;
    k=k+(2*yPos)
    el.style.right = k+"px";
  }
else if(el===books)
 {
   let k=booksvalue;
   k=k.replace('px',"");

   k=parseInt(k);
   k=k+(2*yPos)-900
   el.style.left = k+"px";
 }
 else if(el===sk)
  {
    let k=skvalue;
    k=k.replace('px',"");

    k=parseInt(k);
    k=k+(2*yPos)-900
    el.style.top = k+"px";
  }
  else if(el===sk2)
   {
     let k=sk2value;
     k=k.replace('px',"");

     k=parseInt(k);
     k=k-(2*yPos)+800
     el.style.top = k+"px";

   }
// ---------------
  else if(el===icons)
   {
     let k=iconsval;
     k=k.replace('px',"");

     k=parseInt(k);
     k=k+(2*yPos)-900
     el.style.top = k+"px";
   }
   else if(el===h1)
    {
      let k=h1val;
      k=k.replace('px',"");

      k=parseInt(k);
      k=k+(2*yPos)-700
      el.style.top = k+"px";
    }

}
// var blueSquare = document.querySelector("lastname");
var xScrollPosition;
var yScrollPosition;

function scrollLoop2() {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

     // ---------work--------
     setshit2(yScrollPosition *0.09, art);
     setshit2(yScrollPosition *0.1, books);
     setshit2(yScrollPosition *0.1, sk);
     setshit2(yScrollPosition *0.1, sk2);
     setshit2(yScrollPosition *0.1, icons);
     setshit2(yScrollPosition *0.1, h1);





   window.requestAnimationFrame(scrollLoop2);
}

window.addEventListener("scroll", scrollLoop2);
