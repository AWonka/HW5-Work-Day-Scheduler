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

