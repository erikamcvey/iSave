function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 10,
            header = $("header");
        if (distanceY > shrinkOn) {
            header.addClass("smaller");
        } else {
            if (header.hasClass("smaller")) {
                header.removeClass("smaller");
            }
        }
    });
    $('[data-toggle="popover"]').popover();
}
window.onload = init();