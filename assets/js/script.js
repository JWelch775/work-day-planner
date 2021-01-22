//display current day of the week and date 
var todayDate = moment().format("dddd, MMM Do YYYY");

$("#currentDay").html(todayDate);
// save text data from textarea on click
$(".saveBtn").on("click", function()
    {
        //get values of text and task timeframe
        var taskEl = $(this).siblings(".description").val();
        //console.log(taskEl);
        var timeEl = $(this).parent().attr("id")
        //console.log(timeEl);

        //save in localStorage
        localStorage.setItem(taskEl, timeEl);
    });

//use saveBtn to save tasks to local storage and complete task edit

//change task background colors to indicate if that time frame is in the past present or future 