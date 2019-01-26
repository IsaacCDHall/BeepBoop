var theCount = [];
var nameInput;
function findThrees(num){
  return num.toString().indexOf('3') > -1 //return true or false
}
function findTwos(num){
  return num.toString().indexOf('2') > -1 //return true or false
}
function findOnes(num){
  return num.toString().indexOf('1') > -1 //return true or false
}
// user interface logic
$(document).ready(function(){
  $('button').on('click',function(){
    $('.boop').addClass('animated slideInUp');
    $('div.top').addClass('animated fadeOut');
  });

  $("form").submit(function(event){
    event.preventDefault();
    var numInput = parseInt($("input").val());
    var nameInput = $("#name").val();
    $("#easteregg").hide();
    for (var index = 0; index <= numInput; index += 1) {
      if (findThrees(index)){
        theCount.push(" I'm sorry, " + nameInput + ". I'm afraid I can't do that.");
      } else if (findTwos(index)){
        theCount.push(" Boop!" );
      }else if (findOnes(index)){
        theCount.push(" Beep!");
      }else {
        theCount.push(index);
      }
    };
    if (nameInput.toLowerCase() === "boop"){
      nameInput = "bOoP!!"
      $('body').addClass("booped");
      $("#easteregg").show();
      theCount.reverse();
    };
    $(".boop").text(theCount.join(' '));
  });
});
