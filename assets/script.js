// Moment Real time timer for day and time, MAY NEED TO CHANGE TO CURRENT TIME SO YOU CAN SEE WHAT TIME IT WAS RECORDED
setInterval(function () {
    $('#currentDay').html(moment().format('dddd MMMM Do YYYY, h:mm:ss A'))
}, 1000)
// Check current time with moment
var currentTime = moment()
// Rounds current time to nearest hour, for checking past present future 
currentTime = currentTime.startOf('hour')
// Start of day is at 12, add 9 to return 9am as start of day
var beforeTime = moment().startOf('day').add(9, 'hours')

// time blocks below
// 9am time block, add 0 hours as before time is at 9am already
var time1 = beforeTime.add(0, 'h')
time1 = time1.format('hh:mm A')
// populates time1 into html field
$('.block1').text(time1)
// 10 AM time block
// Add 1 hour so it becomes 10am
var time2 = beforeTime.add(1, 'h')
time2 = time2.format('hh:mm A')
// populates time2 into html field
$('.block2').text(time2)
// 11 AM time block
// Add 1 hour, adds 1 from 10am, becomes 11am
var time3 = beforeTime.add(1, 'h')
time3 = time3.format('hh:mm A')
// populates time3 into html field
$('.block3').text(time3)
// 12 PM time block
// Adding 1 hour from 11am becomes 12pm
var time4 = beforeTime.add(1, 'h')
time4 = time4.format('hh:mm A')
// populates time4 into html field
$('.block4').text(time4)
// 1 PM time block
var time5 = beforeTime.add(1, 'h')
time5 = time5.format('hh:mm A')
// populates time5 into html field
$('.block5').text(time5)
// 2 PM time block
var time6 = beforeTime.add(1, 'h')
time6 = time6.format('hh:mm A')
// populates time6 into html field
$('.block6').text(time6)
// 3 PM time block
var time7 = beforeTime.add(1, 'h')
time7 = time7.format('hh:mm A')
// populates time7 into html field
$('.block7').text(time7)
// 4 PM time block
var time8 = beforeTime.add(1, 'h')
time8 = time8.format('hh:mm A')
// populates time8 into html field
$('.block8').text(time8)
// 5 PM time block
var time9 = beforeTime.add(1, 'h')
time9 = time9.format('hh:mm A')
// populates time9 into html field
$('.block9').text(time9)

// Function below to compare each hour with current time
function testTime() {
    // time1 = 9am
    time1 = moment().startOf('day').add(9, 'hours')
    // Adjusts current time to the hour for checking past, present and future
    currentTime = currentTime.startOf('hour')
    // time1 conditional, tests past present future and applies classes for coloring
    if (currentTime.isAfter(time1)) {
        $('.form9').addClass('past')
    } else if (currentTime.isBefore(time1)) {
        $('.form9').addClass('future')
    } else if (currentTime.isSame(time1)) {
        $('.form9').addClass('present')
    };
    // time2 = 10am
    time2 = moment().startOf('day').add(10, 'hours')
    // time2 conditional
    if (currentTime.isAfter(time2)) {
        $('.form10').addClass('past')
    } else if (currentTime.isBefore(time2)) {
        $('.form10').addClass('future')
    } else if (currentTime.isSame(time2)) {
        $('.form10').addClass('present')
    };
    // time3 = 11am
    time3 = moment().startOf('day').add(11, 'hours')
    // time3 conditional
    if (currentTime.isAfter(time3)) {
        $('.form11').addClass('past')
    } else if (currentTime.isBefore(time3)) {
        $('.form11').addClass('future') 
    } else if (currentTime.isSame(time3)) {
        $('.form11').addClass('present')
    };
    // time4 = 12pm
    time4 = moment().startOf('day').add(12, 'hours')
    // time4 conditional
    if (currentTime.isAfter(time4)) {
        $('.form12').addClass('past')
    } else if (currentTime.isBefore(time4)) {
        $('.form12').addClass('future')
    } else if (currentTime.isSame(time4)) {
        $('.form12').addClass('present')
    };
    // time5 = 1pm
    time5 = moment().startOf('day').add(13, 'hours')
    // time5 conditional
    if (currentTime.isAfter(time5)) {
        $('.form1').addClass('past')
    } else if (currentTime.isBefore(time5)) {
        $('.form1').addClass('future')
    } else if (currentTime.isSame(time5)) {
        $('.form1').addClass('present')
    };
    // time6 = 2pm
    time6 = moment().startOf('day').add(14, 'hours')
    // time6 conditional
    if (currentTime.isAfter(time6)) {
        $('.form2').addClass('past')
    } else if (currentTime.isBefore(time6)) {
        $('.form2').addClass('future')
    } else if (currentTime.isSame(time6)) {
        $('.form2').addClass('present')
    };
    // time7 = 3pm
    time7 = moment().startOf('day').add(15, 'hours')
    // time7 conditional
    if (currentTime.isAfter(time7)) {
        $('.form3').addClass('past')
    } else if (currentTime.isBefore(time7)) {
        $('.form3').addClass('future')
    } else if (currentTime.isSame(time7)) {
        $('.form3').addClass('present')
    };
    // time8 = 4pm
    time8 = moment().startOf('day').add(16, 'hours')
    // time8 conditional
    if (currentTime.isAfter(time8)) {
        $('.form4').addClass('past')
    } else if (currentTime.isBefore(time8)) {
        $('.form4').addClass('future')
    } else if (currentTime.isSame(time8)) {
        $('.form4').addClass('present')
    };
    // time9 = 5pm
    time9 = moment().startOf('day').add(17, 'hours')
    // time9 conditional
    if (currentTime.isAfter(time9)) {
        $('.form5').addClass('past')
    } else if (currentTime.isBefore(time9)) {
        $('.form5').addClass('future')
    } else if (currentTime.isSame(time9)) {
        $('.form5').addClass('present')
    };
}
// Call on function
testTime()