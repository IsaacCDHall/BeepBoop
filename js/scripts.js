var theCount = [];

// user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var formInput = parseInt($("input").val());
    console.log(formInput);
    for (var index = 0; index <= formInput; index += 1) {
      theCount.push(index);
    }

    $(".boop").text(theCount);
  });
});
