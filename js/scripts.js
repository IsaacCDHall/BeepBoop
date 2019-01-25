var theCount = [];

function specifyThrees(input) {
  if (input % 3 === 0) {
    return true;
  } else {
    return false;
  }
};



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
    var formInput = parseInt($("input").val());
    for (var index = 0; index <= formInput; index += 1) {
      console.log("hello" + index);

      // var result = specifyThrees(index);

      if (findThrees(index)){
         theCount.push(" not 3");
      } else if (findTwos(index)){
         theCount.push(" Boop!");
      }else if (findOnes(index)){
         theCount.push(" Beep!");
      }else {
        theCount.push(index);
      }

    }
    console.log(theCount);
    // replaceOnes(theCount.toString());
    // replaceTwos(noOnes);
    // replaceThrees(noTwos);

    $(".boop").text(theCount);
  });
});
