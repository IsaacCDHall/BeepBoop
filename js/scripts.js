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
  $("form").submit(function(event){
    event.preventDefault();
    var numInput = parseInt($("input").val());
    var nameInput = $("#name").val();
    console.log(nameInput);
    for (var index = 0; index <= numInput; index += 1) {
      if (findThrees(index)){
        theCount.push(" not for you, " + nameInput + '.');
      } else if (findTwos(index)){
        theCount.push(" Boop!" );
      }else if (findOnes(index)){
        theCount.push(" Beep!");
      }else {
        theCount.push(index);
      }
    };
    if (nameInput === "boop"){
      theCount.reverse();
    };
    console.log(theCount);
    $(".boop").text(theCount.join(' '));
  });
});
