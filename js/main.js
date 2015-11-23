$(document).ready(function () {
    var delay = 9000,
        fade = 1000;
    var banners = $('.banner');
    var len = banners.length;
    var i = 0;

    setTimeout(cycle, delay);

    function cycle() {
        $(banners[i % len]).fadeOut(fade, function () {
            $(banners[++i % len]).fadeIn(fade, function () {
                setTimeout(cycle, delay);
            });
        });
    }

    var cont = $('.head');
    var lenh = cont.length;

    var j = 0;

    setTimeout(cycleh, delay);

    function cycleh() {
        $(cont[j % lenh]).fadeOut(fade, function () {
            $(cont[++j % lenh]).fadeIn(fade, function () {
                setTimeout(cycleh, delay);
            });
        });
    }





});
