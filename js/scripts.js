
// Front-End Logic
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    var name = $("input#name").val();
    console.log(name)
    var food = $("input:radio[name=food]:checked").val();
    console.log(food)
    var music = $("#music").val();
    console.log(music)
    var favoriteColor = $("#color").val();
    console.log(favoriteColor)
    var dob = $("#born").val();
    console.log(dob)
    alert("Survey Submitted!");
    event.preventDefault();
    });
});
