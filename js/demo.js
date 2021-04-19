$(function () {
    //�����б��
    $(".combobox").hover(function () {
        $(this).find(".comboboxShow").slideDown();
    }, function () {
        $(this).find(".comboboxShow").hide();
    });

    //���������
    $(".clickbox").click(function () {
        $(this).find(".clickboxShow").slideToggle(200);
        return false;
    });
    $("body").click(function (event) {
        $(".clickboxShow").slideUp(100);
    });
    $(".clickboxShow a").click(function () {
        var $txt = $(this).html();
        $(this).closest('.clickbox').find("a").first().html($txt);
    });
})
