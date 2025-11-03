$(document).ready(function () {
  console.log("jQuery is ready!");
  
  // Task 0 - Show jQuery status
  $("#jquery-status").text("✓ jQuery is ready! Version: " + $.fn.jquery);

  // Task 1 - Selectors & CSS (with buttons)
  $("#change-text-btn").click(() => {
    $("#task1-id").html("<strong>ID changed!</strong>");
    $(".task1-class").text("Class text changed!");
    $("p").eq(2).text("TAG text changed!");
  });

  $("#change-css-btn").click(() => {
    $("#task1-id").css("color", "blue");
    $(".task1-class").css("font-weight", "bold");
    $("p").eq(2).css("color", "green");
  });

  // Task 2 - Visibility Methods
  $("#hide-btn").click(() => $("#text2").hide());
  $("#show-btn").click(() => $("#text2").show());
  $("#toggle-btn").click(() => $("#text2").toggle());

  // Task 3 - Fade Methods
  $("#fadein-btn").click(() => $("#fade-img").fadeIn());
  $("#fadeout-btn").click(() => $("#fade-img").fadeOut());
  $("#fadetoggle-btn").click(() => $("#fade-img").fadeToggle());

  // Task 4 - Slide Methods
  $("#slide-up").click(() => $("#panel").slideUp());
  $("#slide-down").click(() => $("#panel").slideDown());
  $("#slide-toggle").click(() => $("#panel").slideToggle());

  // Task 5 - Add & Remove Items
  $("#add-item").click(() => $("#item-list").append("<li>New Item (append)</li>"));
  $("#prepend-item").click(() => $("#item-list").prepend("<li>New Item (prepend)</li>"));
  $("#remove-item").click(() => $("#item-list li:last").remove());

  // Task 6 - Modify Attributes
// Task 6 - Modify Attributes
$("#change-img").click(() => {
    const newImages = [
        "https://via.placeholder.com/300x200/ff0000/ffffff?text=Image+1",
        "https://via.placeholder.com/300x200/00ff00/ffffff?text=Image+2",
        "https://via.placeholder.com/300x200/0000ff/ffffff?text=Image+3"
    ];

    $(".attr-img").each(function(index) {
        $(this).attr("src", newImages[index]);
    });
});

$("#change-link").click(() => $("#attr-link").attr("href", "https://youtube.com").text("Go to YouTube"));


  // Task 7 - Form Interaction
  $("#name-input").on("input", () => $("#display-name").text($("#name-input").val()));
  $("#email-input").on("input", () => $("#display-email").text($("#email-input").val()));

  // Task 8 - Basic Animation
  $("#animate-btn").click(() => {
    $("#animate-box").animate({ left: "250px", height: "120px", width: "120px" }, 1000);
  });
  
  $("#reset-animate").click(() => {
    $("#animate-box").stop().css({ left: "0px", height: "80px", width: "80px" });
  });

  // Task 9 - Sequential Animation
  $("#seq-btn").click(() => {
    $("#seq-box")
      .animate({ left: "200px" }, 500)
      .animate({ top: "100px" }, 500)
      .animate({ width: "50px", height: "50px" }, 500)
      .animate({ left: "0px", top: "0px", width: "80px", height: "80px" }, 500);
  });
  
  $("#reset-seq").click(() => {
    $("#seq-box").stop().css({ left: "0px", top: "0px", width: "80px", height: "80px" });
  });

  // Task 10 - Combined Animation
  $("#combo-btn").click(() => {
    $("#combo-box").animate({
      left: "150px",
      opacity: 0.5,
      height: "150px",
      width: "150px"
    }, 1000);
  });
  
  $("#reset-combo").click(() => {
    $("#combo-box").stop().css({ left: "0px", opacity: 1, height: "80px", width: "80px" });
  });

  // Task 11 - Mini Project: Bouncing Ball
  let bounce;
  $("#start-ball").click(function () {
    clearInterval(bounce); // Stop previous animation
    $("#ball").stop().css({ left: 0, top: 45 }); // Reset position
    
    bounce = setInterval(function () {
      $("#ball")
        .animate({ left: "+=200px", top: "-=60px" }, 400)
        .animate({ top: "+=60px" }, 300)
        .animate({ left: "-=200px", top: "-=60px" }, 400)
        .animate({ top: "+=60px" }, 300);
    }, 1600);
  });

  $("#stop-ball").click(function () {
    clearInterval(bounce);
    $("#ball").stop().css({ left: 0, top: 45 });
  });
});