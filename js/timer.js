/*// Set the date we're counting down to
var countDownDate = new Date("Nov 21, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("asset__clock").innerHTML = days + " Days " + hours + ":"
  + minutes + ":" + seconds + "";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("asset__clock").innerHTML = "EXPIRED";
  }
}, 1000);*/

function createCountDown(elementId, date) {
    // Set the date we're counting down to
    var countDownDate = new Date(date).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById(elementId).innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(elementId).innerHTML = "EXPIRED";
        }
    }, 1000);
}


/*for (var i = 1; i <=100; i++) {
createCountDown('asset__clock1'+ i, "Nov 21, 2021 15:37:25")
}*/
createCountDown('asset__clock', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock1', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock2', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock3', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock4', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock5', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock6', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock7', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock8', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock9', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock10', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock11', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock12', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock13', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock14', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock15', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock16', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock17', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock18', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock19', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock20', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock21', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock22', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock23', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock24', "Nov 21, 2021 15:37:25")
createCountDown('asset__clock25', "Nov 21, 2021 15:37:25")