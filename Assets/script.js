var date = moment().format('dddd, MMMM Do, YYYY');

$("#currentDay").text(date)

var timeBlock = $(".time-block")
var currentTime = moment().hours()

function setColor() {
    timeBlock.each(function() {
        var hour = $(this).attr("id")
        if (currentTime > hour) {
            $(this).addClass("past")
        }
        if (currentTime == hour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        if (currentTime < hour) {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}

setColor()