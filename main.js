


  $(".next").click(
    // richiamoòa funzione next
     nextImg
  );

//   creo la funzione per scorrere all'immagine dopo
//   function nextImg() {
//     var imgActive = $(".immagini img.active");
//     imgActive.removeClass("active");
//
//     if(imgActive.hasClass("last")){
//       $(".immagini img.first").addClass("active");
//   } else {
//     imgActive.next().addClass("active");
//   }
// }
















)






















// richiamo la freccia destra
var nextArrow = $(".next");

// richiamo la freccia sinistra
var prevArrow = $(".prev");

// richiamo l'immagine attiva
var imgActive = $("img.active");




nextArrow.click(function nextImg() {
  imgActive.removeClass("active");

  if(imgActive.hasClass("last")){
    $("#carosello img.first").addClass("active");
  } else {
    imgActive.next().addClass("active");
  }

 }
)
