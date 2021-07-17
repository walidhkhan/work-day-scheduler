$(document).ready(function(){
// Displays current date at top of page
const currentTime = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').text(currentTime);

// Save btn
$(".saveBtn").on('click', function(){

    const time = $(this).attr('id');
    const value = $(this).siblings('textarea').val()
    console.log(time, value);
    // stores time & user input to local storage
    localStorage.setItem(time, value);
});


for (let i = 9; i <= 17; i++) {
    // for loop with template literal which re-lists user input 
    $(`#${i}`).siblings('textarea').val(localStorage.getItem(`${i}`));
};


})


