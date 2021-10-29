// var today = new Date();
//date im counting down to
var bDay = new Date("Dec 27, 2021 00.00.00").getTime();
//update the count down every one second
var x = setInterval(() => {
    //get todays time and date
    var now = new Date().getTime();
    //find the time from now to the Birthday
    var interval = bDay - now;
    //time calculation for days hour minutes and seconds
    var days = Math.floor(interval / (1000 * 60 * 60 * 24));
    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var munites = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60));
    var seconds = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000));
    //display
    var dayrem = days;
    console.log(dayrem);

    if (interval < 0) {
        clearInterval(x);
        console.log("UNTIL NEXT YEAR")
    }


}, 1000);