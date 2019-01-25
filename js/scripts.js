var theCount = [];

// var x = "0";
// var z = [];
// function find(haystack, needle) {
//     return !!~haystack.indexOf(needle);
// };




// user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var formInput = parseInt($("input").val());
    for (var index = 0; index <= formInput; index += 1) {
      var findOne = theCount.indexOf(1);
      var findTwo = theCount.indexOf(2);
      var findThree = theCount.indexOf(3);
      if (findThree !== -1) {
        theCount[findThree] = " I'm Sorry, Isaac. I'm afraid I can't do that";
      } else if (findTwo !== -1) {
        theCount[findTwo] = " Boop!";
      } else if (findOne !== -1) {
        theCount[findOne] = " Beep!";
      }
      theCount.push(index);
    }
    $(".boop").text(theCount);
  });
});



// Ideas for changing numbers:
//   Change theCount toString and then .replace(1|2|3)
//   indexOf check, replace
//   needle in haystack find
