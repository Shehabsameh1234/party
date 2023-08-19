let btnNav = document.getElementById("btn-nav")
let offcanvasNav = document.getElementById("offcanvas")
let iconCloseBtn = document.getElementById("icon-close-btn")
let closeNaveText = document.querySelector(".fa-bars")


$(iconCloseBtn).click(function () {
    $(offcanvasNav).css("transform", "translateX(-100%)")
    $(btnNav).css("left", "0")
    $(iconCloseBtn).css("animation","none ")
})

$(btnNav).click(function () {

    $(iconCloseBtn).css("animation","spin 2s 1s ")

    let offcanvasWidth = $(offcanvasNav).css("width")
    if ($(this).css("left") == "0px") {
        $(offcanvasNav).css("transform", "none")
        $(this).css("left", offcanvasWidth)
        $(iconCloseBtn).css("animation","spin 2s .8s ")
        $(closeNaveText).css("animation","spin 2s  ")

    } else {
        $(offcanvasNav).css("transform", "translateX(-100%)")
        $(this).css("left", "0")
        $(iconCloseBtn).css("animation","none ")
        $(closeNaveText).css("animation","none ")
    }
})








