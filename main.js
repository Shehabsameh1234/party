
// global var
let btnNav = document.getElementById("btn-nav")
let offcanvasNav = document.getElementById("offcanvas")
let iconCloseBtn = document.getElementById("icon-close-btn")
let singersSec = document.getElementById("singers")
let closeNavText = document.querySelector(".fa-bars")
// global var


// navBar
$(iconCloseBtn).click(function () {
    $(offcanvasNav).css("transform", "translateX(-100%)")
    $(btnNav).css("left", "0")
    $(iconCloseBtn).css("animation", "none ")
})

$(btnNav).click(function () {

    $(iconCloseBtn).css("animation", "spin 2s 1s ")

    let offcanvasWidth = $(offcanvasNav).css("width")
    if ($(this).css("left") == "0px") {
        $(offcanvasNav).css("transform", "none")
        $(this).css("left", offcanvasWidth)
        $(iconCloseBtn).css("animation", "spin 2s .8s ")
        $(closeNavText).css("animation", "spin 2s  ")

    } else {
        $(offcanvasNav).css("transform", "translateX(-100%)")
        $(this).css("left", "0")
        $(iconCloseBtn).css("animation", "none ")
        $(closeNavText).css("animation", "none ")
    }
})
// navBar


//  singers
$("#singers p").not(":first").hide()
$("#singers h2").click(function () {
    $(this).next().slideToggle(600)
    $("#singers p").not($(this).next()).slideUp(600)
})
//  singers


// duration countdown
let end = new Date('08/19/2024 10:10 PM');
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

function remianing() {
    let now = new Date();
    let distance = end - now;

    let days = Math.floor(distance / day)
    let hours = Math.floor((distance % day) / hour)
    let mins = Math.floor((distance % hour) / minute)
    let seconds = Math.floor((distance % minute) / second)
    document.getElementById("days").innerHTML = days + " D"
    document.getElementById("hours").innerHTML = hours + " H"
    document.getElementById("mins").innerHTML = mins + " M"
    document.getElementById("seconds").innerHTML = seconds + " S"

    if (distance < 0) {
        clearInterval(timer)
        document.getElementById("days").innerHTML = "EXPIRED"
        document.getElementById("hours").innerHTML = "EXPIRED"
        document.getElementById("mins").innerHTML = "EXPIRED"
        document.getElementById("seconds").innerHTML = "EXPIRED"
    }
}
let timer = setInterval(remianing, 1000)
// duration  countdown

// window scroll
// window.onscroll=function(){
//     if(scrollY>200){
//         btnNav.style.display="none"
//     }else{
//         btnNav.style.display="block"
//     }
// }
// window scroll














