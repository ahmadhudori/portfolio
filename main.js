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

function onFormSubmit(e) {
    e.preventDefault()

    const email = $("#email")
    const subject = $("#subject")
    const message = $("#message")

    // console.log($(email).val())

    if(!$(email).val()) {
        alert("email is required")
    } else if(!$(subject).val()) {
        alert("subject is required")
    } else if(!$(message).val()) {
        alert("message is required")
    } else {
        alert("Submit succes")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
};