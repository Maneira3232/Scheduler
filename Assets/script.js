var date = moment().format('dddd, MMMM Do, YYYY');

$("#currentDay").text(date)

var timeBlock = $(".time-block")
var currentTime = moment().hours()

function setColor() {
    timeBlock.each(function () {
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

$(".saveBtn").on("click", function () {
    var value = $(this).siblings('.description').val()
    //console.log(value)
    var time = $(this).attr('id')
    //console.log(time)
    localStorage.setItem(time, value)
})

$("#hour9").val(localStorage.getItem('9'))
$("#hour10").val(localStorage.getItem('10'))
$("#hour11").val(localStorage.getItem('11'))
$("#hour12").val(localStorage.getItem('12'))
$("#hour13").val(localStorage.getItem('13'))
$("#hour14").val(localStorage.getItem('14'))
$("#hour15").val(localStorage.getItem('15'))
$("#hour16").val(localStorage.getItem('16'))
$("#hour17").val(localStorage.getItem('17'))

setColor()