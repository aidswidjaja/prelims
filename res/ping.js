pingFunction()

const interval = setInterval(function() {
        pingFunction()
  }, 30000);
 

function pingFunction() {

var p = new Ping();
 

p.ping("https://teams.microsoft.com", function(err, data) {
  // Also display error if err is returned.
  if (err) {
    data = data + " " + err;
  }
  document.getElementById("ping-teams").innerHTML = data;
});

p.ping("https://canvas.instructure.com", function(err, data) {
  // Also display error if err is returned.
  if (err) {
    data = data + " " + err;
  }
  document.getElementById("ping-canvas").innerHTML = data;
});

}