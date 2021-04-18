$(document).ready(function () {
    // alert("page under development process");

    //design onclick toggle
    $(".d-image").click(function () {
        $(".design").show();
        $(".d-image").hide();
    });

    $(".design").click(function () {
        $(".d-image").show();
        $(".design").hide();
    });
    $(".dev-image").click(function () {
        $(".development").show();
        $(".dev-image").hide();
    })
    $(".development").click(function () {
        $(".dev-image").show();
        $(".development").hide();

    })
    $(".p-image").click(function () {
        $(".product").show();
        $(".p-image").hide();
    });
    $(".product").click(function () {
        $(".product").hide();
        $(".p-image").show();
    });
    $("document").ready(function () {
        $("#form").submit(function(event) {
            event.preventDefault();
            var uname = $("#name").val();
            var uemail = $("#email").val();
            var message = $("#message").val();

            if (message == " ") {
                alert(uname + ", PLease give us feedback");

            } else {
                alert(uemail + "We have received your email.");
            }


        })
    })




})