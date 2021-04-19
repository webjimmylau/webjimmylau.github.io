$(function(){
    //
    $(".head").load("head.html");
    $(".foot").load("foot.html");

    //subMenu
    $(".subMenu a").click(function(){
        $(".subMenu a").removeClass("click");
        $(this).addClass("click");
    });
})