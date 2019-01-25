var theCount = [];

var findTwo = theCount.indexOf(2);
var findThree = theCount.indexOf(3);
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
    console.log(formInput);
    for (var index = 0; index <= formInput; index += 1) {
      var findOne = theCount.indexOf(1);
      theCount.push(index);
      if (findOne !== -1) {
        theCount[findOne] = "please change";
      }
    }
    $(".boop").text(theCount);
  });
});



// Ideas for changing numbers:
//   Change theCount toString and then .replace(1|2|3)
//   indexOf check, replace
//   needle in haystack find
