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
        localStorage.setItem(timeEl, taskEl);
    });

//change task background colors to indicate if that time frame is in the past present or future 

function trackTime()
    {
        //get current time in hours
        var currentHour = moment().hour();
        console.log(currentHour);

        //loop over time blocks
        $(".time-block").each(function()
        {
            var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

            //check time and add the bg classes
            if(timeBlock < currentHour)
                {
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                    $(this).addClass("past");
                }
            else if(timeBlock === currentHour)
                {
                    $(this).removeClass("future");
                    $(this).removeClass("past");
                    $(this).addClass("present");
                }
            else
                {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
                }
        })
    }

//get tasks from localStorage if there are any
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

trackTime();