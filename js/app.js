$(document).ready(function () {
    // alert("page under development process");

    //design onclick toggle
    $(".des-image").click(function () {
        $(".design").show();
        $(".des-image").hide();
       
    });

    $(".design").click(function () {
        $(".des-image").show();
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
    $("#work1").hover(function(){
        $("#work1").toggle();
        $("#w1").toggle();
    })
    $("#work2").hover(function(){
        $("#work2").toggle();
        $("#w2").toggle();
    })
    $("#work3").hover(function(){
        $("#work3").toggle();
        $("#w3").toggle();
    })
    $("#work4").hover(function(){
        $("#work4").toggle();
        $("#w4").toggle();
    })
    $("#work5").hover(function(){
        $("#work5").toggle();
        $("#w5").toggle();
    })
    $("#work6").hover(function(){
        $("#work6").toggle();
        $("#w6").toggle();
    })
    $("#work7").hover(function(){
        $("#work7").toggle();
        $("#w7").toggle();
    })
    $("#work8").hover(function(){
        $("#work8").toggle();
        $("#w8").toggle();
    });


    $("document").ready(function () {
    $(".validate").submit(function (event) {
        event.preventDefault();
        var uname = $("#mce-NAME").val();
        var umail = $("#mce-EMAIL").val();
        var message = $("#textarea").val();

        if (message == " ") {
            alert(" PLease give us feedback");

        } else {
            alert( uname + " We have received your email.("+ umail+ ") Thank you for reaching us.");

        }



    })
    })






})
