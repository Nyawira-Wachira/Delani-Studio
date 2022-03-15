$(document).ready(function() {
    $("img").click(function() {
        $(".icon-showing").toggle();
        $(".icon-hidden").toggle();
    });
});
$(document).ready(function() {
    $("p").click(function() {
        $(".icon-showing").toggle();
        $(".icon-hidden").toggle();
});
});
$(document).ready(function() {
    $("form#mc_embed_signup").submit(function(event) {
    event.preventDefault();
    var name = $("input#mce-NAME").val();
    var email = $("input#mce-Email").val();
    var message = $("input#textarea").val();
    alert("Message received. Thankyou for reaching out to us.")

    });
});

