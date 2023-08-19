let btnNav = document.getElementById("btn-nav")
let offcanvasNav = document.getElementById("offcanvas")
let iconCloseBtn = document.getElementById("icon-close-btn")


$(iconCloseBtn).click(function () {
    $(offcanvasNav).css("transform", "translateX(-100%)")
    $(btnNav).css("left", "0")
})
$(btnNav).click(function () {
    let offcanvasWidth = $(offcanvasNav).css("width")
    if ($(this).css("left") == "0px") {
        $(offcanvasNav).css("transform", "none")
        $(this).css("left", offcanvasWidth)
    } else {
        $(offcanvasNav).css("transform", "translateX(-100%)")
        $(this).css("left", "0")
    }
})








