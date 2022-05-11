$("#container").mouseenter(function(){
    $("body").css("background-image", "url(hackputin.jpg)");
    $("#title").text("Он следит за вами.")
    $("#title").css("color", "black")
    $("#container").css("filter", "opacity(0%)")
  });

$("#container").mouseleave(function(){
    $("body").css("background-image", "none");
    $("#title").css("color", "black")
    $("#title").text("Приветствую вас на моем сайте!")
    $("#container").html("<br><br><br><br><br><br><br>Наведись мышкой")
    $("#container").css("filter", "opacity(100%)")
  });
