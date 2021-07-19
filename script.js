$(document).ready(function(){
// Displays current date at top of page
const currentTime = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').text(currentTime);

// Save btn
$('.saveBtn').on('click', function(){
    // captures the time of scheduled task
    const time = $(this).attr('id');
    // captures task at scheduled time
    const value = $(this).siblings('textarea').val()
    console.log(time, value);
    // stores time & user input to local storage
    localStorage.setItem(time, value);
});

// for loop which gets users previous scheduled tasks
for (let i = 9; i <= 17; i++) {
    // template literal which re-lists user input 
    $(`#${i}`).siblings('textarea').val(localStorage.getItem(`${i}`));
};

function taskTime() {
    // get current hour in 24hr format
    let dayHour = moment().hour();
    console.log(dayHour);

    // loop over time blocks 
    $('.time-block').each(function() {
        // get scheduled hour 
        let scheduledHour = Number.parseInt($(this).attr('id').split('hour')[1]);
        console.log(scheduledHour);
        alert('here');

        // correlate correct class to corresponding hour 
        if (scheduledHour < dayHour) {
            
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
            
        }
        else if (scheduledHour === dayHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });    
} 

taskTime();
})



