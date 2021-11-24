var date = moment().format('dddd, MMMM Do, YYYY');

$("#currentDay").text(date)

var timeBlock = $(".time-block")
var currentTime = moment().hours()
//console.log(currentTime)

function setColor() {
    timeBlock.each(function () {
        var hour = $(this).attr("id").split("-")[1]
        //console.log(hour)
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

$("#hour-9").val(localStorage.getItem('9'))
$("#hour-10").val(localStorage.getItem('10'))
$("#hour-11").val(localStorage.getItem('11'))
$("#hour-12").val(localStorage.getItem('12'))
$("#hour-13").val(localStorage.getItem('13'))
$("#hour-14").val(localStorage.getItem('14'))
$("#hour-15").val(localStorage.getItem('15'))
$("#hour-16").val(localStorage.getItem('16'))
$("#hour-17").val(localStorage.getItem('17'))

setColor()