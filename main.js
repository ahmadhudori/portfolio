function toggleDetail(e) {
    // console.log(e.target)
    const target = $(e.target)
    const item = $(target).parents('.about-exp-item')
    const detail = $(item).children('.about-exp-item-detail')
    
    if ($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")

    }


    detail.slideToggle();

}