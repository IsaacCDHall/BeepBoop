var theCount = [];
function replaceOnes(str){
	return noOnes = str.replace(/1/g, " Beep!");
}
function replaceTwos(str){
	return noTwos = str.replace(/2/g, " Boop!");
}
var replaceThrees = function(str){
	return noThrees = str.replace(/3/g, " I'm sorry Isaac. I can't do that");
}
function specifyThrees(input) {
  if (input % 3 === 0) {
    return true;
  } else {
    return false;
  }
};


// user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var formInput = parseInt($("input").val());
    for (var index = 0; index <= formInput; index += 1) {
      console.log("hello" + index);

      var result = specifyThrees(index);

        if ((result === true) && (index !== 0)){
           theCount.push("not 3")
        } else{
          theCount.push(index);
        }

    }
    console.log(theCount);
    replaceOnes(theCount.toString());
    replaceTwos(noOnes);
    replaceThrees(noTwos);

    $(".boop").text(noThrees);
  });
});
