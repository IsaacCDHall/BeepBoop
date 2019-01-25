var theCount = [];
function replaceOnes(str){
	return noOnes = str.replace(/1/g, "Beep!");
}
function replaceTwos(str){
	return noTwos = str.replace(/2/g, "Boop!");
}
function replaceThrees(str){
	return noThrees = str.replace(/3/g, "I'm sorry Isaac. I can't do that");
}

// user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var formInput = parseInt($("input").val());
    for (var index = 0; index <= formInput; index += 1) {
      console.log("hello" + index);
      theCount.push(index);
    }
    console.log(theCount);
    replaceOnes(theCount.toString());
    replaceTwos(noOnes);
    replaceThrees(noTwos);
    $(".boop").text(noThrees);
  });
});
