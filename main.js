


  $(".next").click(
    // richiamoòa funzione next
     nextImg
  );

  $(".prev").click(
    // richiamoòa funzione next
     prevImg
  );

  // creo la funzione per scorrere all'immagine dopo
function nextImg() {
    var imgActive = $(".immagini img.active");
    var pallinoActive = $(".pallini i.active");
    imgActive.removeClass("active");
    pallinoActive.removeClass("active");

    if(imgActive.hasClass("last")){
      $(".immagini img.first").addClass("active");
      $(".pallini i.first").addClass("active");
  } else {
    imgActive.next().addClass("active");
    pallinoActive.next().addClass("active");
  }
}

// creo la funzione per scorrere all'immagine prima
function prevImg() {
    var imgActive = $(".immagini img.active");
    var pallinoActive = $(".pallini i.active");
    imgActive.removeClass("active");
    pallinoActive.removeClass("active");

    if(imgActive.hasClass("first")){
      $(".immagini img.last").addClass("active");
      $(".pallini i.last").addClass("active");
  } else {
    imgActive.prev().addClass("active");
    pallinoActive.prev().addClass("active");
  }
}
