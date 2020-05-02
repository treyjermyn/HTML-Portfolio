$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop()
    var pageDown = pageTop + $(window).height()
    var tags = $(".design-sec")

    for (var i = 0; i < tags.length; i++) {

        var tag = tags[i]
        if ($(tag).position().top < pageDown) {
            $(tag).addClass("visible")
        } else {
            $(tag).removeClass("visible")
        }
    }
})